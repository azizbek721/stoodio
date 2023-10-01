import React from 'react';
import "./Mission.scss"

const Mission = () => {
    return (
        <div className="mission-bg">
            <div className="container mx-auto">
                <div className="mission flex flex-col justify-center items-center text-center gap-y-12">
                    <p className="mission-title">НАША МИССИЯ</p>
                    <h1>создавать пространства, которые умеют вдохновлять человека на изменения себя и целого мира</h1>
                    <p className="mission-title">ЦЕЛЬ</p>
                    <h3>
                        мы хотим сделать жизнь разных людей более комфортной, создавая функциональные пространства, в
                        которых хочется находиться. Слышать потребности клиента, делать его жизнь удобной
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Mission;
