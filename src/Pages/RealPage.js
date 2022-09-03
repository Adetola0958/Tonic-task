import React from "react";
import Nav from "../Components/Nav";
import FirstHeader from "../Components/FirstHeader";
import Story from "../Components/OurStory";
import Numbers from "../Components/OurNumbers";
import OurTeam from "../Components/OurTeam";
import Values from "../Components/OurValues";
import Form from "../Components/Form";
import Footer from "../Components/Footer";
import ImageDiv from "../Components/ImageDiv";

const RealPage = () => {
    return (
        <>
            <Nav/>
            <FirstHeader/>
            <ImageDiv />
            <Story/>
            <Numbers/>
            <OurTeam/>
            <Values/>
            <section className="last-section">
                <Form/>
                <Footer/>
            </section>
        </>
    )
}

export default RealPage