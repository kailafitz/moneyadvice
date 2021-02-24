import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Logo from '../Images/Logo-Sm.png'
import SectionTitle from './SectionTitle';
import DataCaptureLogin from './DataCaptureLogin';
import breakpoint from '../breakpoints';
import styled from 'styled-components';

const StyledModalContainer = styled.div`
  margin: 0 auto;
  padding: 1em;

  #f-ModalLogo {
    width: 50%;
    margin: auto;
  }

  #f-ModalButtonDiv {
    width: 100%;
    margin: 0 auto;
    display: block;

    p {
        padding-top: 2em;
    }
  }

  @media only screen and ${breakpoint.device.xs} {
    width: 90%;
    margin: 0 auto;
  }
`

const useStyles = makeStyles((theme) => ({
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

export default function FormDialog() {
  const classes = useStyles();  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.button}
        type="button"
        onClick={handleClickOpen}
      >
        Login
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className="f-TextCenter">
        <SectionTitle title="Login" />
        <DialogContent>
          <StyledModalContainer>
          <img alt="Logo" src={Logo} id="f-ModalLogo"/>
            <div id="f-ModalButtonDiv">
              <h4 className="f-h4">Data Capture Logins</h4>
              <DataCaptureLogin />
              <p className="f-p">or login directly to MoneyAdviceCRM</p>
              <Button type="button" className={classes.button}>MoneyAdviceCRM Login</Button>
            </div>
         </StyledModalContainer>
        </DialogContent>
      </Dialog>
    </div>
  );
}