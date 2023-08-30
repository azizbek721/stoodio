import React from 'react';
import "./Contact.scss"
// import office from "../../assets/images/office.jpeg"
import office from "../../assets/images/office.jpg"

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
                        <a href="tel:+998951952828">+99893 0000580</a>
                        <p>единый номер для звонков</p>
                    </div>
                    <div className="mail-instagram flex items-end gap-x-12">
                        <div className="mail">
                            <p>связь  для прессы, поставщиков и <br/> другого партнерства</p>
                            <a href="https://t.me/navruzov_z" target="blank">@navruzov_z</a>
                        </div>
                        <div className="instagram">
                            <p>instagram</p>
                            <a href="https://www.instagram.com/stoodio.uz/?hl=ru" target="blank">@stoodio.uz</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-8">
                <img className="office-img" src={office} alt=""/>
            </div>
        </div>
    );
};

export default Contact;
