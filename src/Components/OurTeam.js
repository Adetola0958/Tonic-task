import React from "react";
import Leader1 from "../Assets/Images/leader-1.png";
import Leader2 from "../Assets/Images/leader-2.png";
import Leader3 from "../Assets/Images/leader-3.png"

const OurTeam = () => {
    return(
        <>
            <section className="our-team">
                <div className="container">
                    <div className="row team-container">  
                        <p className="team">Our team</p>
                        <h3 className="team-header mb-4">The leadership team</h3>
                        <p className="team-para">
                            Conversion angel investor entrepreneur first mover advantage. 
                            Handshake infographic mass market crowdfunding iteration. 
                            Traction stock user experience deployment beta innovator incubator focus.  
                        </p>
                    </div>
                    <div className="images">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={Leader1} alt="leader 1 image"/>
                                <p>Michael Scott</p>
                                <small>Genaral Manager</small>
                            </div>
                            <div className="col-md-4">
                                <img src={Leader2} alt="leader 2 image"/>
                                <p>Dwight Schrute</p>
                                <small>Genaral Manager</small>
                            </div>
                            <div className="col-md-4">
                                <img src={Leader3} alt="leader 3 image"/>
                                <p>Pam Beetsley</p>
                                <small>Genaral Manager</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeam