import React, { useEffect, useState, setState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Logo from '../Images/Logo-Sm.png'
import SimpleLoginAccordion from './SimpleLoginAccordian';

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
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [click, setClick] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper} id="f-ModalContainer">
      <img alt="Logo" src={Logo} id="f-ModalLogo"/>
      {/* <SimpleModal /> */}
      <div id="f-ModalButtonDiv">

        <SimpleLoginAccordion />
        {/* <Button color="inherit" type="button" className="f-ModalButton">Money Advice CRM</Button>
        {click && <FullWidthTabs />}
        <Button color="inherit" type="button" className="f-ModalButton">Data Capture</Button> */}
      </div>
    </div>
  );

  return (
    <div>
        <Button color="inherit" id="f-LoginBtn" type="button" onClick={handleOpen}>Login</Button>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
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