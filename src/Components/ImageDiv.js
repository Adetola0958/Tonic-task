import React from "react";
import Img1 from '../Assets/Images/value-1.png'
import Img2 from '../Assets/Images/value-5.png'
import Img3 from '../Assets/Images/value-4.png'
import Img4 from '../Assets/Images/value-6.png'
import Img5 from '../Assets/Images/value-2.png'

const ImageDiv = () => {
    return (
        <div className="image-div container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="first">
                                <img src={Img2} className='img-fluid' />
                            </div>
                            <div className="first">
                                <img src={Img1} className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="second">
                                <img src={Img3} className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="first">
                                <img src={Img5} className='img-fluid' />
                            </div>
                            <div className="first">
                                <img src={Img4} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageDiv