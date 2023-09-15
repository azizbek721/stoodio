import React from 'react';
import "./Pictures.scss"
import arrowRight from "../../../assets/images/blue-arrow-right.svg";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper/modules";

const Pictures = ({params}) => {

    console.log(params)

    return (
        <div className="container mx-auto">
            <div className="pictures-over">
                <div className="pictures-slider">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {params.images.map((el) => (
                            <SwiperSlide  key={el.id}>
                                <img src={el.img} alt={`Image ${el.id}`}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="plane flex flex-col justify-center items-center">
                    <h3>Планировка</h3>
                    <img src={params.plane} alt=""/>
                </div>
                <Link to="/portfolio" className="view-all-projects flex justify-center items-center gap-x-4">
                    <p>смотреть все портфолио</p>
                    <img src={arrowRight} className="arrow-right" alt=""/>
                </Link>
            </div>
        </div>
    );
};

export default Pictures;
