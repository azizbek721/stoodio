import React from 'react';
import "./Header.scss"
import Navbar from "../../../containers/navbar/Navbar";
import mainVideo from "../../../assets/videos/main-video.mp4"
import mainLogo from "../../../assets/images/main-logo.svg"

const Header = () => {

    return (
        <div className="video-container">
            <video className="background-video" src={mainVideo} autoPlay muted loop playsInline />
            <Navbar />
            <header className="container mx-auto flex justify-between items-end">
                <img src={mainLogo} alt=""/>
                <div className="header-texts flex flex-col gap-y-5">
                    <p>создаем</p>
                    <h3>архитектуру, дизайн <br/> и ландшафт в современных стилях</h3>
                </div>
            </header>
        </div>
    );
};

export default Header;
