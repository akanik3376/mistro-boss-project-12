import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCard from "../../../Shared/MenuItem/Menucard";

const PopularMenu = () => {

    const [menus, setMenus] = useState()

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(item => item.category === 'popular')
                setMenus(popular)
            })
    }, [])

    return (
        <section className="mb-12">
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    menus?.map(menu => <MenuCard key={menu._id} menu={menu}></MenuCard>)
                }
            </div>
            <div className="flex justify-center mt-8 text-[#1F2937]">
                <button className="btn ">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;