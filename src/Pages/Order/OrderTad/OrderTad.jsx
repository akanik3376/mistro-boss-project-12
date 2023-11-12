/* eslint-disable react/prop-types */

import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTad = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                items?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTad;