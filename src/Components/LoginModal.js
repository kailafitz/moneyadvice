import React from "react";

// styled-components imports
import breakpoint from "../breakpoints";
import fonts from "../fonts";
import colors from "../colors";
import styled from "styled-components";

// MaterialUI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

// Component imports
import DataCaptureLogin from "./DataCaptureLogin";

// styled-components
const Styledh3 = styled.h3 `
    font-family: ${fonts.temp_font};
    font-weight: 300;
    color: ${colors.logo_blue};
    line-height: 20px;

    a {
        text-decoration: none;
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.1;
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.15;
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.2em;
    }
`
const Styledp = styled.p `
  margin-top: 2em;
  font-family: ${fonts.roboto};
  color: ${colors.bl};

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

  @media only screen and ${breakpoint.device.xs} {
      font-size: 1em;
  }

  @media only screen and ${breakpoint.device.xs} {
      font-size: .95em;
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
    border: 1px solid ${colors.wh};
    font-size: 1.1em;
    display: block;
    margin: 1em auto;

    &:hover {
      border: 1px solid ${colors.logo_green};
    }
  }

  @media only screen and ${breakpoint.device.sm} {
  }

  @media only screen and ${breakpoint.device.lg} {
    font-size: .95em;
  }
`
const StyledLoginButton = styled(StyledButton) `

  @media only screen and ${breakpoint.device.xs} {
    font-size: 1.1em;
    display: block;
    width: 80%;
  }

  @media only screen and ${breakpoint.device.sm} {
    display: flex;
    align-items: center;
    margin: .8em;
    font-size: 1em;
  }

  @media only screen and ${breakpoint.device.lg} {
    font-size: .95em;
  }
`
const StyledModalContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  display: block;

  #f-ModalLogo {
    width: 50%;
    margin: auto;
  }

  @media only screen and ${breakpoint.device.xs} {
    width: 90%;
    margin: 0 auto;

    .MuiDialogContent-root {
      padding: 0;
    }
  }

  @media only screen and ${breakpoint.device.sm} {
    padding: 1em;

    .MuiDialogContent-root {
      padding: 8px 24px;
    }
  }

  @media only screen and ${breakpoint.device.lg} {
    
  }
`
const StyledDialog = styled(Dialog) `
  @media only screen and ${breakpoint.device.xs} {

    .MuiDialogContent-root {
      padding: 0;
    }
  }

  @media only screen and ${breakpoint.device.sm} {

    .MuiDialogContent-root {
      padding: 8px 24px;
    }
  }
`

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledLoginButton
        type="button"
        onClick={handleClickOpen}
      >
        Login
      </StyledLoginButton>
      <StyledDialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        {/* <img alt="Logo" src={Logo} id="f-ModalLogo"/> */}
        {/* <SectionTitle title="Login" /> */}
        <DialogContent>
          <StyledModalContainer>
          <Styledh3>Data Capture Logins</Styledh3>
          <DataCaptureLogin />
          <Styledp>or login directly to Money Advice CRM</Styledp>
          <StyledButton type="button">Money Advice CRM Login</StyledButton>
         </StyledModalContainer>
        </DialogContent>
      </StyledDialog>
    </div>
  );
}