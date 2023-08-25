import React from 'react';
import "./Steps.scss"
import useWindowSize from "../../../hooks/useWindowSize";
import arrowRight from "../../../assets/images/arrow-right.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

const Steps = () => {

    const {width} = useWindowSize();
    const steps = [
        {
            id: 1,
            title: "знакомство",
            description: "На первой встрече, лично или онлайн, расскажем о нашей компании, проектных возможностях, методах разработки и управления проектами, покажем интересные кейсы и ответим на любые вопросы.",
            number: "01"
        },
        {
            id: 2,
            title: "экспертиза и смета",
            description: "Заполним бриф и подробно изучим всю документацию по проекту. Предложим несколько оптимальных решений Вашей задачи и составим подробную смету проектных работ.",
            number: "02"
        },
        {
            id: 3,
            title: "договор",
            description: "Заключим договор с удобной для Вас формой оплаты и точным срок окончания всех работ. Составим график встреч для согласования предварительных этапов.",
            number: "03"
        },
        {
            id: 4,
            title: "техническое задание",
            description: "Определим Ваши функциональные и эстетические пожелания, бюджет на реализацию и другие важные условия. Зафиксируем их в техническом задании на основе которого разработаем проект.",
            number: "04"
        },
        {
            id: 5,
            title: "разработка проекта",
            description: "Работать будем поэтапно и строго по ТЗ. Результат каждого этапа сначала согласуем с Вами и только потом приступим к следующему. При необходимости внесем правки и улучшения.",
            number: "05"
        },
        {
            id: 6,
            title: "получение разрешений",
            description: "Ваш проект будет сооствествовать ГОСТам, СНиПам и современным технологиям. Мы сами получим все разрешения на строительство, перепланировку, наружную рекламу и т.д.",
            number: "06"
        },
        {
            id: 7,
            title: "строительство и отделка",
            description: "Составим детальную смету и проведем тендер среди проверенных подрядчиков. Совместно с Вами выберем лучшего исполнителя по цене, срокам и гарантиям качества. ",
            number: "07"
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
