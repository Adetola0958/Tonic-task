import React from "react";
import Value1 from "../Assets/Images/small-value-1.png";
import Value2 from "../Assets/Images/small-value-2.png";
import Value3 from "../Assets/Images/value-3.png";

const Values = () => {
    const values = [
        {
            id: 1, 
            title: 'We are commited', 
            desc: 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.', 
            img: Value1
        },
        {
            id: 2, 
            title: 'We are commited', 
            desc: 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.', 
            img: Value2
        },
        {
            id: 3, 
            title: 'We are commited', 
            desc: 'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.', 
            img: Value3
        },
    ]

    return(
        <>
            <section className="our-values">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <p className="value">Our values</p>
                            <h3 className="value-header mb-3">Thing in we believe</h3>
                            <p className="value-para">
                                Conversion angel investor entrepreneur first mover advantage. 
                                Handshake infographic mass market crowdfunding iteration. 
                                Traction stock user experience deployment beta innovator incubator focus.   
                            </p>

                            <div className="values-explanation">
                                {values.map(v => (
                                    <div className="d-flex spacing mb-5" key={v.id}>
                                        <img src={v.img} alt="first value"/>
                                        <div className="px-5">
                                            <h3>{v.title}.</h3>
                                            <p>{v.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Values