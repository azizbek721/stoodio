import React from 'react';
import "./Header.scss"

const Header = () => {
    return (
        <div className="container mx-auto">
            <div className="team-header flex justify-end items-end">
                <div className="team-head">
                    <h1 className="team-head-title flex flex-col items-start">stoodio<span></span>team</h1>
                    <div className="team-head-texts flex justify-between items-center">
                        <h4>Воплощать идеи, создавать смыслы и пространства на языке архитектуры</h4>
                        <p>раздел для тех, кто хочет присоединиться к нашей команде</p>
                    </div>
                    <div className="team-head-buttons flex justify-between items-center">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="">преимущества работы в бюро</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="">карьерные возможности</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="">начало работы в бюро</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
