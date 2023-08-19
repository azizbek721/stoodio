import React from 'react';
import {NavbarWrapper} from "./NavbarWrapper";
import {Link} from "react-router-dom";
import navLogo from "../../assets/nav-logo.svg"
import useWindowSize from "../../hooks/useWindowSize";

const Navbar = () => {

    const {width} = useWindowSize();

    return (
        <>
            {width > 850 ? (
                <NavbarWrapper>
                    <nav className="navbar container mx-auto flex justify-between items-start">
                        <Link to="/" className="nav-logo">
                            <img src={navLogo} alt=""/>
                        </Link>
                        <div className="nav-center flex gap-x-5">
                            <Link to="/portfolio">.портфолио</Link>
                            <Link to="/team">stoodio.team</Link>
                            <Link to="/jobs">.вакансии</Link>
                            <Link to="/contacts">.контакты</Link>
                        </div>
                        <a href="tel:+998930000580" className="nav-tel">+99893 0000580</a>
                    </nav>
                    {/*{height >= 600 ? <button className="hamburger-btn">hamburger</button> : ''}*/}
                    <button className={window.scrollY >= 400 ? "hamburger-btn" : "hidden"}>hamburger</button>
                </NavbarWrapper>
            ) : (
                <>
                    this is mobile navbar
                </>
            )}
        </>
    );
};

export default Navbar;
