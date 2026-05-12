import React, {useContext} from 'react';
import "./Header.scss"
import Navbar from "../../../containers/navbar/Navbar";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import {Context} from "../../../context/Context";
import mainLogo from "../../../assets/images/main-logo.png"

const Header = () => {

    const {sliders, loading} = useContext(Context)
    
    if (loading) return <div className="video-container bg-[#0F1115] flex items-center justify-center"><div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>;

    return (
        <div className="video-container">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={false}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {sliders.map((el) => (
                    <SwiperSlide key={el.id}>
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img src={el.img} className="background-video" alt={`Image ${el.id}`}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Navbar/>
            <header className="container mx-auto flex justify-between items-end">
                <img src={mainLogo} alt=""/>
                <div className="header-texts flex flex-col gap-y-5">
                    <p>создаем</p>
                    <h3>архитектуру и дизайн <br/> в современных стилях</h3>
                </div>
            </header>
        </div>
    );
};

export default Header;
