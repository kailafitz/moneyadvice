import React from 'react'
import { Employees } from '../Components/Employees'
import Footer from '../Components/Footer'
import ContactUsButton from '../Components/ContactUsButton';
import ProductOverview from '../Components/ProductOverview';
import SectionTitle from '../Components/SectionTitle';
import Philip from '../Images/About-Imgs/Philip_OReilly.png'
import Container from '@material-ui/core/Container';
import BackgroundImage from '../Images/about-bg.jpg'
import styled from 'styled-components';
import {colors} from '../colors';
import {fonts} from '../fonts';
import breakpoint from '../breakpoints';

const AboutHeader = styled.div `
  background-image: url(${BackgroundImage});
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
        font-family: ${fonts.temp_font};
        font-size: 3em;
        color: ${colors.wh};
        letter-spacing: 2px;
        tex-align: left;
        padding-top: 1em;
        font-weight: 800;
        line-height: 1.2em;
        margin: 0 auto;
      }

      h3 {
        font-family: ${fonts.temp_font};
        font-size: 1.5em;
        font-weight: 600;
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
    .f-Overlay #f-HeaderWrapper {
      width: 80%;

      h2 {
        font-size: 2em;
      }
    }
  }
`

const StyledTeamDiv = styled.div `
  width: 100%;
  padding: 2em 0;
  margin-top: 4em;
  background-color: ${colors.grey_light};

  #f-CEOIntro {
    display: flex;
    justify-content: stretch;
    align-items: flex-start;
    position: relative;
    padding: 2em 1em;

    #f-CEOIntroText {
      padding: 1em;
      border-radius: 4px;
      color: ${colors.grey_light};

      h4 {
        font-size: 1.2em;
        font-family: ${fonts.temp_fonts};
        font-weight: 300;
      }

      p {
        font-size: 1em;
        font-family: ${fonts.roboto};
        color: ${colors.bl};
      }
    }

    #f-ChairpersonAvatar {
      width: 30%;
      height: auto;
      border-radius: 85px;
    }
  }

  @media only screen and ${breakpoint.device.xs} {

  }

  @media only screen and ${breakpoint.device.xs} {
    
  }

  @media only screen and ${breakpoint.device.xs} {
    
  }
`

export default function About() {
  return (
    <>
      <AboutHeader>
        <div className="f-Overlay">
          <div id="f-HeaderWrapper">
            <h2>With MoneyAdvice CRM, we care about your customers and the services that you offer.
            </h2>
            <h3>
            Our updated platform ensures a smooth user experience so that you can deliver high quality services to those who need it.</h3>
            <div id="f-AboutButtonDiv">
              <ContactUsButton label="Get in touch"/>
            </div>
          </div>
        </div>
      </AboutHeader>

      {/* <Timeline /> */}

      <ProductOverview />
      
      <StyledTeamDiv>
            <SectionTitle title="Meet our Team" />
            <Container id="f-CEOIntro">
              <div id="f-CEOIntroText">
                <h4>Philip O'Reilly, an experienced financial planner and chartered surveyor with over 30 years industry experience, has been developing advisor software since 1995.
                </h4>
                <p>
                The first application “BrokerCRM” was released in 1997. Software companies cannot deliver solutions unless experienced industry professionals with in-depth domain knowledge are heavily involved in the scoping, specification and on-going development of the ultimate software solution.
                <br />
                <br />
                Combining the experience from the development of software products with industry knowledge, the software team at Money Advice released the new Money Advice+CRM platform in March 2014. The release included protection quotations and policy downloads from the product providers. The new software manages financial services and mortgage advisor requirements in the areas of advice, sales, compliance and management. In building the software we have had a strong focus on CPC 2012 compliance requirements. We have built powerful CRM functionality which includes document management, marketing suite, and pipeline management with fees and commissions management. The needs analysis tools, cash flow tools and client reports are strong features of the system as are the management reports.
                </p>
              </div>
              <img id="f-ChairpersonAvatar" src={Philip} alt="Chairperson"/>
            </Container>

          <Employees />
      </StyledTeamDiv>

      <Footer />
    </>
  )
}