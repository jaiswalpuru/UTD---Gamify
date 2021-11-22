import React from 'react'
import "../App.css";


function Login() {
    return (
        <div>
            <nav class="navbar navbar-dark header-bg ">
                <span className="container">
                    <span className="navbar-brand">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-joystick" viewBox="0 0 16 16">
                            <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z" />
                            <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z" />
                        </svg>
                        Gamify
                    </span>
                </span>
            </nav>

            <div className="body-bg">
                <div className="row container-fluid">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center text-white">
                        <h3>Our Playground is your World</h3>
                        <p>We give you more of what you want and less of what you don't need!</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                {/* <div className="row container-fluid">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="../images/chess.jpeg" alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="../images/" alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="../images/" alt="Third slide" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div> */}


            </div>
        </div>
    )
}

export default Login
