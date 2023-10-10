import React from 'react';
import discuss from "../../assets/videos/discuss-background.mp4";
import useWindowSize from "../../hooks/useWindowSize";
import {useLocation, useNavigate} from "react-router-dom";
import {DiscussWrapper} from "./DiscussWrapper";
import DiscussModal from "./DiscussModal";
import {dispatch} from "../../store/store";
import {openModal} from "../../store/reducers/discussReducer";

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
                            проектируйте будущее вместе с нами
                            <button className="discuss-btn" onClick={() => dispatch(openModal())}>обсудить проект</button>
                            {/*{currentPath === "/team" ? "стать частью команды" : "проектируйте будущее вместе с нами"}*/}
                            {/*{currentPath === "/team" ?*/}
                            {/*    <button className="discuss-btn" onClick={() => navigate('/vacancies')}>показать*/}
                            {/*        вакансии</button> :*/}
                            {/*    <button className="discuss-btn" onClick={() => dispatch(openModal())}>обсудить проект</button>}*/}
                        </div>
                    ) : (
                        <>
                            <div className="discuss-text">
                                проектируйте будущее вместе с нами
                                {/*{currentPath === "/team" ? "стать частью команды" : "проектируйте будущее вместе с нами"}*/}
                            </div>
                            {/*{currentPath === "/team" ?*/}
                            {/*    <button className="discuss-btn" onClick={() => navigate('/vacancies')}>показать*/}
                            {/*        вакансии</button> :*/}
                            {/*    <button className="discuss-btn">обсудить проект</button>}*/}
                            <button className="discuss-btn" onClick={() => dispatch(openModal())}>обсудить проект</button>
                        </>
                    )}
                </div>
                <DiscussModal/>
            </div>
        </DiscussWrapper>
    );
};

export default Discuss;
