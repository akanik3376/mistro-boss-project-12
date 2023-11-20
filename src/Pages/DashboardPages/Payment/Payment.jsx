import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm ";

// add publishable key upper in the functions component
const stripePromise = loadStripe(import.meta.env.VITE_GET_PEMENT);
// console.log(stripePromise)
// console.log(import.meta.env.VITE_GET_PEMENT)

const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading='Please pay hare' heading='PAYMENT'></SectionTitle>
            <div>
                {/* Import  Elements from @stripe/react-stripe-js*/}
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;