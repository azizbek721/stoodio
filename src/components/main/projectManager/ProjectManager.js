import React from 'react';
import "./ProjectManager.scss"
import founder from "../../../assets/images/pm.png";
import {Icon} from "@iconify/react";

const ProjectManager = () => {
    return (
        <div className="pm-over">
            <div className="container mx-auto">
                <div className="pm-div flex justify-around">
                    {/*<div>*/}
                    <img src={founder} alt="" className="pm"/>
                    {/*</div>*/}
                    <div className="pm-text flex flex-col justify-center items-start content-center">
                        <Icon icon="ep:d-arrow-left" color="white" width="52" height="52" fontSize="100px"
                              className=""/>
                        <h5>
                            Если вы готовы к смелым идеям и нестандартным решениям — нам понадобится максимум 5 дней,
                            чтобы начать работы в любой точке мира
                        </h5>
                        <Icon icon="ep:d-arrow-right" color="white" width="52" height="52" className="right-icon"/>

                        <div className="pm-info flex flex-col gap-y-4">
                            <h3 className="name">Зиёдилла Наврузов</h3>
                            <p className="job">руководитель проектов</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectManager;
