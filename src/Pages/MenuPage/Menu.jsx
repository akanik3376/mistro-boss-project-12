import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../Hooks/useMenu';

// images
import coverImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"

import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {

    const [menus] = useMenu()
    const dessert = menus?.filter(item => item.category === 'dessert')
    // console.log(dessert)
    const pizza = menus?.filter(item => item.category === 'pizza')
    // console.log(pizza)
    const salad = menus?.filter(item => item.category === 'salad')
    // console.log(salad)
    const soup = menus?.filter(item => item.category === 'soup')
    // console.log(soup)
    const offered = menus?.filter(item => item.category === 'offered')



    return (
        <div>
            <Helmet>
                <title>Bistro Boss | menu</title>
            </Helmet>

            {/* section cover  */}
            <Cover coverImg={coverImg} title={"OUR MENU"} subTitles={"Would you like to try a dish?"}></Cover>
            <SectionTitle
                subHeading={"---Don't miss---"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>


            {/* TODAY'S OFFER section */}
            <div className='mb-7'>
                <MenuCategory items={offered}></MenuCategory>
            </div>

            {/* DESSERTS section */}
            <MenuCategory items={dessert}
                title={"DESSERTS"}
                details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                coverImg={dessertImg}

            ></MenuCategory>


            {/* PIZZA section */}
            <div className='my-7'>
                <MenuCategory items={pizza}
                    title={"PIZZA"}
                    details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                    coverImg={pizzaImg}

                ></MenuCategory>
            </div>


            {/* salad section */}
            <div className='my-7'>
                <MenuCategory items={salad}
                    title={"SALADS"}
                    details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                    coverImg={saladImg}

                ></MenuCategory>
            </div>

            {/* PIZZA section */}
            <div className='my-7'>
                <MenuCategory items={salad}
                    title={"SALADS"}
                    details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                    coverImg={saladImg}

                ></MenuCategory>
            </div>


            {/* PIZZA section */}
            <div className='my-7'>
                <MenuCategory items={soup}
                    title={"SOUPS"}
                    details={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                    coverImg={soupImg}

                ></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;