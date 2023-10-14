import React from 'react';
import "./Founder.scss"
import founder from "../../../assets/images/founder.png"
import secondFounder from "../../../assets/images/second-founder.png"
import {Icon} from '@iconify/react';

const Founder = () => {
    return (
        <div className="founder-over">
            <div className="container mx-auto">
                <div className="founder-div flex justify-around">
                    <div className="founder">
                        <img src={founder} alt=""/>
                    </div>
                    <div className="founder-text flex flex-col justify-center items-start content-center">
                        <Icon icon="ep:d-arrow-left" color="white" width="52" height="52" fontSize="100px"
                              className=""/>
                        <h5>
                            Мы создаем выразительные и функциональные пространства, руководствуясь образом жизни
                            современного человека, бюджетом заказчика и собственным взглядом на архитектуру и дизайн.
                        </h5>
                        <Icon icon="ep:d-arrow-right" color="white" width="52" height="52" className="right-icon"/>
                        <p className="founders-title mt-8">основатели бюро</p>
                        <div className="founders flex justify-between gap-x-4">
                            <h3 className="name">Зиёдилла Наврузов</h3>
                            <h3 className="name">Рахматулло Наврузов</h3>
                        </div>
                    </div>
                    <div className="second-founder">
                        <img src={secondFounder} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founder;
