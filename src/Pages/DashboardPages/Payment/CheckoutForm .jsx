import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [error, setError] = useState("");
    //import from "@stripe/react-stripe-js";
    const stripe = useStripe()
    const element = useElements()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [cart, refetch] = useCart()
    const navigate = useNavigate()

    // get price from cart array by reduce
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {

        axiosSecure.post("/create-payment-intent", { price: totalPrice })
            .then(res => {

                setClientSecret(res.data.clientSecret);
            })
            .catch(error => {
                // Handle errors from the server
                console.error('Error fetching client secret:', error);
            });
    }, [axiosSecure, totalPrice]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !element) {
            return
        }

        const card = element.getElement(CardElement) //this element come to form > cardElement

        if (card === null) {
            return
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: card
        });

        if (error) {
            // swal(error?.message);
            setError(error?.message);
        } else {
            swal(`Payment success full ${paymentMethod.last4}`)

        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonyms',
                    name: user?.displayName || 'anonyms',

                }
            }
        })
        if (confirmError) {
            // swal(confirmError?.message);
            setError(confirmError?.message);
        } else {
            if (paymentIntent?.status === "succeeded") {

                swal(`$${totalPrice} Payed success fully your paymentIntent id is ${paymentIntent.id}`)

                // now save the payment
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    date: new Date(), //utc date convert by using use moment js
                    transitionId: paymentIntent.id,
                    cardIds: cart.map(item => item?._id),
                    menuIds: cart.map(item => item?.menuId),
                    category: cart.map(item => item?.name),
                    status: 'pending'
                }
                const res = await axiosSecure.post('/payments', payment)

                if (res.data?.paymentResult.insertedId) {
                    swal('Thank You for your payment ')
                }
                refetch()
                navigate('/dashboard/payment-history')
            }
        }
    }


    return (
        <div>
            <h2 className="text-3xl mb-6 font-semibold">Pay now: ${totalPrice}</h2>
            {
                error && <p className="text-red-600 mb-2">{error}</p>
            }
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',

                            },
                        },
                    }}
                />

                <div className="flex justify-center mt-5">
                    <button type="submit" className="btn bg-yellow-500" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;