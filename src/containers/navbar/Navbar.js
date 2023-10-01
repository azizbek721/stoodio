import React, { useEffect, useState } from 'react';
import { NavbarWrapper } from "./NavbarWrapper";
import { Link, useLocation } from "react-router-dom";
import navLogo from "../../assets/images/nav-logo.png";
import whiteLogo from "../../assets/images/logo.png";
import useWindowSize from "../../hooks/useWindowSize";
import { dispatch } from "../../store/store";
import { open } from "../../store/reducers/reducer";
import Menu from "./Menu";
import { Icon } from '@iconify/react';

const Navbar = () => {

    const { width } = useWindowSize();
    const currentPath = useLocation().pathname;

    const [showButton, setShowButton] = useState(false);

    const notActive = {
        color: "black",
    };

    const activeStyle = {
        color: "white",
    };

    const handleScroll = () => {
        const discussSection = document.getElementById("discuss-section");
        const windowScrollY = window.scrollY;

        if (
            (windowScrollY >= 600 && discussSection && discussSection.getBoundingClientRect().top >= window.innerHeight / 2) ||
            (currentPath === "/policy" || currentPath === "/contacts") && windowScrollY >= 150
        ) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showHamburgerButton = width <= 1024 || showButton;

    return (
        <div style={currentPath === "/" || /^\/portfolio\/\d+$/.test(currentPath) ? activeStyle : notActive}>
            {width > 1025 ? (
                <>
                    <NavbarWrapper>
                        <nav className="navbar container mx-auto flex justify-between items-start">
                            {currentPath !== "/" ? (
                                <Link to="/" className="nav-logo">
                                    <img src={/^\/portfolio\/\d+$/.test(currentPath) ? whiteLogo : navLogo} alt="" />
                                </Link>
                            ) : (
                                <div></div>
                            )}
                            <div className="nav-center flex gap-x-5">
                                <Link to="/portfolio">.портфолио</Link>
                                <Link to="/team">stoodio.team</Link>
                                <Link to="/vacancies">.вакансии</Link>
                                <Link to="/contacts">.контакты</Link>
                            </div>
                            <a href="tel:+998930000580" className="nav-tel">+99893 0000580</a>
                        </nav>
                        {showHamburgerButton && (
                            <button
                                className="hamburger-btn"
                                onClick={() => dispatch(open())}
                            >
                                <Icon icon="iconamoon:menu-burger-horizontal" className="burger-path" width="28" height="28" />
                            </button>
                        )}
                        <button
                            className={(showButton || currentPath === "/contacts") && currentPath !== "/policy" ? "fixed-discuss-btn" : "hidden"}
                            onClick={() => dispatch(open())}
                        >
                            {currentPath === "/team" ? "хочу у вас работать" : "обсудить проект"}
                        </button>
                        <button></button>
                    </NavbarWrapper>
                    <Menu />
                </>
            ) : (
                <>
                    <NavbarWrapper>
                        <nav className="navbar container mx-auto flex justify-between items-start">
                            {currentPath !== "/" ? (
                                <Link to="/" className="nav-logo">
                                    <img src={/^\/portfolio\/\d+$/.test(currentPath) ? whiteLogo : navLogo} alt="" />
                                </Link>
                            ) : (
                                <div></div>
                            )}
                        </nav>
                        {showHamburgerButton && (
                            <button
                                className="hamburger-btn"
                                onClick={() => dispatch(open())}
                            >
                                <Icon icon="iconamoon:menu-burger-horizontal" className="burger-path" width="28" height="28" />
                            </button>
                        )}
                        <button
                            className={(showButton || currentPath === "/contacts") && currentPath !== "/policy" ? "fixed-discuss-btn" : "hidden"}
                            onClick={() => dispatch(open())}
                        >
                            {currentPath === "/team" ? "хочу у вас работать" : "обсудить проект"}
                        </button>
                    </NavbarWrapper>
                    <Menu />
                </>
            )}
        </div>
    );
};

export default Navbar;
