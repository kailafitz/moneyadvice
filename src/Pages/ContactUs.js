import React, { useState, useEffect } from 'react'

// Package imports
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';

// styled-components imports
import styled from 'styled-components';
import {fonts} from '../fonts';
import {colors} from '../colors';
import breakpoint from '../breakpoints';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// Component imports
import Footer from '../Components/Footer';
import SectionTitle from '../Components/SectionTitle';
import ScrollTopButton from '../Components/ScrollTopButton';

// Media imports
import BackgroundImage from '../Images/ContactBg-Header.jpg'

// styled-components
const Styledh4 = styled.h4 `
    font-family: ${fonts.temp_font};
    font-weight: 300;
    color: ${colors.bl};
    line-height: 20px;

    a {
        text-decoration: none;
        color: ${colors.bl};
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.3em;
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.25em;
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.2em;
    }
`
const Styledp = styled.p `
    font-family: ${fonts.roboto};
    color: ${colors.bl};
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 2em;

    a {
        ${fonts.roboto};
        text-decoration : none;

        &:hover {
            text-decoration: underline;
        }
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.1em;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 1em;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: .95em;
    }
`
const StyledSpan = styled.span `
    font-family: ${fonts.temp_font};
    font-weight: 300;
    color: ${colors.logo_blue};

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.15em;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 1.19em;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 1.2em;
    }
`
const StyledButton = styled(Button) `
    font-family: ${fonts.roboto};
    text-transform: uppercase;
    background-color: ${colors.logo_blue};
    color: ${colors.wh};
    margin: .8em;
    transition: .3s ease-in background-color, .3s ease-in color;

    &:hover {
        background-color: ${colors.logo_green};
        color: ${colors.wh};
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.1em;
    }
    
    @media only screen and ${breakpoint.device.sm} {
        font-size: 1em;
    }
    
    @media only screen and ${breakpoint.device.lg} {
        font-size: .95em;
    }
`
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

    .f-Overlay {
        background-color: ${colors.logo_trans_blue};
        height: 100%;
        width: 100%;
    }

    @media only screen and ${breakpoint.device.xs} {
        height: 50vh;
    }

    @media only screen and ${breakpoint.device.sm} {
        
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

    #f-ContactWrapper {

        #f-ContactIconWrapper {

            .f-ContactIconContainer {
                display: flex;
                align-items: center;
                margin: 1em 0;

                i {
                    color: ${colors.logo_blue};
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

        #f-ContactWrapper {
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
                    padding-left: 2em;
                }
            }

            #f-ContactFormWrapper {
                width: 90%;

                form {
                    .f-ContactFormInput {
                        .f-FormField {                         

                            .MuiFilledInput-root {
                                font-size: 1.35em;
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

        #f-ContactWrapper {
    
            #f-ContactIconWrapper {
                width: 50%;
    
                .f-ContactIconContainer {
                    display: flex;
                    align-items: center;
                    margin: 1em 0;
    
                    i {
                        font-size: 3em;
                    }
                }
            }
    
            #f-ContactFormWrapper {
                width: 80%;
                padding-top: 5em;
                margin: 0 auto;
                text-align: right;
    
                form {
                    .f-ContactFormInput {
                        .f-FormField {

                            .MuiFilledInput-root {
                                font-size: 1em;
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
    }
`

// MaterialUI makeStyles
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        '& .MuiFilledInput-root': {
            backgroundColor: "#ffffff",
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
    }
}));

export default function ContactUs() {
    init("user_nbna29mf7GTYIJguCdCEE");
    const classes = useStyles();

    const [errorValue, setErrorValue] = useState(false);
    const [open, setOpen] = React.useState(false);

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = () => {        
        setOpen(false);
    };    

    useEffect(() => {
        
    }, [errorValue])

    function handleSubmit(e) {
        e.preventDefault();
        console.log("output", e);

        emailjs.sendForm('gmail', 'websiteform', e.target, 'user_nbna29mf7GTYIJguCdCEE')
        .then((result) => {
            setErrorValue(true);
            setOpen(true);
            console.log(result.text);
            
        }, (error) => {
            setErrorValue(false);
            setOpen(true);
            console.log(error.text);
        });

        console.log("open: ", open);
        e.target.reset();        
    }    

    return (
        <>
            <HeaderImage className="f-HeaderImage">
                <div className="f-Overlay"></div>
            </HeaderImage>
            <Snackbar
                anchorOrigin={{'vertical': 'top', 'horizontal': 'center' }}
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                key={{'vertical': 'top', 'horizontal': 'center' }}
            >
                { 
                    errorValue ?
                    
                    <Alert onClose={handleClose} severity="success">
                        Your message has been sent!
                    </Alert>

                    :

                    <Alert onClose={handleClose} severity="error">
                        An error has occurred. Please contact us through the email and number provided.
                    </Alert>
                }
                
            </Snackbar>        
            <ContactPageContainer>
                <SectionTitle title="Contact Us" />
                <Styledp>For any direct queries about Money Advice CRM, we are available through telephone and email.
                    <br />
                    <br />
                    <StyledSpan>Our expert team is on hand to take care of any questions around quotations, demos and how our system can benefit your business.</StyledSpan>
                    <br />
                    <br />
                    Please note that although our offices are based in Ennis, we do not facilitate walk-ins.</Styledp>
                <div id="f-ContactWrapper">
                    <div id="f-ContactIconWrapper">
                        <div className="f-ContactIconContainer">
                            <i class="fas fa-map-marker-alt"></i>
                            <Styledh4>
                                Station Road,
                                Ennis,
                                Co. Clare,
                                Ireland
                                V95 FN79
                            </Styledh4>
                        </div>
                        <div className="f-ContactIconContainer">
                            <i class="fas fa-phone-square-alt"></i>
                            <Styledh4><a href="tel:00353656849675">+353 65 684 9675</a></Styledh4>
                        </div>
                        <div className="f-ContactIconContainer">
                            <i class="fas fa-envelope-square"></i>
                            <Styledh4><a href="mailto:support@moneyadvice.ie">support@moneyadvice.ie</a></Styledh4>
                        </div>
                    </div>
                    <div id="f-ContactFormWrapper">
                    <Styledp>Want to leave us a message? We're happy to help. Fill out our form and a member of our team will respond as soon as possible.</Styledp>
                        <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                            <div className="f-ContactFormInput">
                                <TextField
                                    type="email"
                                    name="email"
                                    required={true}
                                    id="filled-full-width"
                                    label="Your Email"
                                    variant="filled"
                                    fullWidth
                                    className="f-FormField"
                                    // value={input.email}
                                    // onChange={handleChange}
                                    InputLabelProps={{ className: classes.floatingLabelFocusStyle, }}
                                />
                                <TextField
                                    type="text"
                                    name="name"
                                    required={true}
                                    id="filled-full-width"
                                    label="Your Name"
                                    variant="filled"
                                    fullWidth
                                    className="f-FormField"
                                    // value={input.name}
                                    // onChange={handleChange}
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
                                    // value={input.message}
                                    // onChange={handleChange}
                                    variant="filled"
                                    fullWidth
                                    className="f-FormField"
                                    InputLabelProps={{ className: classes.floatingLabelFocusStyle, }}
                                />
                            </div>
                            <StyledButton
                                type="submit"
                                variant="contained"
                            >
                            Submit
                            </StyledButton>
                        </form>
                    </div>
                </div>
                </ContactPageContainer>
                <ScrollTopButton />             
            <Footer />
        </>
    )
}
