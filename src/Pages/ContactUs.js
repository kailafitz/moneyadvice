import React, { useState, useEffect } from 'react'

// Package imports
import axios from 'axios';

// styled-components imports
import styled from 'styled-components';
import {fonts} from '../fonts';
import {colors} from '../colors';
import breakpoint from '../breakpoints';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Component imports
import Footer from '../Components/Footer';
import SectionTitle from '../Components/SectionTitle';
import AlertMessage from '../Components/AlertMessage';

// Media imports
import BackgroundImage from '../Images/ContactBg-Header.jpg'

const HeaderImage = styled.div `
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${BackgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -6;

    @media only screen and ${breakpoint.device.xs} {
        height: 50vh;
    }

    @media only screen and ${breakpoint.device.sm} {
        height: 40vh;
    }

    @media only screen and ${breakpoint.device.lg} {
        height: 45vh;
    }
`

const ContactPageContainer = styled.div `
    background-color: ${colors.wh};
    margin: 0 auto;
    margin-top: 12em;
    padding: 1em .5em;
    height: 50%;
    padding-bottom: 10em;
    display: block;
    box-shadow: 0px -10px 14px -9px #515151;

    p {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        padding-bottom: 5em;
    }

    #f-ContactWrapper {

        #f-ContactIconWrapper {

            .f-ContactIconContainer {
                display: flex;
                align-items: center;
                margin: 1em 0;

                i {
                    color: ${colors.logo_blue};
                }

                h4 {
                    font-family: ${fonts.temp_font};
                    font-weight: 300;
                    color: ${colors.bl};
                }
            }
        }

        #f-ContactFormWrapper {
            margin: 0 auto;
            text-align: right;

            form {
                display: block;

                .f-ContactFormInput {
                    width: 90%;
                    margin-bottom: 1em;

                    .f-FormField {
                        background-color: ${colors.grey_light};
                        margin-bottom: 1em;
                        border-radius: 4px;
                    }
                }
            }
        }
    }

    @media only screen and ${breakpoint.device.xs} {
        width: 90%;

        p {
            font-size: 1.1em;
        }

        #f-ContactWrapper {
            margin: 0 auto;
            width: 100%;
            display: block;

            #f-ContactIconWrapper {
                width: 75%;
                margin: 0 auto;
                margin-bottom: 4em;

                i {
                    font-size: 3em;
                }

                h4 {
                    font-size: 1em;
                    padding-left: 2em;
                }
            }

            #f-ContactFormWrapper {
                width: 90%;

                form {
    
                    .f-ContactFormInput {
                        
    
                        .f-FormField {
                            .MuiInputBase-root {
                                input {
                                    font-size: 1.5em;
                                }
                            }

                            .MuiFormLabel-root {
                                font-size: 1.3em;
                            }                            
                        }
                    }
                }
            }
        }
    }

    @media only screen and ${breakpoint.device.sm} {
        width: 85%;

        p {
            font-size: 1em;
        }

        #f-ContactWrapper {
            width: 100%;
            display: flex;
            justify-content: center;
            align-content: flex-start;
    
            #f-ContactIconWrapper {
                width: 30%;
                margin: 0 auto;
    
                .f-ContactIconContainer {
                    display: flex;
                    align-items: center;
                    margin: 1em 0;
    
                    i {
                        font-size: 3em;
                    }
    
                    h4 {
                        font-size: 1.2em;
                        padding-left: 2em;
                    }
                }
            }
    
            #f-ContactFormWrapper {
                width: 40%;
                margin: 0 auto;
                text-align: right;
    
                form {
    
                    .f-ContactFormInput {
    
                        .f-FormField {
                            .MuiInputBase-root {
                                input {
                                    font-size: 1em;
                                }
                            }

                            .MuiFormLabel-root {
                                font-size: 0.8em;
                            }                            
                        }
                    }
                }
            }
        }
    }

    @media only screen and ${breakpoint.device.lg} {
        max-width: 70%;

        p {
            font-size: 1em;
        }

        #f-ContactWrapper {
            width: 100%;
            display: flex;
            justify-content: center;
            align-content: flex-start; 
    
            #f-ContactIconWrapper {
                width: 30%;
                margin: 0 auto;
    
                .f-ContactIconContainer {
                    display: flex;
                    align-items: center;
                    margin: 1em 0;
    
                    i {
                        font-size: 3em;
                    }
    
                    h4 {
                        font-size: 1.2em;
                        padding-left: 2em;
                    }
                }
            }
    
            #f-ContactFormWrapper {
                width: 40%;
                margin: 0 auto;
                text-align: right;
    
                form {
    
                    .f-ContactFormInput {
    
                        .f-FormField {
                            .MuiInputBase-root {
                                input {
                                    font-size: 1em;
                                }
                            }

                            .MuiFormLabel-root {
                                font-size: 0.8em;
                            }                            
                        }
                    }
                }
            }
        }
    }
`
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
        <HeaderImage className="f-HeaderImage"></HeaderImage>
            <AlertMessage {...alertDetails}/>
            <ContactPageContainer>
                <SectionTitle title="Contact Us" />
                <p className="f-p">If you have any queries, please fill out the form below and we will respond as soon as possible.
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
                </ContactPageContainer>               
            <Footer />
        </>
    )
}
