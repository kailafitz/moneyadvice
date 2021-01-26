import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Footer from '../Components/Footer';

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
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return (
        <>
            <div id="f-ContactBodyContainer">
                <div className="f-PageTitle">
                    <h2 className="f-h2">Contact Us</h2>
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
                        <form className={classes.root} noValidate autoComplete="off">
                            <div className="f-contactforminput">
                                <TextField
                                    required
                                    id="filled-full-width"
                                    label="Your Email"
                                    variant="filled"
                                    size="normal"
                                    fullWidth
                                />
                            </div>
                            <div className="f-contactforminput">
                                <TextField
                                    id="filled-multiline-flexible"
                                    label="Your Message"
                                    multiline
                                    rows={8}
                                    value={value}
                                    onChange={handleChange}
                                    variant="filled"
                                    size="normal"
                                    fullWidth
                                />
                            </div>
                            <Button type="submit" variant="contained">Submit</Button>                 
                        </form>
                    </div>
                </div>
                </div>               
            <Footer />
        </>
    )
}
