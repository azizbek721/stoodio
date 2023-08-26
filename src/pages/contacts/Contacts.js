import React from 'react';
import Footer from "../../containers/footer/Footer";
import Navbar from "../../containers/navbar/Navbar";
import Contact from "../../components/contacts/Contact";

const Contacts = () => {
    return (
        <div>
            <Navbar />
            <Contact />
            <Footer />
        </div>
    );
};

export default Contacts;
