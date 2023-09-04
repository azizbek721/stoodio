import React from 'react';
import "./Header.scss"
import Navbar from "../../containers/navbar/Navbar";

const Header = ({params}) => {
    return (
        <div className="project-params-container">
            <img src={params.img} alt="" className="project-params-background"/>
            <Navbar/>
            <div className="project-params-header container mx-auto flex justify-end items-end content-end">
                <div className="project-params-header-texts flex flex-col gap-y-5">
                    <p>создаем</p>
                    <h3>архитектуру, дизайн <br/> и ландшафт в современных стилях</h3>
                </div>
            </div>
        </div>
    );
};

export default Header;
