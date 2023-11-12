/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuCard from "../../../Shared/MenuItem/Menucard";

const MenuCategory = ({ items, title, details, coverImg, }) => {
    console.log(title)
    return (
        <div >
            {
                title && <Cover coverImg={coverImg} title={title} subTitles={details}></Cover>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                {
                    items?.map(menu => <MenuCard key={menu._id} menu={menu}></MenuCard>)
                }
            </div>

            <Link to={`/order/${title}`} className="flex justify-center mt-6">
                <button className="btn btn-outline border-0 border-b-4 border-[#111827]  hover:text-[#BB8506]">ORDER YOUR FAVORITE FOOD</button>
            </Link>

        </div>
    );
};

export default MenuCategory;