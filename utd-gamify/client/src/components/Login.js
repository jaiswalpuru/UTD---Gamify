import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import '../App.css';
import pool from '../images/pool.jpeg';
import squash from '../images/squash.jpg';
import ttSU from '../images/ttSU.jpg';


const Login = () => {

    const [toggle, setToggle] = useState(true);
    const [signUpBody, setSignUpBody] = useState({});
    const [signInBody, setSignInBody] = useState({});

    const signUp = () => {
        axios.post(`/api/v1/signup`, { signUpBody })
            .then((data) => {

            })
    }

    const signIn = () => {
        axios.post(`/api/v1/signin`, { signInBody })
            .then((data) => {
                console.log(data);
            })
    }

    return (
        <div>
            <nav className="navbar navbar-dark header-bg p-2">
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

            <div className="body-bg p-5">
                <div className="row">
                </div>
                {toggle &&
                    <div className="row container-fluid">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 text-center text-white">
                            <Form>
                                <h3>Sign In</h3>
                                <Form.Group className="mb-3" controlId="formGroupNetID">
                                    <Form.Control type="text" placeholder="Enter NetID"
                                        name="netId" value={signInBody.netId}
                                        onChange={e => setSignInBody({ ...signInBody, [e.target.name]: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Control type="password" placeholder="Enter Password"
                                        name="password" value={signInBody.password}
                                        onChange={e => setSignInBody({ ...signInBody, [e.target.name]: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Button className='white-button'
                                        onClick={signIn}>Login
                                    </Button>
                                </Form.Group>
                                <Form.Label>Not a member! We got you covered :)</Form.Label>
                                <Button className='white-button' onClick={() => setToggle(!toggle)}>Click here to Sign Up</Button>
                            </Form>
                        </div>
                        <div className="col-md-4"></div>
                    </div>}

                {!toggle &&
                    <div className="row container-fluid">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 text-center text-white">
                            <Form>
                                <h3>Sign Up</h3>
                                <Form.Group className="mb-3" controlId="formGroupNetID">
                                    <Form.Control type="text" placeholder="Enter NetID"
                                        name="netId" value={signInBody.netId}
                                        onChange={e => setSignUpBody({ ...signUpBody, [e.target.name]: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Control type="email" placeholder="Enter Email"
                                        name="email" value={signInBody.email}
                                        onChange={e => setSignUpBody({ ...signUpBody, [e.target.name]: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupName">
                                    <Form.Control type="text" placeholder="Enter Full Name"
                                        name="name" value={signInBody.name}
                                        onChange={e => setSignUpBody({ ...signUpBody, [e.target.name]: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Control type="password" placeholder="Enter Password"
                                        name="password" value={signInBody.password}
                                        onChange={e => setSignUpBody({ ...signUpBody, [e.target.name]: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Button className='white-button'
                                        onClick={signUp}>Sign Up
                                    </Button>
                                </Form.Group>
                                <Button className='white-button'
                                    onClick={() => setToggle(!toggle)}>Click here to Sign In
                                </Button>
                            </Form>
                        </div>
                        <div className="col-md-4"></div>
                    </div>}

                <hr />

                <div className="row container-fluid mt-4">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center text-white">
                        <h3>Our Playground is your World</h3>
                        <p>We give you more of what you want and less of what you don't need!</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                <div className="row container-fluid">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center">

                        <Carousel fade>
                            <Carousel.Item>
                                <img className="d-block carousel-img w-100" src={squash} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block carousel-img w-100" src={pool} alt="Second slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block carousel-img w-100" src={ttSU} alt="Third slide" />
                            </Carousel.Item>
                        </Carousel>

                    </div>
                    <div className="col-md-2"></div>
                </div>

            </div>
        </div>
    )
}

export default Login
