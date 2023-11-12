/* eslint-disable react/prop-types */


const MenuCard = ({ menu }) => {

    const { price, image, recipe, name } = menu || {}

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-8 ">
                <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-24 object-cover  mx-auto md:mx-0 " src={image} alt="" />
                <div className="  text-[#737373]">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl uppercase">{name} ---------</h3>
                        <p className="text-[#BB8506]">${price}</p>

                    </div>
                    <p>{recipe}</p>
                </div>


            </div>

        </div>
    );
};

export default MenuCard;