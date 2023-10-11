import React from 'react';
import {FooterWrapper} from "./FooterWrapper";
import footerLogo from "../../assets/images/logo.png"
import qrCode from "../../assets/images/qr-code.svg"
import {Link} from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";

const Footer = () => {

    const {width} = useWindowSize();

    return (
        <FooterWrapper>
            <div className="container mx-auto">
                {width > 850 ? (
                    <div className="footer-over flex justify-between">
                        {/* this is desktop version */}
                        <div className="footer-left flex flex-col justify-between">
                            <Link to="/">
                                <img src={footerLogo} alt="" className="footer-logo"/>
                            </Link>
                            <div className="footer-contact flex gap-x-5 m-y-4">
                                <img src={qrCode} alt=""/>
                                <div className="footer-contacts flex flex-col gap-y-5">
                                    <div className="phone-number">
                                        <p>каждый день с 9 до 20</p>
                                        <a href="tel:+998930000580">+99893 0000580</a>
                                    </div>
                                    <div className="instagram-account">
                                        <p>instagram*</p>
                                        <a href="https://www.instagram.com/stoodio.uz/?hl=ru"
                                           target="blank">@stoodio.uz</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-center flex flex-col gap-y-7">
                            <Link to="/portfolio">портфолио</Link>
                            <Link to="/team">stoodio.team</Link>
                            {/*<Link to="/vacancies">вакансии</Link>*/}
                            <Link to="/contacts">контакты</Link>
                        </div>
                        <div className="footer-right flex flex-col gap-y-10">
                            <Link to="/policy">политика <br/> конфиденциальности</Link>
                            <span>Stoodio.uz является зарегистрированным товарным знаком №910417</span>
                            <p>© 2019—2023 <br/>Архитектурное бюро STOODIO</p>
                        </div>
                    </div>
                ) : width > 480 ? (
                    <div className="footer-over flex gap-x-10">
                        {/* this is tablet version */}
                        <div className="footer-left flex flex-col justify-between">
                            <Link to="/">
                                <img src={footerLogo} alt="" className="footer-logo"/>
                            </Link>
                            <div className="footer-contact flex gap-x-5 m-y-4">
                                <img src={qrCode} alt=""/>
                                <div className="footer-contacts flex flex-col gap-y-2">
                                    <div className="phone-number">
                                        <p>каждый день с 9 до 20</p>
                                        <a href="tel:+998930000580">+99893 0000580</a>
                                    </div>
                                    <div className="instagram-account">
                                        <p>instagram*</p>
                                        <a href="https://www.instagram.com/stoodio.uz/?hl=ru"
                                           target="blank">@stoodio.uz</a>
                                    </div>
                                </div>
                            </div>
                            <Link to="/policy" className="policy-link">политика конфиденциальности</Link>
                        </div>
                        <div className="footer-center flex flex-col gap-y-7">
                            <Link to="/portfolio">портфолио</Link>
                            <Link to="/team">stoodio.team</Link>
                            {/*<Link to="/vacancies">вакансии</Link>*/}
                            <Link to="/contacts">контакты</Link>

                            <span>Stoodio.uz является зарегистрированным товарным знаком №910417</span>
                            <p>© 2019—2023 <br/>Архитектурное бюро STOODIO</p>
                        </div>

                    </div>
                ) : (
                    <div className="footer-over">
                        {/* this is mobile version */}
                        <div className="footer-left flex flex-col justify-between">
                            <Link to="/">
                                <img src={footerLogo} alt="" className="footer-logo"/>
                            </Link>
                            <div className="footer-contact">
                                <div className="footer-contacts flex flex-col gap-y-4">
                                    <div className="phone-number">
                                        <p>каждый день с 9 до 20</p>
                                        <a href="tel:+998930000580">+99893 0000580</a>
                                    </div>
                                    <div className="instagram-account">
                                        <p>instagram*</p>
                                        <a href="https://www.instagram.com/stoodio.uz/?hl=ru"
                                           target="blank">@stoodio.uz</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-center flex flex-col gap-y-6">
                            <Link to="/portfolio">портфолио</Link>
                            <Link to="/team">stoodio.team</Link>
                            {/*<Link to="/vacancies">вакансии</Link>*/}
                            <Link to="/contacts">контакты</Link>
                        </div>
                        <div className="instagram-account">
                            <p>instagram*</p>
                            <a href="https://www.instagram.com/stoodio.uz/?hl=ru"
                               target="blank">@stoodio.uz</a>
                        </div>
                        <div className="footer-right flex flex-col gap-y-7">
                            <Link to="/policy">политика конфиденциальности</Link>
                            <span>Stoodio.uz является зарегистрированным товарным знаком №910417</span>
                            <p>© 2019—2023 <br/>Архитектурное бюро STOODIO</p>
                        </div>
                    </div>
                )}
            </div>
        </FooterWrapper>
    );
};

export default Footer;
