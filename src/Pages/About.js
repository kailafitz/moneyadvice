import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Employees } from '../Components/Employees'
import Footer from '../Components/Footer'
import ChairmanProfileImage from '../Images/About-Imgs/ChairmanProfileImage.jpg'
import ContactUsButton from '../Components/ContactUsButton';
import ProductOverview from '../Components/ProductOverview';
import SectionTitle from '../Components/SectionTitle';
import { EmployeeProfileCard } from '../Components/EmployeeProfileCard';

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
      <div id="f-AboutHeader">
        <div className="f-Overlay">
          <div id="f-HeaderWrapper">
            <h2 className="f-h2 f-TextLeft f-MarginAuto">With MoneyAdvice CRM, we care about your customers and the services that you offer.
            </h2>
            <h3 className="f-h3">
            Our updated platform ensures a smooth user experience so that you can deliver high quality services to those who need it.</h3>
            <div id="f-AboutButtonDiv">
              <ContactUsButton label="Get in touch"/>
            </div>
          </div>
        </div>
      </div>

      <ProductOverview />

      <div id="f-TeamDiv">
        <div id="f-TeamWrapper">
          <SectionTitle title="Meet our Team" />
          <div className={classes.root} className="f-TextCenter">
            <EmployeeProfileCard img={ChairmanProfileImage} empName="Philip O'Reilly" title="CEO"/>
            <p className="f-p f-TextLeft">Philip O'Reilly, an experienced financial planner and chartered surveyor with over 30 years industry experience, has been developing advisor software since 1995.
            <br />
            <br />
            The first application “BrokerCRM” was released in 1997. Software companies cannot deliver solutions unless experienced industry professionals with in-depth domain knowledge are heavily involved in the scoping, specification and on-going development of the ultimate software solution.
            <br />
            <br />
            Combining the experience from the development of software products with industry knowledge, the software team at Money Advice released the new Money Advice+CRM platform in March 2014. The release included protection quotations and policy downloads from the product providers. The new software manages financial services and mortgage advisor requirements in the areas of advice, sales, compliance and management. In building the software we have had a strong focus on CPC 2012 compliance requirements. We have built powerful CRM functionality which includes document management, marketing suite, and pipeline management with fees and commissions management. The needs analysis tools, cash flow tools and client reports are strong features of the system as are the management reports.</p>
          </div>
          <Employees />
        </div>
      </div>
      <Footer />
    </>
  )
}