import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footer from '../Components/Footer';
import axios from 'axios';
import SectionTitle from '../Components/SectionTitle';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        // width: '25ch',
      },
    },
}));

export default function ContactUs() {
    const classes = useStyles();
    const [input, setInput] = useState({
        email: '',
        message: ''
    });

    function handleChange(event) {
        console.log(event.target)
        const {name, value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name] : value
            }
        })
    }

    function handleSubmit(event) {
        console.log(input);
        event.preventDefault();
        const newMessage = {
            email: input.email,
            message: input.message
        }
        axios.post('/api/form', newMessage)
    }

    useEffect(() => {
        if (input) {
            console.log(input)
        }
    }, [input])

    return (
        <>
        <div className="f-HeaderImage"></div>
            <div id="f-ContactBodyContainer">
                <SectionTitle title="Contact Us" />
                <div>
                    <p className="f-p">If you have any queries, please fill out the form below and we will respond as soon as possible.
                    <br/>
                    <br/>
                    For any urgent matters, please call us on the number below. Though our offices are based in Ennis, we do not facilitate walk-ins.</p>
                </div>
                <div id="f-ContactWrapper">
                    <div id="f-ContactIconWrapper">
                        <div className="f-ContactIconContainer">
                            <i class="fas fa-map-marker-alt"></i>
                            <h4 className="f-h4">
                                Station Road,
                                Ennis,
                                Co. Clare,
                                Ireland
                                V95 FN79
                            </h4>
                        </div>
                        <div className="f-ContactIconContainer">
                            <i class="fas fa-phone-square-alt"></i>
                            <h4 className="f-h4">+353 65 684 9675</h4>
                        </div>
                        <div className="f-ContactIconContainer">
                            <i class="fas fa-envelope-square"></i>
                            <h4 className="f-h4">support@moneyadvice.ie</h4>
                        </div>
                    </div>
                    <div id="f-ContactFormWrapper">
                        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <div className="f-ContactFormInput">
                                <TextField
                                    name="email"
                                    required
                                    id="filled-full-width"
                                    label="Your Email"
                                    variant="filled"
                                    size="normal"
                                    fullWidth
                                    value={input.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="f-ContactFormInput">
                                <TextField
                                    name="message"
                                    id="filled-multiline-flexible"
                                    label="Your Message"
                                    multiline
                                    rows={8}
                                    value={input.message}
                                    onChange={handleChange}
                                    variant="filled"
                                    size="normal"
                                    fullWidth
                                />
                            </div>
                            <Button
                            type="submit"
                            variant="contained"
                            >
                            Submit
                            </Button>                 
                        </form>
                    </div>
                </div>
                </div>               
            <Footer />
        </>
    )
}
