import React, {useContext} from 'react';
import "./Steps.scss"
import useWindowSize from "../../../hooks/useWindowSize";
import arrowRight from "../../../assets/images/arrow-right.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import {Context} from "../../../context/Context";

const Steps = () => {

    const { steps } = useContext(Context)
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
        <div className="container mx-auto">
            <div className="steps">
                <div className="steps-top flex justify-between items-end">
                    <div className="top-left flex items-start gap-x-4">
                        <h5>как мы будем работать <br/> над вашим проектом</h5>
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
                    {steps.map((el) => (
                        <SwiperSlide key={el.id}>
                            <div className="steps-cards">
                                <div className="steps-card">
                                    <div className="steps-number">
                                        <h4>{el.number}</h4>
                                    </div>
                                    <h2>{el.title}</h2>
                                    <p>{el.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Steps;
