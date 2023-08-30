import React from 'react';
// import "./Discuss.scss"
import discuss from "../../../assets/videos/discuss-background.mp4";
import useWindowSize from "../../../hooks/useWindowSize";
import {useLocation, useNavigate} from "react-router-dom";
import {DiscussWrapper} from "./DiscussWrapper";

const Discuss = () => {

    const {width} = useWindowSize();
    const navigate = useNavigate();
    const currentPath = useLocation().pathname;

    return (
        <DiscussWrapper currentPath={currentPath}>
            <div id="discuss-section" className="discuss-container">
                <video className="background-discuss" src={discuss} autoPlay muted loop playsInline/>
                <div className="discuss container mx-auto flex justify-end content-end">
                    {width > 500 ? (
                        <div className="discuss-text">
                            {currentPath === "/team" ? "стать частью команды" : "проектируйте будущее вместе с нами"}
                            {currentPath === "/team" ?
                                <button className="discuss-btn" onClick={() => navigate('/jobs')}>показать вакансии</button> :
                                <button className="discuss-btn">обсудить проект</button>}
                        </div>
                    ) : (
                        <>
                            <div className="discuss-text">
                                {currentPath === "/team" ? "стать частью команды" : "проектируйте будущее вместе с нами"}
                            </div>
                            {currentPath === "/team" ?
                                <button className="discuss-btn" onClick={() => navigate('/jobs')}>показать вакансии</button> :
                                <button className="discuss-btn">обсудить проект</button>}
                        </>
                    )}

                </div>
            </div>
        </DiscussWrapper>

    );
};

export default Discuss;
