import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../assets/shop/banner2.jpg"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import OrderTad from "../OrderTad/OrderTad";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
    const categories = ["dessert", "pizza", "salad", "soup", "drinks", "offered"]
    const { category } = useParams()
    console.log(category)
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menus] = useMenu()


    // load data base on category/title
    const dessert = menus?.filter(item => item.category === 'dessert')
    const pizza = menus?.filter(item => item.category === 'pizza')
    const salad = menus?.filter(item => item.category === 'salad')
    const soup = menus?.filter(item => item.category === 'soup')
    const drinks = menus?.filter(item => item.category === 'drinks')
    const offered = menus?.filter(item => item.category === 'offered')


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order food</title>
            </Helmet>

            <Cover
                coverImg={coverImg}
                title={"OUR SHOP"}
                subTitles={"Would you like to try a dish?"}
            ></Cover>

            <div className="my-12">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
                    <TabList>
                        <Tab>desserts</Tab>
                        <Tab>pizza</Tab>
                        <Tab>salad</Tab>
                        <Tab>soup</Tab>
                        <Tab>drinks</Tab>
                        <Tab>offered</Tab>
                    </TabList>

                    <TabPanel>
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                        }
                    </div> */}
                        <OrderTad items={dessert}></OrderTad>
                    </TabPanel>

                    <TabPanel>
                        <OrderTad items={pizza}></OrderTad>
                    </TabPanel>

                    <TabPanel>
                        <OrderTad items={salad}></OrderTad>
                    </TabPanel>

                    <TabPanel>
                        <OrderTad items={soup}></OrderTad>
                    </TabPanel>

                    <TabPanel>
                        <OrderTad items={drinks}></OrderTad>
                    </TabPanel>

                    <TabPanel>
                        <OrderTad items={offered}></OrderTad>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;