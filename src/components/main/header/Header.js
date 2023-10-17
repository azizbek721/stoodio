import React, {useContext} from 'react';
import "./Header.scss"
import Navbar from "../../../containers/navbar/Navbar";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import mainBg from "../../../assets/images/main-bg.jpg"
import mainLogo from "../../../assets/images/main-logo.png"
import {Context} from "../../../context/Context";

const Header = () => {

    const {sliders} = useContext(Context)
    console.log(sliders)

    return (
        <div className="video-container">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={false}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {sliders.map((el) => (
                    <SwiperSlide key={el.id}>
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
