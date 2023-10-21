import React from 'react';
import "./Contact.scss"
import office from "../../assets/images/office.jpg"
import {Icon} from "@iconify/react";

const Contact = () => {
    return (
        <div className="container mx-auto">
            <div className="contact-top flex justify-between items-start my-8">
                <div className="contact-left">
                    <div className="contact-left-top flex items-start gap-x-8">
                        <div className="round"></div>
                        <h3>офис</h3>
                    </div>
                    <div className="contact-left-address">
                        <h3>Узбекистан</h3>
                        <p>22-й квартал, дом 2, массив Чиланзар, Учтепинский район, г.Ташкент</p>
                    </div>
                    <p className="contact-request">
                        у нас к вам просьба — перед приездом к нам в гости, запишитесь
                        заранее на встречу по телефону: <a href="tel:+998951952828">+99893 0000580</a>
                    </p>
                </div>
                <div className="contact-right flex flex-col gap-y-8">
                    <h1 className="contact-title">контакты</h1>
                    <h3>С любовью к своему делу, мы готовы работать над вашим проектом в любых городах и странах.</h3>
                    <div className="single-number flex items-center gap-x-8">
                        <a href="tel:+998930000580">+99893 0000580</a>
                        <p>единый номер для звонков</p>
                    </div>
                    <div className="mail-instagram">
                        <div className="mail">
                            <p>связь для прессы, поставщиков и <br/> другого партнерства</p>
                        </div>
                        <div className="contact-links flex items-center gap-x-12">
                            <a href="https://t.me/navruzov_z" target="blank" className="flex gap-x-2 items-center">
                                <Icon icon="logos:telegram" width="28" height="28"/> telegram
                            </a>
                            <a href="https://www.instagram.com/navruzov__z/" target="blank"
                               className="flex items-center gap-x-2">
                                <Icon icon="skill-icons:instagram" width="28" height="28"/> instagram
                            </a>
                            <a href="https://www.facebook.com/ziyodilla.navruzov.7" target="blank"
                               className="flex items-center gap-x-2">
                                <Icon icon="logos:facebook" width="28" height="28"/> facebook
                            </a>
                        </div>
                        {/*<div className="instagram flex items-center gap-x-2">*/}
                        {/*    <a href="https://www.instagram.com/stoodio.uz/?hl=ru" target="blank">*/}
                        {/*        <Icon icon="bi:instagram" width="28" height="28" />*/}
                        {/*    </a>*/}
                        {/*    <p>instagram</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <div className="my-12">
                <img className="office-img" src={office} alt=""/>
            </div>
            <div className="my-12">
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A4de7420a2ee4c79b5c1a85acea96bd6138d853e614aafd870d3c9997f310a200&amp;source=constructor"
                    width="100%" height="500"></iframe>
            </div>
        </div>
    );
};

export default Contact;
