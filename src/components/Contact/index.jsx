import React, { useState } from 'react';
import { Button, Grid, Input, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MdLocationOn } from 'react-icons/md';
import { BiEnvelopeOpen } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import clsx from 'clsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoading, ThreeDots } from '@agney/react-loading';
import SectionTitle from '../Section Title';
import { contact } from '../../data/texts';
import './styles.sass';

const useStyles = makeStyles({
    about: {
        "&&": {
            fontFamily: `'Glory', sasn-serif`,
            fontWeight: 'bold',
            textAlign: 'center',
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
            zIndex: 10,
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
    }
});

const ContactSection = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sending, setSending] = useState(false);
    const classes = useStyles();
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <ThreeDots width="30" color="#FFFFFF" />,
    });

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);
        let data = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
        fetch(`https://tsahi-email-server.herokuapp.com/send-email`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                if (res.result === 'success')
                    toast.success(res.message);
                else {
                    console.log(res.message);
                    toast.error('Oops! An unexpected error occurred');
                }
                setSending(false);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message);
            });
    }

    return (
        <div id="contact">
            <SectionTitle title="contact" subtitle="Don't be shy, get in touch" />
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
                        <Typography variant="h5" className={classes.cardTitle}>WhatsApp</Typography>
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
                    variant="outlined"
                    className="button btn-color btn-l-r"
                    type="submit"
                    disabled={sending ? true : false}
                >
                    {!sending ?
                        'Send!'
                        :
                        <section className="indicator" {...containerProps}>
                            {indicatorEl}
                        </section>
                    }
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