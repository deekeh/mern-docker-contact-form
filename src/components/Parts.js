import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Header = () => {
    return (
        <Navbar bg="danger" variant='dark' expand='lg'>
            <Navbar.Brand>
                DK
            </Navbar.Brand>
            
        </Navbar>
    )
}

export const Footer = () => {
    return (
        <div className='text-light bg-danger'>
            <Container>
                Footer
            </Container>
        </div>
    )
}