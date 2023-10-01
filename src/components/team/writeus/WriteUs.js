import React from 'react';
import "./WriteUs.scss"
import writeUsBg from "../../../assets/images/stoodioteam-bg.jpeg"

const WriteUs = () => {
    return (
        <div className="write-us-over">
            <div className="write-us-texts flex flex-col justify-center items-center text-center gap-y-8">
                <h3>
                    У нас всегда открыты вакансии для талантливых и амбициозных архитекторов, дизайнеров, урбанистов,
                    ландшафтных дизайнеров, визуализаторов, чертёжников.
                </h3>
                <p>
                    А если ты классный пиарщик, маркетолог, сммщик, графический дизайнер, таргетолог, и знаешь, как ещё
                    лучше продвигать нашу компанию – напиши нам, давай пообщаемся!
                </p>
                <button>написать нам</button>
            </div>
            <img src={writeUsBg} alt="" className="write-us-bg"/>
        </div>
    );
};

export default WriteUs;
