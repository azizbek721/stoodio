import React from 'react';
import "./Header.scss"
import Navbar from "../../../containers/navbar/Navbar";

const Header = ({params}) => {
    return (
        <div className="project-params-container">
            <img src={params.images[0].img} alt="" className="project-params-background"/>
            <Navbar/>
            <div className="project-params-header container mx-auto flex justify-end items-end content-end">
                <div className="project-params-header-texts flex flex-col gap-y-5">
                    <h3>{params.name}</h3>
                    <p>{params.workType ? params.workType : ''}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
