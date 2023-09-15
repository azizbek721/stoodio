import React, {useContext} from 'react';
import './Projects.scss';
import arrowRight from '../../../assets/images/blue-arrow-right.svg';
import { Link } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import {Context} from "../../../context/Context";

const Projects = () => {
    const { width } = useWindowSize();
    const { projects } = useContext(Context)

    return (
        <div className="container mx-auto">
            <div className="main-project-over">
                <h3 className="main-projects-title">наши проекты</h3>
                <div className={`main-projects ${width <= 960 ? 'mobile' : ''}`}>
                    {projects.map((el) => (
                        <Link to={`/portfolio/${el.id.toString()}`} className="main-project" key={el.id}>
                            <img src={el.images[0].img} alt="" />
                            <h4>{el.name}</h4>
                        </Link>
                    ))}
                </div>
                <Link to="/portfolio" className="view-all-projects flex justify-center items-center gap-x-4">
                    <p>смотреть все портфолио</p>
                    <img src={arrowRight} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Projects;
