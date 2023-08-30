import React from 'react';
import "./SaveMoney.scss"
import saveMoney from "../../../assets/videos/save-money-bg.mp4";

const SaveMoney = () => {
    return (
        <div className="save-money-container">
            <video className="save-money-background" src={saveMoney} autoPlay muted loop playsInline/>
            SaveMoney
        </div>
    );
};

export default SaveMoney;
