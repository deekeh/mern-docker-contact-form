import React, {useState} from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';

const ContactForm = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [cName, cChange] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            title: e.target.title.value,
            message: e.target.message.value
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const res = await fetch('/contact-form', options)
        const res_json = await res.json();
        if (res_json.status) {
            cChange(res_json.name);
            setShow(true);
        }
        console.log(res_json);
    }
    return (
        <Container className='min-h-100'>
            <Form className='my-5' onSubmit={submitForm}>
                <Row>
                    <Col lg='6'>
                        <Form.Group>
                            <Form.Label>
                                Name
                            </Form.Label>
                            <Form.Control name='name' type='text' placeholder='What do we call you?'></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col lg='6'>
                        <Form.Group>
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control name='email' type='email' placeholder='Your email address please'></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12'>
                        <Form.Group>
                            <Form.Label>
                                Title
                            </Form.Label>
                            <Form.Control name='title' type='text' placeholder='What do you want to talk about?'></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm='12'>
                        <Form.Group>
                            <Form.Label>
                                Message
                            </Form.Label>
                            <Form.Control name='message' as='textarea' rows={4} placeholder='Tell us everything'></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type='submit' className='btn-block' variant='danger'>Let's Go!</Button>
                    </Col>
                </Row>
            </Form>

            {/* Show Modal on successful submission */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><span className="text-danger">Success</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thanks for showing your interest, {cName}! We will contact you shortly.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default ContactForm