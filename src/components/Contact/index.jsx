import React, { useState } from 'react';
import { Button, Grid, Input, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MdLocationOn } from 'react-icons/md';
import { BiEnvelopeOpen } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import clsx from 'clsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contact } from '../../data/texts';
import './styles.sass';

const useStyles = makeStyles({
    about: {
        "&&": {
            fontFamily: `'Glory', sasn-serif`,
            fontWeight: 'bold',
            marginBottom: 30
        }
    },
    cardTitle: {
        "&&": {
            fontFamily: `'Josefin Sans', sasn-serif`,
            fontWeight: 'bold',
            color: 'white',
            letterSpacing: 1,
            marginBottom: -5
        }
    },
    cardSubtitle: {
        "&&": {
            fontFamily: `'Josefin Sans', sasn-serif`,
            color: 'white'
        }
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:
    {
        "&&": {
            color: 'white',
            backgroundColor: '#2e3445',
            fontFamily: 'Glory',
            padding: '5px 25px',
            marginBottom: 20,
            borderRadius: 10,
            width: 450,
            '@media (max-width: 600px)':
            {
                width: '100%'
            }
        }
    },
    submit:
    {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            backgroundColor: '#628aeb',
            textTransform: 'capitalize',
            alignSelf: 'center',
            color: 'white',
            marginTop: 10,
            borderRadius: 25,
            width: 120,
            height: 37,
            fontSize: 20,
            '&:hover':
            {
                backgroundColor: '#628aebCC'
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
                e.target.reset();
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
                toast.error('Oops... an unexpected error occurred');
            }
            );
    }

    return (
        <div id="contact">
            <div className="title-container">
                <h1 className="title">Contact</h1>
                <div className="divider" />
            </div>
            <Typography variant="h5" className={classes.about}>{contact}</Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs="auto" sm={6} md={4} lg={4} xl={4} className={classes.item}>
                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <MdLocationOn className="icon" />
                        </div>
                        <Typography
                            variant="h5"
                            className={classes.cardTitle}
                        >
                            Location
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            className={classes.cardSubtitle}
                        >
                            Bat Yam, Israel
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs="auto" sm={6} md={4} lg={4} xl={4} className={classes.item}>
                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <BiEnvelopeOpen className="icon" />
                        </div>
                        <Typography
                            variant="h5"
                            className={classes.cardTitle}
                        >
                            Email
                        </Typography>
                        <a
                            href="mailto:tsahi.13@gmail.com"
                            className="link"
                        >
                            tsahi.13@gmail.com
                        </a>
                    </div>
                </Grid>
                <Grid item xs="auto" sm={12} md={12} lg={4} xl={4} className={classes.item}>
                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <FaWhatsapp className="icon" />
                        </div>
                        <Typography variant="h5" className={classes.cardTitle}>Phone</Typography>
                        <a
                            href="https://api.whatsapp.com/send?phone=+972526547888"
                            target="_blank"
                            rel="noreferrer"
                            className="link"
                        >
                            Send me a message
                        </a>
                    </div>
                </Grid>
            </Grid>
            <form className="contact-form" onSubmit={sendEmail}>
                <Input
                    name="name"
                    value={name}
                    placeholder="Name *"
                    disableUnderline
                    className={classes.input}
                    required
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                    variant='standard'
                />
                <Input
                    name="email"
                    value={email}
                    placeholder="Email *"
                    type="email"
                    disableUnderline
                    className={classes.input}
                    required
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    variant='standard'
                />
                <Input
                    name="subject"
                    value={subject}
                    placeholder="Subject *"
                    disableUnderline
                    className={classes.input}
                    required
                    autoComplete="off"
                    onChange={(e) => setSubject(e.target.value)}
                    variant='standard'
                />
                <Input
                    name="message"
                    value={message}
                    placeholder="Your message"
                    disableUnderline
                    className={clsx(classes.input, classes.message)}
                    required
                    multiline
                    minRows={7}
                    maxRows={7}
                    autoComplete="off"
                    onChange={(e) => setMessage(e.target.value)}
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