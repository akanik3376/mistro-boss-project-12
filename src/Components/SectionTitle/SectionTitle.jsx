/* eslint-disable react/prop-types */

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="w-2/3 md:w-6/12 mx-auto text-center mt-8">
            <p className="text-[#D99904]">{subHeading}</p>
            <h2 className="text-[#151515] text-3xl border-y-2 py-4 mt-2 mb-8">{heading}</h2>
        </div>
    );
};

export default SectionTitle;