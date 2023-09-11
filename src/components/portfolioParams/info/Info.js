import React from 'react';
import "./Info.scss"

const Info = ({params}) => {
    return (
        <div className="container mx-auto">
            <div className="project-info-over flex justify-end items-end">
                <div></div>
                <div className="project-info-div flex flex-col gap-y-2">
                    <div className="project-info type flex justify-between items-center">
                        {params.type ? (
                            <>
                                <p>тип</p>
                                <h5>{params.type}</h5>
                            </>
                        ) : ""}
                    </div>
                    <div className="project-info date flex justify-between items-center">
                        {params.date ? (
                            <>
                                <p>дата</p>
                                <h5>{params.date}</h5>
                            </>
                        ) : ""}
                    </div>
                    <div className="project-info square flex justify-between items-center">
                        {params.square ? (
                            <>
                                <p>площадь</p>
                                <h5>{params.square}</h5>
                            </>
                        ) : ""}
                    </div>
                    <div className="project-info place flex justify-between items-center">
                        {params.place ? (
                            <>
                                <p>место</p>
                                <h5>{params.place}</h5>
                            </>
                        ) : ""}
                    </div>
                    <div className="project-info status flex justify-between items-center">
                        {params.status ? (
                            <>
                                <p>статус</p>
                                <h5>{params.status}</h5>
                            </>
                        ) : ""}
                    </div>
                    <div className="project-info team flex justify-between items-center">
                        {params.team ? (
                            <>
                                <p>команда</p>
                                <h5>{params.team}</h5>
                            </>
                        ) : ""}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
