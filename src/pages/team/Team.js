import React from 'react';
import Footer from "../../containers/footer/Footer";
import Navbar from "../../containers/navbar/Navbar";
import Discuss from "../../containers/discuss/Discuss";
import Header from "../../components/team/header/Header";
import Work from "../../components/team/work/Work";
import Equipment from "../../components/team/equipment/Equipment";
import Important from "../../components/team/important/Important";
// import WriteUs from "../../components/team/writeus/WriteUs";
// import Develop from "../../components/team/develop/Develop";
// import Employees from "../../components/team/employees/Employees";
// import Mission from "../../components/team/mission/Mission";
// import Principles from "../../components/team/principles/Principles";
// import Values from "../../components/team/values/Values";
// import Facts from "../../components/team/facts/Facts";

const Team = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Work/>
            <Equipment/>
            <Important/>
            {/*<WriteUs/>*/}
            {/*<Employees/>*/}
            {/*<Develop/>*/}
            {/*<Mission/>*/}
            {/*<Principles/>*/}
            {/*<Values/>*/}
            {/*<Facts/>*/}
            <Discuss/>
            <Footer/>
        </div>
    );
};

export default Team;
