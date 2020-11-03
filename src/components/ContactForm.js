import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <Container className='min-h-100'>
            <Form className='my-5'>
                <Row>
                    <Col lg='6'>
                        <Form.Group>
                            <Form.Label>
                                Name
                            </Form.Label>
                            <Form.Control type='text' placeholder='What do we call you?'></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col lg='6'>
                        <Form.Group>
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type='email' placeholder='Your email address please'></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12'>
                        <Form.Group>
                            <Form.Label>
                                Title
                            </Form.Label>
                            <Form.Control type='text' placeholder='What do you want to talk about?'></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm='12'>
                        <Form.Group>
                            <Form.Label>
                                Message
                            </Form.Label>
                            <Form.Control as='textarea' rows={4} placeholder='Tell us everything'></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className='btn-block' variant='danger'>Let's Go!</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default ContactForm