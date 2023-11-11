/* eslint-disable react/prop-types */
import Cover from "../../../Shared/Cover/Cover";
import MenuCard from "../../../Shared/MenuItem/Menucard";

const MenuCategory = ({ items, title, details, coverImg }) => {
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
        </div>
    );
};

export default MenuCategory;