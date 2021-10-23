import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import emailjs from 'emailjs-com';
import clsx from 'clsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeStyles } from '@mui/styles';
import './styles.sass';

const useStyles = makeStyles({
    input:
    {
        "&&": {
            backgroundColor: '#2e3445',
            marginBottom: 15,
            borderRadius: 10,
            width: 450,
            '@media (max-width: 550px)':
            {
                width: '100%'
            }
        }
    },
    message: {
        height: 185
    },
    placeholder:
    {
        '&&': {
            color: 'white',
            "&::placeholder":
            {
                color: "white",
            }
        }
    },
    submit:
    {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            backgroundColor: '#3498db',
            textTransform: 'capitalize',
            color: 'white',
            marginTop: 10,
            borderRadius: 25,
            width: 100,
            height: 37,
            fontSize: 20,
            '&:hover':
            {
                backgroundColor: '#3498dbCC'
            }

        }
    }
});

const ContactSection = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
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
        setSubject('');
        setMessage('');
    }

    return (
        <div id="contact">
            <div className="title-container">
                <h1 className="title">Contact</h1>
                <div className="divider" />
            </div>
            <div style={{ marginBottom: 40 }}>
                <h2>Have a question or want to work together?</h2>
                <h2>Send me a message!</h2>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
                <TextField
                    className={classes.input}
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
                    variant='standard'
                />
                <TextField
                    placeholder="Email"
                    required
                    autoComplete="off"
                    name="email"
                    type="email"
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
                    placeholder="Subject"
                    required
                    autoComplete="off"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
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
                    Send
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

export default ContactSection;