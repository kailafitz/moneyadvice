import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footer from '../Components/Footer';
import axios from 'axios';
import SectionTitle from '../Components/SectionTitle';
import AlertMessage from '../Components/AlertMessage';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        '& .MuiFilledInput-underline:after': { 
            borderBottomColor: "#b8d30c",
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: "#7d7d7d",
        }
    },
    floatingLabelFocusStyle: {
        color: "#7d7d7d",
    },
    button: {
        backgroundColor: "#068095",
        color: "#ffffff",
        margin: ".8em",
        transition: ".3s ease-in background-color",
        "&:hover": {
            backgroundColor: "#b8d30c",
        },
    }
}));

export default function ContactUs() {
    const classes = useStyles();
    const [alertDetails, setAlertDetails] = useState({
        display: false,
        message: "Message sent successfully",
        severity: "success"
    })

    const [input, setInput] = useState({
        email: '',
        name: '',
        message: ''
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name] : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newMessage = {
            email: input.email,
            name: input.name,
            message: input.message
        }
        
        axios.post('api/form', newMessage).then(response => {
            setAlertDetails({...AlertMessage, display: true});
            if(response.status == 200){
                setAlertDetails({...AlertMessage, message: "Message sent successfully"});
                setAlertDetails({...AlertMessage, severity: "success"});
            }else{
                setAlertDetails({...AlertMessage, message: "Message sent unsuccessfully"});
                setAlertDetails({...AlertMessage, severity: "error"});
            }
        });
        
    }

    useEffect(() => {
        if(alertDetails){
            console.log(alertDetails);
        }
    }, [alertDetails])

    return (
        <>
        <div className="f-HeaderImage"></div>
            <AlertMessage {...alertDetails}/>
            <div id="f-ContactBodyContainer">
                <SectionTitle title="Contact Us" />
                <p className="f-p f-MarginAuto f-TextCenter">If you have any queries, please fill out the form below and we will respond as soon as possible.
                <br/>
                <br/>
                For any urgent matters, please call us on the number below. Though our offices are based in Ennis, we do not facilitate walk-ins.</p>
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
                            <h4 className="f-h4"><a href="tel:00353656849675">+353 65 684 9675</a></h4>
                        </div>
                        <div className="f-ContactIconContainer">
                            <i class="fas fa-envelope-square"></i>
                            <h4 className="f-h4"><a href="mailto:support@moneyadvice.ie">support@moneyadvice.ie</a></h4>
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
                                    className="f-FormField"
                                    value={input.email}
                                    onChange={handleChange}
                                    InputLabelProps={{ className: classes.floatingLabelFocusStyle, }}
                                />
                                <TextField
                                    name="name"
                                    required
                                    id="filled-full-width"
                                    label="Your Name"
                                    variant="filled"
                                    size="normal"
                                    fullWidth
                                    className="f-FormField"
                                    value={input.name}
                                    onChange={handleChange}
                                    InputLabelProps={{ className: classes.floatingLabelFocusStyle, }}
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
                                    className="f-FormField"
                                    InputLabelProps={{ className: classes.floatingLabelFocusStyle, }}
                                />
                            </div>
                            <Button
                                className={classes.button}
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
