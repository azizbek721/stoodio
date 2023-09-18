import React, {useEffect, useState} from 'react';
import "./Work.scss"
import useWindowSize from "../../../hooks/useWindowSize";

const Work = () => {

    const { width } = useWindowSize();
    const [isTextFixed, setIsTextFixed] = useState(false);

    const handleScroll = () => {
        const container = document.querySelector('.work');
        const usefulTitle = document.querySelector('.work-title');
        const containerRect = container.getBoundingClientRect();

        if (usefulTitle && containerRect.top <= 15) {
            setIsTextFixed(true);
        } else {
            setIsTextFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const titleStyle = isTextFixed
        ? {position: 'sticky', top: '0'}
        : {};

    return (
        <div className="container mx-auto">
            <div className="work flex justify-between items-start">
                <div className="work-title-div flex items-end gap-x-6" style={titleStyle}>
                    {width > 959 ? (
                        <>
                            <h3 className="work-title">работа <br/> в бюро</h3>
                            <h3 className="work-title flex items-center gap-x-6">
                                <span></span> это
                            </h3>
                        </>
                    ) : (
                        <h3 className="work-title flex items-center">работа в бюро <div></div> это</h3>
                    )}
                </div>
                <div className="work-right gap-y-12">
                    <div className="work-div">
                        <h1>01</h1>
                        <p>свобода создавать и реализовывать идеи</p>
                    </div>
                    <div className="work-div">
                        <h1>02</h1>
                        <p>обмен опытом с коллегами, профессиональный рост</p>
                    </div>
                    <div className="work-div">
                        <h1>03</h1>
                        <p>работа над проектами премиум класса</p>
                    </div>
                    <div className="work-div">
                        <h1>04</h1>
                        <p>участие и победы в архитектурных конкурсах</p>
                    </div>
                    <div className="work-div">
                        <h1>05</h1>
                        <p>участие в социально значимых проектах</p>
                    </div>
                    <div className="work-div">
                        <h1>06</h1>
                        <p>быстрое решение задач за счет гибкости и адаптивности рабочих процессов</p>
                    </div>
                    <div className="work-div">
                        <h1>07</h1>
                        <p>достойный доход с возможностью постоянного роста</p>
                    </div>
                    <div className="work-div">
                        <h1>08</h1>
                        <p>понятная и прозрачная траектория карьерного роста</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
