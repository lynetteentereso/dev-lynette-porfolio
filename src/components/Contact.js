import React from 'react';
import { Form } from 'react-bootstrap';
import './contact.css'

const Contact = () => {
    return (
        
        <div className="contact">
            <h1>Get in touch. </h1>
            <Form className='contact-form'>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group required className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group required className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </div>
    );
};

export default Contact;