import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./TESTIMONIALS/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>

            {/* Bistro Boss */}
            {/* Call Us: +88 0192345678910 */}
            {/* CHEF RECOMMENDS */}
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            {/* TESTIMONIALS */}
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;