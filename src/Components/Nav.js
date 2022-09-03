import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import Logo from "../Assets/Images/Logo.svg";

const Nav = () => {
    const [scrollHeader, setScrollHeader] = useState(false)

    useEffect(() => {
         if(typeof window !== "undefined"){
            window.addEventListener("scroll", () => {
                setScrollHeader(window.pageYOffset > 200)
            })
         }
    }, [])

    return(
        <>
            <nav className={`navbar navbar-expand-md nav-fix ${scrollHeader ? "fixed" : ""}`} id="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#page-top"><img src={Logo} alt="logo"/> </a>
                    {/* <a className="navbar-brand" href="#page-top">Boldo</a> */}
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#tola" aria-controls="tola" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <i className="fas fa-bars"></i> */}
                    </button>
                    <div className="collapse navbar-collapse" id="tola">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#">Product</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                            <li className="nav-item"><a className="nav-link login" href="#">Log In</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav 