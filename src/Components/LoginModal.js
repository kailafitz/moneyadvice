import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Logo from '../Images/Logo-Sm.png'
import SectionTitle from './SectionTitle';
import DataCaptureLogin from './DataCaptureLogin';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",
    position: 'absolute',
    width: "30%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
  },
  button: {
    backgroundColor: "#068095",
    color: "#ffffff",
    margin: ".8em",
    transition: ".3s ease-in background-color, .2s ease-in color",
    "&:hover": {
        backgroundColor: "#b8d30c",
        color: "#7d7d7d",
    },
  }
}));

export default function LoginModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper} id="f-ModalContainer">
      <img alt="Logo" src={Logo} id="f-ModalLogo"/>
      <div id="f-ModalButtonDiv">
        <SectionTitle title="Login" />
        <h4 className="f-h4">Data Capture Logins</h4>
        <DataCaptureLogin />
        <p className="f-p">or login directly to MoneyAdviceCRM</p>
        <Button type="button" className={classes.button}>MoneyAdviceCRM Login</Button>
      </div>
    </div>
  );

  return (
    <div>
      <Button
        className={classes.button}
        type="button"
        onClick={handleOpen}
      >
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {body}
      </Modal>
    </div>
  );
}