import React, {useEffect, useState} from 'react';
import {NavbarWrapper} from "./NavbarWrapper";
import {Link} from "react-router-dom";
import navLogo from "../../assets/nav-logo.svg"
import useWindowSize from "../../hooks/useWindowSize";
import {dispatch} from "../../store/store";
import {open} from "../../store/reducers/reducer";
import Menu from "./Menu";
import {Icon} from '@iconify/react';

const Navbar = () => {

    const {width} = useWindowSize();

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 300) {
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

    return (
        <>
            {width > 900 ? (
                <>
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
                        <button
                            className={showButton ? "hamburger-btn" : "hidden"}
                            onClick={() => dispatch(open())}>
                            <Icon icon="iconamoon:menu-burger-horizontal" className="burger-path" width="28"
                                  height="28"/>
                        </button>
                    </NavbarWrapper>
                    <Menu/>
                </>
            ) : (
                <>
                    <NavbarWrapper>
                        <nav className="navbar container mx-auto flex justify-between items-start">
                            <Link to="/" className="nav-logo">
                                <img src={navLogo} alt=""/>
                            </Link>
                            <button
                                className="hamburger-btn"
                                onClick={() => dispatch(open())}>
                                <Icon icon="iconamoon:menu-burger-horizontal" className="burger-path" width="28"
                                      height="28"/>
                            </button>
                        </nav>
                    </NavbarWrapper>
                    <Menu/>
                </>
            )}
        </>
    );
};

export default Navbar;
