import React from 'react';
import "./Services.scss"
import arrowRight from "../../../assets/images/arrow-right.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import useWindowSize from "../../../hooks/useWindowSize";

const Services = () => {

    const {width} = useWindowSize();
    const services = [
        {
            id: 1,
            title: "архитектурное проектирование",
            description: "Проектируем и строим современные коттеджи и коммерческие здания.",
            description2: "От создания авторской концепции до разработки всех конструктивных и инженерных разделов с гарантией реализации. Работаем с объектами культурного наследия ОКН.",
            price: "проекты от 250 000 ₽",
            button: "рассчитать стоимость"
        },
        {
            id: 2,
            title: "дизайн интерьера",
            description: "Создаем и реализуем премиальные интерьеры загородных домов, квартир, ресторанов, отелей, офисов и общественных пространств.",
            description2: "Работаем в современных стилях с учетом бюджета заказчика.",
            price: "проекты от 500 000 ₽ ",
            button: "рассчитать стоимость"
        },
        {
            id: 3,
            title: "ландшафтный дизайн",
            description: "Создаем лаконичные, функциональные и запоминающиеся проекты для загородных домов и общественных городских пространств.",
            description2: "Придерживаемся принципов Органической архитектуры и Зеленого строительства.",
            price: "проекты от 250 000 ₽ ",
            button: "рассчитать стоимость"
        },
        {
            id: 4,
            title: " управление строительством",
            description: "Комплексный подход к реализации наших проектов:  комплектация,  авторский надзор,  технический надзор,  юридическое сопровождение",
            description2: "Гарантируем законность, точность и своевременность реализации проектных решений.",
            price: "бесплатно при комплексном заказе",
            button: "узнать подробности"
        }
    ]
    const slidesPerView =
        width > 1280 ? 3.2 :
            width > 900 ? 2.5 :
                width > 500 ? 1.6 :
                    width > 400 ? 1.4 : // Screen size less than 500, but greater than 400
                        width > 350 ? 1.3 : // Screen size less than 400, but greater than 300
                            1.1;
    const spaceBetween = 10; // Fixed space between slides

    return (
        <div className="services-over">
            <div className="container mx-auto">
                <div className="services">
                    <div className="services-top flex justify-between items-end">
                        <div className="top-left flex items-start gap-x-4">
                            <h5>наши услуги</h5>
                        </div>
                        <div className="top-right">
                            <p>тяни</p>
                            <img src={arrowRight} alt=""/>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={spaceBetween}
                        slidesPerView={slidesPerView}
                        pagination={false}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {services.map((el) => (
                            <SwiperSlide key={el.id}>
                                <div className="services-cards">
                                    <div className="services-card flex flex-col justify-between">
                                        <div className="services-texts">
                                            <h2>{el.title}</h2>
                                            <h5>{el.description}</h5>
                                            <p>{el.description2}</p>
                                        </div>
                                        <div className="flex flex-col gap-y-5">
                                            <h4 className="services-price">{el.price}</h4>
                                            <button className="calculate-cost">{el.button}</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Services;
