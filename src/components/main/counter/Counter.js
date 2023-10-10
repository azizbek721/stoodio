import React from "react";
import CountUp from "react-countup";
import "./Counter.scss";

const AnimatedCounter = ({number, suffix}) => {
    return (
        <h1>
            <CountUp duration={10} end={number} suffix={suffix}/>
        </h1>
    );
};

const Counter = () => {
    return (
        <div className="container mx-auto">
            <div className="counters flex justify-between items-start">
                <div className="year-count flex flex-col gap-y-8">
                    <AnimatedCounter number={5}/>
                    <p>лет проектируем <br/> и строим</p>
                </div>
                <div className="projects-count flex flex-col gap-y-8">
                    <AnimatedCounter number={30} suffix="+"/>
                    <p>реализованных <br/> проектов</p>
                </div>
                <div className="cities-count flex flex-col gap-y-8">
                    <AnimatedCounter number={2}/>
                    <p>городов с нашими <br/> проектами</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;
