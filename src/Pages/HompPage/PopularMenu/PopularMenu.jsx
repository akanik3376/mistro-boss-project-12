import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PopularMenu = () => {

    const [menus, setMenus] = useState()

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
        </section>
    );
};

export default PopularMenu;