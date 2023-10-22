import React, {useEffect, useState} from 'react';
import {NavbarWrapper} from "./NavbarWrapper";
import {Link, useLocation} from "react-router-dom";
import navLogo from "../../assets/images/nav-logo.png";
import whiteLogo from "../../assets/images/logo.png";
import chatIcon from "../../assets/images/chat-icon.svg"
import useWindowSize from "../../hooks/useWindowSize";
import {dispatch} from "../../store/store";
import {open} from "../../store/reducers/reducer";
import {openModal} from "../../store/reducers/discussReducer";
import Menu from "./Menu";
import {Icon} from '@iconify/react';
import DiscussModal from "../modals/DiscussModal";
import ResumeModal from "../modals/ResumeModal";
import {openResumeModal} from "../../store/reducers/resumeReducer";

const Navbar = () => {

    const {width} = useWindowSize();
    const currentPath = useLocation().pathname;

    const [showButton, setShowButton] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const notActive = {
        color: "black",
    };

    const activeStyle = {
        color: "white",
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScroll = () => {
        const discussSection = document.getElementById("discuss-section");
        const windowScrollY = window.scrollY;

        if (
            // eslint-disable-next-line no-mixed-operators
            (windowScrollY >= 600 && discussSection && discussSection.getBoundingClientRect().top >= window.innerHeight / 2) ||
            // eslint-disable-next-line no-mixed-operators
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
    }, [handleScroll]);

    const showHamburgerButton = width <= 1024 || showButton;

    return (
        <div style={currentPath === "/" || /^\/portfolio\/\d+$/.test(currentPath) ? activeStyle : notActive}>
            {width > 1025 ? (
                <>
                    <NavbarWrapper>
                        <nav className="navbar container mx-auto flex justify-between items-start">
                            {currentPath !== "/" ? (
                                <Link to="/" className="nav-logo">
                                    <img src={/^\/portfolio\/\d+$/.test(currentPath) ? whiteLogo : navLogo} alt=""/>
                                </Link>
                            ) : (
                                <div></div>
                            )}
                            <div className="nav-center flex gap-x-5">
                                <Link to="/portfolio">.портфолио</Link>
                                <Link to="/team">stoodio.team</Link>
                                {/*<Link to="/vacancies">.вакансии</Link>*/}
                                <Link to="/contacts">.контакты</Link>
                            </div>
                            <a href="tel:+998930000580" className="nav-tel">+99893 0000580</a>
                        </nav>
                        {showHamburgerButton && (
                            <button
                                className="hamburger-btn"
                                onClick={() => dispatch(open())}
                            >
                                <Icon icon="iconamoon:menu-burger-horizontal" className="burger-path" width="28"
                                      height="28"/>
                            </button>
                        )}
                        {currentPath === "/team" ? (
                            <button
                                className={(showButton || currentPath === "/contacts") && currentPath !== "/policy" ? "fixed-discuss-btn" : "hidden"}
                                onClick={() => dispatch(openResumeModal())}
                            >
                                хочу у вас работать
                            </button>
                        ) : (
                            <button
                                className={(showButton || currentPath === "/contacts") && currentPath !== "/policy" ? "fixed-discuss-btn" : "hidden"}
                                onClick={() => dispatch(openModal())}
                            >
                                обсудить проект
                            </button>
                        )}
                        {isMenuOpen ? (
                            <button
                                className="opened-float-button flex items-center"
                                onClick={toggleMenu}
                            >
                                <Icon icon="bytesize:close" color="black" width="48" height="48" className="close-icon"/>
                            </button>
                        ) : (
                            <button
                                className="float-button"
                                onClick={toggleMenu}
                            >
                                <img src={chatIcon} alt=""/>
                            </button>
                        )}

                        {isMenuOpen && (
                            <>
                                <div className="floating-menu flex flex-col justify-center items-center gap-y-2">
                                    <a href="tel:+998930000580" className="phone">
                                        <Icon icon="mingcute:phone-fill" color="white" />
                                    </a>
                                    <a href="https://t.me/navruzov_z" target="blank" className="telegram">
                                        <Icon icon="logos:telegram"/>
                                    </a>
                                    <a href="https://www.instagram.com/navruzov__z/" target="blank"
                                       className="instagram">
                                        <Icon icon="skill-icons:instagram"/>
                                    </a>
                                    <a href="https://www.facebook.com/ziyodilla.navruzov.7" target="blank"
                                       className="facebook">
                                        <Icon icon="logos:facebook"/>
                                    </a>
                                </div>
                            </>
                        )}
                    </NavbarWrapper>
                    <Menu/>
                    <DiscussModal/>
                    <ResumeModal/>
                </>
            ) : (
                <>
                    <NavbarWrapper>
                        <nav className="navbar container mx-auto flex justify-between items-start">
                            {currentPath !== "/" ? (
                                <Link to="/" className="nav-logo">
                                    <img src={/^\/portfolio\/\d+$/.test(currentPath) ? whiteLogo : navLogo} alt=""/>
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
                                <Icon icon="iconamoon:menu-burger-horizontal" className="burger-path" width="28"
                                      height="28"/>
                            </button>
                        )}
                        {currentPath === "/team" ? (
                            <button
                                className={(showButton || currentPath === "/contacts") && currentPath !== "/policy" ? "fixed-discuss-btn" : "hidden"}
                                onClick={() => dispatch(openResumeModal())}
                            >
                                хочу у вас работать
                            </button>
                        ) : (
                            <button
                                className={(showButton || currentPath === "/contacts") && currentPath !== "/policy" ? "fixed-discuss-btn" : "hidden"}
                                onClick={() => dispatch(openModal())}
                            >
                                обсудить проект
                            </button>
                        )}
                        {isMenuOpen ? (
                            <button
                                className="opened-float-button flex items-center"
                                onClick={toggleMenu}
                            >
                                <Icon icon="bytesize:close" color="black" width="48" height="48"/>
                            </button>
                        ) : (
                            <button
                                className="float-button"
                                onClick={toggleMenu}
                            >
                                <img src={chatIcon} alt=""/>
                            </button>
                        )}

                        {isMenuOpen && (
                            <>
                                <div className="floating-menu flex flex-col items-center gap-y-2">
                                    <a href="tel:+998930000580" className="phone">
                                        <Icon icon="mingcute:phone-fill" color="white" width="32" height="32" />
                                    </a>
                                    <a href="https://t.me/navruzov_z" target="blank" className="telegram">
                                        <Icon icon="logos:telegram" width="45" height="45"/>
                                    </a>
                                    <a href="https://www.instagram.com/navruzov__z/" target="blank"
                                       className="instagram">
                                        <Icon icon="skill-icons:instagram" width="45" height="45"/>
                                    </a>
                                    <a href="https://www.facebook.com/ziyodilla.navruzov.7" target="blank"
                                       className="facebook">
                                        <Icon icon="logos:facebook" width="45" height="45"/>
                                    </a>
                                </div>
                            </>
                        )}
                    </NavbarWrapper>
                    <Menu/>
                    <DiscussModal/>
                    <ResumeModal/>
                </>
            )}
        </div>
    );
};

export default Navbar;
