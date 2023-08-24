import React from 'react';
import "./Advantages.scss"
import arrowRight from "../../../assets/images/arrow-right.svg"
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from 'swiper/modules';
import useWindowSize from "../../../hooks/useWindowSize";

const Advantages = () => {

    const {width} = useWindowSize();
    const advantages = [
        {
            id: 1,
            title: "комплексный подход",
            description: "Вам не придется искать нескольких исполнителей — мы возьмём на себя все задачи на этапе проектирования и реализации проекта. Подберем узкопрофильных специалистов и обеспечим качественное взаимодействие сторон.",
            number: "01"
        },
        {
            id: 2,
            title: "оптимальная стоимость и сроки",
            description: "Точный график производства работ, проектирование в BIM Revit, штатные специалисты, оптовые цены при комплектации и профессиональные строители — всё это гарантирует вам оптимальные сроки и разумную стоимость.",
            number: "02"
        },
        {
            id: 3,
            title: "уникальная методика управления проектами",
            description: "У нас собственная автоматизированная система управления проектами и творческими процессами. Мы качественно составляем ТЗ и еженедельно презентуем результаты работ. Вы останетесь довольны качеством и прозрачностью коммуникаций с нами.",
            number: "03"
        },
        {
            id: 4,
            title: "принцип одного окна",
            description: "Закрепим за Вашим проектом персонального менеджера. Его главная задача — представлять Ваши интересы перед командой проектировщиков и строителей, системно контролируя все договоренности.",
            number: "04"
        },
        {
            id: 5,
            title: "гарантия качества",
            description: "16 лет на рынке, более 300 проектов, офисы в городах присутствия, собственный штат опытных специалистов, командная работа над каждым проектом, трехконтурная проверка качества рабочей документации (ГАП/ГИП, юрист, сметчик), гарантийные обязательства в договоре — нам можно доверять ;)",
            number: "05"
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
            <div className="advantages">
                <div className="advantages-top flex justify-between items-end">
                    <div className="top-left flex items-start gap-x-4">
                        <h5 className="number">5</h5>
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
                    {advantages.map((el) => (
                        <SwiperSlide key={el.id}>
                            <div className="advantage-cards">
                                <div className="advantage-card flex flex-col justify-between">
                                    <div className="advantage-texts">
                                        <h2>{el.title}</h2>
                                        <p>{el.description}</p>
                                    </div>
                                    <h4 className="advantage-number">{el.number}</h4>
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
