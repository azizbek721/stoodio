import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../../../config';
import "./Advantages.scss"
import arrowRight from "../../../assets/images/arrow-right.svg"
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from 'swiper/modules';
import useWindowSize from "../../../hooks/useWindowSize";

const Advantages = () => {

    const {width} = useWindowSize();
    const [advantages, setAdvantages] = useState([]);

    useEffect(() => {
        const fetchAdvantages = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/advantages`);
                setAdvantages(response.data);
            } catch (error) {
                console.error("Error fetching advantages:", error);
            }
        };
        fetchAdvantages();
    }, []);
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
            <div className="advantages">
                <div className="advantages-top flex justify-between items-end">
                    <div className="top-left flex items-start gap-x-4">
                        <h5 className="number">{advantages.length}</h5>
                        <h5>преимуществ <br/> работы с нами</h5>
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
                    {advantages.map((el, index) => (
                        <SwiperSlide key={el.id}>
                            <div className="advantage-cards">
                                <div className="advantage-card flex flex-col justify-between">
                                    <div className="advantage-texts">
                                        <h2>{el.name || el.title}</h2>
                                        <p>{el.description}</p>
                                    </div>
                                    <h4 className="advantage-number">
                                        {el.number || (index + 1).toString().padStart(2, '0')}
                                    </h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Advantages;
