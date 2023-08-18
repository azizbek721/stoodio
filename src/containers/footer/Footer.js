import React from 'react';
import {FooterWrapper} from "./FooterWrapper";
import footerLogo from "../../assets/logo.svg"
import qrCode from "../../assets/qr-code.svg"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="container mx-auto">
                <div className="footer-over flex justify-between">
                    <div className="footer-left flex flex-col justify-between">
                        <Link to="/">
                            <img src={footerLogo} alt="" className="footer-logo"/>
                        </Link>
                        <div className="footer-contact flex gap-x-5 m-y-4">
                            <img src={qrCode} alt=""/>
                            <div className="footer-contacts flex flex-col gap-y-5">
                                <div className="phone-number">
                                    <p>каждый день с 9 до 20</p>
                                    <a href="tel:+998951952828">+99893 0000580</a>
                                </div>
                                <div className="instagram-account">
                                    <p>instagram*</p>
                                    <a href="https://www.instagram.com/stoodio.uz/?hl=ru" target="blank">@stoodio.uz</a>
                                </div>
                            </div>
                        </div>
                        <p className="footer-left-text">
                            Социальная сеть Instagram принадлежит компании Meta Platforms Inc., которая запрещена на
                            территории РФ в связи с осуществлением экстремистской деятельности.
                        </p>
                    </div>
                    <div className="footer-center flex flex-col gap-y-7">
                        <Link to="/portfolio">портфолио</Link>
                        <Link to="/team">stoodio.team</Link>
                        <Link to="/jobs">вакансии</Link>
                        <Link to="/contacts">контакты</Link>
                    </div>
                    <div className="footer-right flex flex-col gap-y-10">
                        <Link to="/policy">политика <br/> конфиденциальности</Link>
                        <span>Stoodio.uz является зарегистрированным товарным знаком №910417</span>
                        <p>© 2006—2023 <br/>Архитектурное бюро Зиядиллы Наврузовой Stoodio.uz</p>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    );
};

export default Footer;
