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
    const [signInBody, setSignInBody] = useState({ netIdSI: '', passwordSI: '' });
    const [signUpBody, setSignUpBody] = useState({ netIdSU: '', name: '', email: '', passwordSU: '', role: 'STUDENT' });

    useEffect(() => { }, []);

    const signUp = () => {
        axios.post(`/api/v1/signup`, { signUpBody })
            .then((data) => {

            })
    }

    const signIn = () => {
        axios.post(`/api/v1/signin`, { signInBody })
            .then((data) => {

            })
    }

    return (
        <div>
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
                                        name="netIdSI" value={signInBody.netIdSI}
                                        onChange={e => setSignInBody({ ...signInBody, [e.target.name]: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Control type="password" placeholder="Enter Password"
                                        name="passwordSI" value={signInBody.passwordSI}
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
                                        name="netIdSU" value={signInBody.netIdSU}
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
                                        name="passwordSU" value={signInBody.passwordSU}
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
