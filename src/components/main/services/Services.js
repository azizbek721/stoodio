import React, {useContext} from 'react';
import "./Services.scss"
import arrowRight from "../../../assets/images/arrow-right.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import useWindowSize from "../../../hooks/useWindowSize";
import {Context} from "../../../context/Context";

const Services = () => {

    const { services } = useContext(Context)
    const {width} = useWindowSize();
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
