import React, {useRef , useState} from 'react';
import { Row, Container} from 'react-bootstrap';
import './contact.css';
import { ReactComponent as ContactPhoto } from '../img/contact-photo.svg';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [msg,setMsg] = useState('');
    const [isSent, setIsSent] = useState('');
    const sendEmail = (e) => {
        e.preventDefault();
       
        emailjs.sendForm('service_7diq7oa', 'template_rllsnxb', e.target, 'user_IeR8NsezIqTGAcZveWXY8')
      .then((result) => {
        setIsSent(true);
          setMsg('Message sent. I will get back to you soon!');
      }, (error) => {
          setIsSent(false)
          setMsg('Message not sent. Please try again later.');
      });
      e.target.reset();
      setMsg('');
      setIsSent('');

    }
    return (
       <> 
        <section id='contact'>
             <h2 className="text-center"><span className='bracket'>&#8249;</span>Contact<span className='bracket'> &#8260;&#8250;</span></h2>
            <Container className="container-fluid">
                <Row>
                    <ContactPhoto alt='Girl Programmer with Clients' className='img-fluid'/>
                </Row>
                <Row>
                    <h4 className='text-center mb-5'>Want to work together? Let's talk!</h4>
                </Row>
                <Container className='d-flex justify-content-center container-fluid'>
                <form ref={form} onSubmit={sendEmail} className='form'>
                    <label>Name</label> <br/>
                    <input required type="text" name="name" /> <br/>
                    <label>Email Address</label> <br/>
                    <input required type="email" name="email" /> <br/>
                    <label>Message</label> <br/>
                    <textarea required name="message" /> <br/>
                    <input className="submit" type="submit" value="Send Message" />
                </form>
                </Container >
                <Row className='text-center'>
                    {
                       isSent ? <p style={{color:'green'}}>{msg}</p> : <p style={{color:'red'}}>{msg}</p>
                    }
                </Row>
            </Container>
        </section>
      </>  
    );
};

export default Contact;