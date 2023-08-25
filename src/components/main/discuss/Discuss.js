import React from 'react';
import "./Discuss.scss"
import discuss from "../../../assets/videos/discuss.mp4";
import useWindowSize from "../../../hooks/useWindowSize";

const Discuss = () => {

    const {width} = useWindowSize();

    return (
        <div className="video-container">
            <video className="background-video" src={discuss} autoPlay muted loop playsInline/>
            <div className="discuss container mx-auto flex justify-end content-end">
                {width > 500 ? (
                    <div className="discuss-text">
                        проектируйте будущее вместе с нами <button className="discuss-btn">обсудить проект</button>
                    </div>
                ) : (
                    <>
                        <div className="discuss-text">
                            проектируйте будущее вместе с нами
                        </div>
                        <button className="discuss-btn">обсудить проект</button>
                    </>
                )}

            </div>
        </div>
    );
};

export default Discuss;
