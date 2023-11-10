import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

// react icon
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import '@smastrom/react-rating/style.css'
import 'swiper/css/navigation';



const Testimonials = () => {

    const [reviews, setReviews] = useState()

    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // console.log(reviews)

    return (
        <div>
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <Swiper

                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper my-20"
            >

                {
                    reviews?.map(review => <SwiperSlide key={review._id}>

                        <div className="flex flex-col items-center justify-center mx-24 my-16 ">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="text-4xl mt-8"><FaQuoteLeft></FaQuoteLeft></p>
                            <p className="md:w-4/6 py-8">{review.details}</p>
                            <p className="text-2xl text-[#CD9003]">{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            {/* <div>
                {
                    reviews?.map(review => <TestimonialSwipe
                        key={review._id} review={review}></TestimonialSwipe>)
                }
            </div> */}
        </div>
    );
};

export default Testimonials;