/* eslint-disable react/prop-types */

const FoodCard = ({ item }) => {
    const { price, image, recipe, name } = item || {}
    return (
        <div className="card ">
            <figure >
                <img src={image} alt="image" className="relative" />
            </figure>
            <p className=" absolute right-5 top-4
            bg-[#111827] w-20 text-center font-semibold text-white py-2">${price}</p>
            <div className="card-body items-center text-center bg-[#F3F3F3] ">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline bg-[#111827] border-0 border-b-4 border-[#BB8506] text-[#BB8506] hover:text-[#BB8506]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;