import React from 'react';
import "./Advantages.scss"
import arrowRight from "../../../assets/images/arrow-right.svg"

const Advantages = () => {
    return (
        <div className="advantages">
            <div className="advantages-top container mx-auto flex justify-between items-end">
                <div className="top-left flex items-start gap-x-4">
                    <h5 className="number">5</h5>
                    <h5>преимуществ <br/> работы с нами</h5>
                </div>
                <div className="top-right">
                    <p>тяни</p>
                    <img src={arrowRight} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
