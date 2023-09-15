import React, {useContext} from 'react';
import Footer from "../../containers/footer/Footer";
import Navbar from "../../containers/navbar/Navbar";
import arrowRight from "../../assets/images/big-arrow-right.svg"
import {VacanciesWrapper} from "./VacanciesWrapper";
import {Context} from "../../context/Context";
import useWindowSize from "../../hooks/useWindowSize";

const Vacancies = () => {

    const {vacancies} = useContext(Context)
    const { width } = useWindowSize()

    return (
        <div>
            <Navbar/>
            <VacanciesWrapper>
                <div className="container mx-auto">
                    <div className="jobs-title-div flex flex-col justify-end items-end">
                        <div className="text-left">
                            <h2>вакансии</h2>
                        </div>
                    </div>
                </div>
                <div className="jobs">
                    {vacancies.map((el) => (
                        <div className="job">
                            <div className="container mx-auto">
                                <div className="job-inner flex justify-between items-center content-center">
                                    <div className="job-info flex flex-col gap-y-4">
                                        <h5>{el.position}</h5>
                                        {width > 480 ? <p>{el.city}, {el.workTime}</p> : <p>{el.city}, {el.workTime} {el.salary}</p>}
                                    </div>
                                    <div className="salary flex items-center gap-x-10">
                                        {width > 480 ? <p>{el.salary}</p> : ""}
                                        <img src={arrowRight} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="container mx-auto">
                    <div className="hr-over flex justify-between items-start">
                        <div className={width > 960 ? "block" : "hidden"}></div>
                        <div className="hr-div flex flex-col justify-end">
                            <h5>все наши вакансии на <a href="https://hh.uz/" target="blank">hh.uz</a></h5>
                            <div className="not-found-us">
                                <h3>не нашли подходящую вакансию?</h3>
                                <a href="https://www.instagram.com/stoodio.uz/?hl=ru"
                                   target="blank" className="write-us flex items-center gap-x-10">
                                    <img src={arrowRight} alt=""/>
                                    <h3>напишите нам</h3>
                                </a>
                            </div>
                            <div className="hr-contact flex flex-col">
                                <p>Или свяжитесь с нами по телефону или instagram</p>
                                <a href="tel:+998930000580">+99893 0000580</a>
                                <a href="https://www.instagram.com/stoodio.uz/?hl=ru"
                                   target="blank">@stoodio.uz</a>
                            </div>
                        </div>
                    </div>
                </div>
            </VacanciesWrapper>
            <Footer/>
        </div>
    );
};

export default Vacancies;
