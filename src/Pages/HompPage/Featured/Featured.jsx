import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import './featured-item.css'
// Featured image
import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="featured-item pt-8 my-20 bg-fixed ">
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>


            <div className="flex flex-col md:flex-row justify-center items-center pb-20 pt-10 px-24 bg-opacity-30 bg-slate-500">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="text-white md:ml-10">
                    <h6>March 20, 2023</h6>
                    <h6>WHERE CAN I GET SOME?</h6>
                    <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-6"> Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;