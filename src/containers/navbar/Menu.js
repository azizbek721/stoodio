import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {close} from "../../store/reducers/reducer";
import {MenuTop} from "./NavbarWrapper";
import {Icon} from '@iconify/react';
import menuLogo from "../../assets/logo.svg"
import {NavLink} from "react-router-dom";

const Menu = () => {

    const {menu} = useSelector((state) => state.Reducer);
    const dispatch = useDispatch();

    const closing = () => {
        dispatch(close());
        window.scrollTo({
            right: 0,
        });
    };

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menu]);

    return (
        <>
            <div className="overlay" style={{display: menu ? 'block' : 'none'}} onClick={closing}></div>
            <MenuTop menu={menu}>
                <div className="menu flex flex-col justify-between">
                    <div className="menu-top flex justify-between items-start">
                        <img src={menuLogo} alt=""/>
                        <Icon icon="iconamoon:close-light" color="white" width="40" height="40"
                              className="cursor-pointer close-icon"
                              onClick={closing}/>
                    </div>
                    <div className="menu-links flex flex-col">
                        <NavLink to="/portfolio" className={({isActive}) => isActive ? "active-link" : "menu-link"}
                                 onClick={closing}>портфолио</NavLink>
                        <NavLink to="/team" className={({isActive}) => isActive ? "active-link" : "menu-link"}
                                 onClick={closing}>stoodio.team</NavLink>
                        <NavLink to="/jobs" className={({isActive}) => isActive ? "active-link" : "menu-link"}
                                 onClick={closing}>вакансии</NavLink>
                        <NavLink to="/contacts" className={({isActive}) => isActive ? "active-link" : "menu-link"}
                                 onClick={closing}>контакты</NavLink>
                    </div>
                    <div className="menu-contacts flex flex-col gap-y-2 5">
                        <div className="menu-instagram flex flex-col gap-y-2 5">
                            <p className="menu-contacts-label">instagram*</p>
                            <a href="https://www.instagram.com/stoodio.uz/?hl=ru" className="menu-contact"
                               target="blank">@stoodio.uz</a>
                        </div>
                        <div className="menu-phone flex flex-col gap-y-2 5">
                            <p className="menu-contacts-label">instagram*</p>
                            <a href="tel:+998951952828">+99893 0000580</a>
                        </div>
                    </div>
                </div>
            </MenuTop>
        </>
    );
};

export default Menu;
