import React from "react";
import Value1 from "../Assets/Images/value-1.png";
import Value2 from "../Assets/Images/value-2.png";
import Value3 from "../Assets/Images/value-3.png";

const Values = () => {
    return(
        <>
            <section className="our-values">
                <div className="container">
                    <div className="px-4 px-lg-5 d-flex h-100 justify-content-center align-items-center values-container">
                        <div className="justify-content-center">
                            <p className="value">Our values</p>
                            <h3 className="value-header">Thing in we believe</h3>
                            <p className="value-para">
                                Conversion angel investor entrepreneur first mover advantage. 
                                Handshake infographic mass market crowdfunding iteration. 
                                Traction stock user experience deployment beta innovator incubator focus.   
                            </p>

                            <div className="values-explanation">
                                <div className="d-flex spacing">
                                    <img src={Value1} alt="first value"/>
                                    <div className="px-5">
                                        <h3>We are commited.</h3>
                                        <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                                    </div>
                                </div>
                                <div className="d-flex spacing">
                                    <img src={Value2} alt="second value"/>
                                    <div className="px-5">
                                        <h3>We are commited.</h3>
                                        <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <img src={Value3} alt="third value"/>
                                    <div className="px-5">
                                        <h3>We are commited.</h3>
                                        <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Values