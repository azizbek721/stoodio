import React from 'react';
import "./Info.scss"
import useWindowSize from "../../../hooks/useWindowSize";

const Info = () => {

    const {width} = useWindowSize();

    return (
        <section className="container mx-auto flex justify-between items-center">
            {width < 900 ? (
                <div className="info-hidden-texts flex flex-col">
                    <p>создаем</p>
                    <h3>архитектуру, дизайн <br/> и ландшафт в современных стилях</h3>
                </div>
            ) : <div></div>}
            <div className="info-div flex flex-col gap-y-5">
                <h3>
                    Архитектурное бюро Stoodio.uz – узбекская компания, основанная в 2020 году архитектором
                    Зиёдулло Наврузов.
                </h3>
                <h3>
                    Наша специализация – комплексное проектирование, строительство и оснащение жилых, коммерческих и
                    общественных объектов.
                </h3>
                <p>
                    Офис Stoodio.uz находятся в Ташкенте, (ориентир).
                </p>
            </div>
        </section>
    );
};

export default Info;
