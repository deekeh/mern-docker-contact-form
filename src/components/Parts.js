import React from 'react'
import { Container, Navbar, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Header = () => {
    return (
        <Navbar bg="danger" variant='dark' expand='lg'>
            <Navbar.Brand className='mx-auto'>
                DK
            </Navbar.Brand>
        </Navbar>
    )
}

export const Footer = () => {
    return (
        <div className='text-light bg-danger'>
            <Container className='py-2'>
                <Row>
                    <Col sm={12} md={6}>
                        <h3>About DK</h3><hr/>
                        <p>
                            This is an example form created by DK using modern technologies like MongoDB, ExpressJS, ReactJS and NodeJS.
                        </p>
                        <p>
                            MongoDB is used as a database since it is popular for its NoSQL nature. ExpressJS handles the routing where it responds to the form submission carried out by the user. ReactJS is used as the front-end SPA development. NodeJS handles all of the server-side programming.
                        </p>
                        <p>
                            Instead of installing the database server application on the system, I have created a docker container of the MongoDB database and the application connects to the container instead.
                        </p>
                    </Col>
                    <Col sm={12} md={6}>
                        <h3>Contact Me</h3><hr/>
                        <h4>Email</h4>
                        <p>
                            You can mail me at <Button variant='danger'>dk@example.com</Button>
                        </p>
                        <h4>Github</h4>
                        <p>
                            You can also view my other projects on <a className='text-light' href="https://github.com/deekeh" target="_blank">My Github account</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}