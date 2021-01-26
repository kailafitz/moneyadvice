import React from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Employees } from '../Components/Employees'
import Footer from '../Components/Footer'
import ChairmanProfileImage from '../Images/About-Imgs/ChairmanProfileImage.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    margin: "auto",
    '& > *': {
      margin: theme.spacing(1),
    },
    large:  {
      wclassNameth: theme.spacing(7),
      height: theme.spacing(7),
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <>
      <div id="f-AboutBodyContainer">
        <div className="f-PageTitle">
          <h2 className="f-h2">About</h2>
        </div>
        <div className={classes.root} className="f-CEOCard">
          <Avatar
          alt="Chairman Profile Image"
          src={ChairmanProfileImage}
          className={classes.large}
          className="f-CEOAvatar"
          />
          <h4 className="f-h4">Philip O'Reilly</h4>
          <p className="f-p">Philip O'Reilly an experienced financial planner and chartered surveyor with over 30 years industry experience has been developing advisor software since 1995. The first application “BrokerCRM” was released in 1997. Software companies cannot deliver solutions unless experienced industry professionals with in-depth domain knowledge are heavily involved in the scoping, specification and on-going development of the ultimate software solution. Combining the experience from the development of software products with industry knowledge, the software team at Money Advice released the new Money Advice+CRM platform in Mar 2014. The release included protection quotations and policy downloads from the product providers. The new software manages financial services and mortgage advisor requirements in the areas of advice, sales, compliance and management. In building the software we have had a strong focus on CPC 2012 compliance requirements. We have built powerful CRM functionality which includes document management, marketing suite, and pipeline management with fees and commissions management. The needs analysis tools, cash flow tools and client reports are strong features of the system as are the management reports.</p>
        </div>
        <Employees />
        </div>
      <Footer />
    </>
  )
}