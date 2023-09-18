import React from 'react';
import "./Header.scss"
import useWindowSize from "../../../hooks/useWindowSize";
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

const Header = () => {

    const {width} = useWindowSize();
    const slidesPerView =
        width > 500 ? 2.3 :
            width > 400 ? 1.4 : // Screen size less than 500, but greater than 400
                width > 350 ? 1.3 : // Screen size less than 400, but greater than 300
                    1.1;
    const spaceBetween = 10; // Fixed space between slides

    return (
        <div className="container mx-auto">
            <div className="team-header flex justify-end items-end">
                <div className="team-head">
                    <h1 className="team-head-title flex flex-col items-start">stoodio<span></span>team</h1>
                    <div className="team-head-texts flex justify-between items-center">
                        <h4>Воплощать идеи, создавать смыслы и пространства на языке архитектуры</h4>
                        <p>раздел для тех, кто хочет присоединиться к нашей команде</p>
                    </div>
                    {width > 650 ? (
                        <div className="team-head-buttons flex justify-between items-center">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="">преимущества работы в бюро</a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="">карьерные возможности</a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="">начало работы в бюро</a>
                        </div>
                    ) : (
                        <Swiper
                            spaceBetween={spaceBetween}
                            slidesPerView={slidesPerView}
                            pagination={false}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="team-head-buttons flex justify-between items-center">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="">преимущества работы в бюро</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-head-buttons flex justify-between items-center">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="">карьерные возможности</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-head-buttons flex justify-between items-center">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="">начало работы в бюро</a>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
