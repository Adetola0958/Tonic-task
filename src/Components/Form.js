import React from "react";

const Form = () => {
    return(
        <>
            <div className="container"> 
                <div className="shrink ">
                    <div className="text-center align-items-center justify-content-center text-center">
                        <h3 className="text-white">An enterprise template to ramp up your company website</h3>
                        <form>
                            <div className="d-flex justify-content-center align-items-center">
                                <input 
                                    type="email"
                                    className="form-control px-4"
                                    placeholder="Your email address"
                                />
                                <button value="submit" className="btn submit-btn">start now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form