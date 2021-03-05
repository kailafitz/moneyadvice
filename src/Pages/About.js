import React from 'react'

// Package imports
import { motion } from "framer-motion"

// styled-components imports
import styled from 'styled-components';
import {colors} from '../colors';
import {fonts} from '../fonts';
import breakpoint from '../breakpoints';

// MaterialUI
import Container from '@material-ui/core/Container';

// Component imports
import Employees from '../Components/Employees';
import Footer from '../Components/Footer';
import ContactUsButton from '../Components/ContactUsButton';
import ProductOverview from '../Components/ProductOverview';
import SectionTitle from '../Components/SectionTitle';
import ScrollTopButton from '../Components/ScrollTopButton';

// Media imports
import Philip from '../Images/Philip.png';
import BackgroundImage from '../Images/AboutBg-Header.jpg';


// styled-components
const Styledh1 = styled.h1 `
  font-family: ${fonts.temp_font};
  color: ${colors.wh};
  letter-spacing: 2px;
  tex-align: left;
  padding-top: 1em;
  font-weight: 800;
  line-height: 1.2em;
  margin: 0 auto;

  a {
      text-decoration: none;
  }

  @media only screen and ${breakpoint.device.xs} {
    font-size: 2em;
  }

  @media only screen and ${breakpoint.device.sm} {
    font-size: 2.5em;
  }

  @media only screen and ${breakpoint.device.lg} {
    font-size: 3em;
  }
`
const Styledh2 = styled.h2 `
  font-family: ${fonts.temp_font};
  color: ${colors.wh};
  font-weight: 600;

  a {
      text-decoration: none;
  }

  @media only screen and ${breakpoint.device.xs} {
      font-size: 1.2em;
  }

  @media only screen and ${breakpoint.device.sm} {
      font-size: 1.3em;
  }

  @media only screen and ${breakpoint.device.lg} {
      font-size: 1.5em;
  }
`
const Styledh3 = styled.h3 `
  font-family: ${fonts.temp_font};
  font-size: 1.5em;
  font-weight: 300;
  color: ${colors.grey_dark};

  a {
    text-decoration: none;
  }

  @media only screen and ${breakpoint.device.xs} {
    font-size: 1.2em;
  }

  @media only screen and ${breakpoint.device.sm} {
    font-size: 1.3em;
  }

  @media only screen and ${breakpoint.device.lg} {
    font-size: 1.5em;
  }
`
const Styledp = styled.p `
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
        font-size: 1.2em;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 1.25em;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 1.3em;
    }
`
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
    }
  }

  @media only screen and ${breakpoint.device.sm} {
  }

  @media only screen and ${breakpoint.device.lg} {
  }
`
const StyledTeamDiv = styled.div `
  width: 100%;
  padding: 2em 0;
  margin-top: 4em;
  background-color: ${colors.grey_light};
  
  @media only screen and ${breakpoint.device.xs} {

    #f-CEOIntro {
      display: block;
      padding: 2em 1em;
  
      #f-CEOIntroText {
        border-radius: 4px;
      }
  
      #f-ChairpersonAvatar {
        width: 50%;
        display: block;
        margin: 0 auto;
        height: auto;
        border-radius: 85px;
      }
    }

  }

  @media only screen and ${breakpoint.device.sm} {

    #f-CEOIntro {
      display: flex;
      justify-content: stretch;
      align-items: flex-start;
      position: relative;
      padding: 2em 1em;
  
      #f-CEOIntroText {
        padding: 1em;
        border-radius: 4px;
      }
  
      #f-ChairpersonAvatar {
        width: 25%;
        height: auto;
        border-radius: 85px;
      }
    }
    
  }

  @media only screen and ${breakpoint.device.lg} {
    
  }
`

// framer motione
const myVariants = {
  visible: {
    backgroundColor: [ "#067f95b6", "rgba(115, 44, 78, 0.67)" ],
    transition: {
      yoyo: Infinity,
      duration: 2.5
    }
  }
}

export default function About() {
  return (
    <>
      <AboutHeader>
        <motion.div className="f-Overlay" variants={myVariants} animate="visible">
          <div id="f-HeaderWrapper">
            <Styledh1>With MoneyAdvice CRM, we care about your customers and the services that you provide.
            </Styledh1>
            <Styledh2>
            Our updated platform ensures a smooth user experience so that you can deliver high quality services to those who need it.</Styledh2>
            <div id="f-AboutButtonDiv">
              <ContactUsButton label="Get in touch"/>
            </div>
          </div>
        </motion.div>
      </AboutHeader>

      <ProductOverview />
      
      <StyledTeamDiv>
            <SectionTitle title="Meet our Team" />
            <Container maxWidth="md" id="f-CEOIntro">
              <div id="f-CEOIntroText">
                <Styledh3>Philip O'Reilly, an experienced financial planner and chartered surveyor with over 30 years industry experience, has been developing advisor software since 1995.
                </Styledh3>
                <Styledp>
                The first application <StyledSpan>BrokerCRM</StyledSpan> was released in 1997. Software companies cannot deliver solutions unless experienced industry professionals with in-depth domain knowledge are heavily involved in the scoping, specification and on-going development of the ultimate software solution.
                <br />
                <br />
                Combining the experience from the development of software products with industry knowledge, the software team at Money Advice released the new Money Advice CRM platform in March 2014. The release included protection quotations and policy downloads from the product providers. The new software manages financial services and mortgage advisor requirements in the areas of advice, sales, compliance and management. In building the software we have had a strong focus on CPC 2012 compliance requirements. We have built powerful CRM functionality which includes document management, marketing suite, and pipeline management with fees and commissions management. The needs analysis tools, cash flow tools and client reports are strong features of the system as are the management reports.
                </Styledp>
              </div>
              <img id="f-ChairpersonAvatar" src={Philip} alt="Chairperson"/>
            </Container>

          <Employees />
      </StyledTeamDiv>
      <ScrollTopButton />
      <Footer />
    </>
  )
}