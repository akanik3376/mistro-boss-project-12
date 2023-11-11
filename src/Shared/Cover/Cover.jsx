/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';





const Cover = ({ coverImg, title, subTitles }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={coverImg}
            bgImageAlt="cover img"
            strength={-200}
        >
            <div className="hero h-[700px]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content w-2/3 h-2/5 bg-[#15151599]">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <h4 className="mb-5 uppercase">{subTitles}</h4>

                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;