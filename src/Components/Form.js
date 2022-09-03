import React from "react";

const Form = () => {
    return(
        <>
            <div className="container"> 
                <div className="shrink">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h3 className="text-white">An enterprise template to ramp up your company website</h3>
                            <form>
                                <div className="d-flex justify-content-center align-items-center my-5">
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
            </div>
        </>
    )
}

export default Form