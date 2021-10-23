import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { MdLocationOn } from 'react-icons/md';
import emailjs from 'emailjs-com';
import clsx from 'clsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from './styles';
import './styles.sass';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const classes = useStyles();

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_xhdfxv4', 'template_5j0q1g9', e.target, process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => {
                console.log(result.text);
                toast.success('Your message sent successfully');
            }, (error) => {
                console.log(error.text);
                toast.error('Oops... an unexpected error occurred');
            }
            );
        e.target.reset();
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div id="contact">
            <div className="title-container">
                <h1 className="title">Contact</h1>
                <div className="divider" />
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
                <TextField
                    placeholder="Name"
                    required
                    autoComplete="off"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                        disableUnderline: true,
                        classes: { input: classes.placeholder },
                        style: { fontFamily: 'Glory', padding: '5px 15px' }
                    }}
                    className={classes.input}
                    variant='standard'
                />
                <TextField
                    placeholder="Email"
                    required
                    autoComplete="off"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                        disableUnderline: true,
                        classes: { input: classes.placeholder },
                        style: { fontFamily: 'Glory', padding: '5px 15px' }
                    }}
                    className={classes.input}
                    variant='standard'
                />
                <TextField
                    placeholder="Message"
                    required
                    multiline
                    minRows={1}
                    maxRows={8}
                    autoComplete="off"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    InputProps={{
                        disableUnderline: true,
                        classes: { input: classes.placeholder },
                        style: { fontFamily: 'Glory', padding: '5px 15px' }
                    }}
                    className={clsx(classes.input, classes.message)}
                    variant='standard'
                />
                <Button
                    variant="contained"
                    className={classes.submit}
                    type="submit"
                >
                    <span>
                        Send
                    </span>
                </Button>
            </form>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Contact;