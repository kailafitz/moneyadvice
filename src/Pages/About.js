import React from 'react'
import { Employees } from '../Components/Employees'
import Footer from '../Components/Footer'
import ContactUsButton from '../Components/ContactUsButton';
import ProductOverview from '../Components/ProductOverview';
import SectionTitle from '../Components/SectionTitle';
import Philip from '../Images/About-Imgs/Philip_OReilly.png'
import Container from '@material-ui/core/Container';
import Timeline from '../Components/Timeline';
import styled from 'styled-components';
import {colors} from '../colors';
import breakpoint from '../breakpoints';

const AboutHeader = styled.div `
  background-image: url("./Images/about-bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  height: 100vh;

  .f-Overlay {
      background-color: ${colors.logo_trans_blue};
      height: 100%;
      width: 100%;
      display: flex;
      margin: auto;
      align-items: center;

      #f-HeaderWrapper {
          width: 70%;
          display: flex;
          flex-wrap: wrap;
          margin: auto;
          align-items: center;

          h2 {
              font-size: 3em;
              color: ${colors.wh};
              letter-spacing: 2px;
          }

          h3 {
              color: ${colors.grey_light};
          }

          #f-AboutButtonDiv {
              width: 100%;
              display: flex;
              padding: 1em 0;
          }
      }
  }

  @media only screen and ${breakpoint.device.xs} {
  }

  @media only screen and ${breakpoint.device.sm} {
  }

  @media only screen and ${breakpoint.device.lg} {
  }
`

export default function About() {
  return (
    <>
      <AboutHeader>
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
      </AboutHeader>

      {/* <Timeline /> */}

      <ProductOverview />
      
      <div id="f-TeamDiv">
            <SectionTitle title="Meet our Team" />
            
            <Container maxWidth="md" id="f-CEOIntro">
              <div id="f-CEOIntroText">
                <h4 className="f-h4 f-TextLeft">Philip O'Reilly, an experienced financial planner and chartered surveyor with over 30 years industry experience, has been developing advisor software since 1995.
                </h4>
                <p className="f-p">
                The first application “BrokerCRM” was released in 1997. Software companies cannot deliver solutions unless experienced industry professionals with in-depth domain knowledge are heavily involved in the scoping, specification and on-going development of the ultimate software solution.
                <br />
                <br />
                Combining the experience from the development of software products with industry knowledge, the software team at Money Advice released the new Money Advice+CRM platform in March 2014. The release included protection quotations and policy downloads from the product providers. The new software manages financial services and mortgage advisor requirements in the areas of advice, sales, compliance and management. In building the software we have had a strong focus on CPC 2012 compliance requirements. We have built powerful CRM functionality which includes document management, marketing suite, and pipeline management with fees and commissions management. The needs analysis tools, cash flow tools and client reports are strong features of the system as are the management reports.
                </p>
              </div>
              <img id="f-ChairpersonAvatar" src={Philip} alt="Chairperson"/>
              {/* <EmployeeProfileCard img={Philip} empName="Philip O'Reilly" title="CEO"/> */}
            </Container>

          <Employees />
      </div>

      <Footer />
    </>
  )
}