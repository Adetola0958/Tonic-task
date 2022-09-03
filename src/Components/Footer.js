import React from "react";
import Logo from "../Assets/Images/Footer-Logo.png";

const Footer = () => {
    return(
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-6 image">
                            <a href="/"><img src={Logo} alt="logo"/></a>
                            <p className="short-desc">
                                Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter 
                            </p>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2 col-md-6 col-6 mb-4">
                            <h3 className="">Landings</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Products</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 mb-4">
                            <h3 className="">Company</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Careers <span>Hiring!</span></a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>   
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <h3 className="">Resources</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Products</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer