import React, { useEffect, useState } from "react";

// Local Testimonial file
import TestimonialData from "../JSON_Data/TestimonialData.json";

// Package imports
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

// styled-components imports
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import fonts from '../fonts';
import colors from '../colors';

// MaterialUI
import Avatar from "@material-ui/core/Avatar";

// Component imports
import SectionTitle from "./SectionTitle";

// styled-components
const TestimonialBackground = styled.div `
  width: 100%;
  padding: 1em 0;

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-container {
    padding-bottom: 3em;
  }

  .swiper-wrapper {
      padding-inline-start: 0;
      display: flex;
  }

  .swiper-button-prev, .swiper-button-next {
      color: ${colors.logo_blue} !important;
  }

  .swiper-pagination-bullet {
      background-color: ${colors.logo_blue} !important;
  }

  @media only screen and ${breakpoint.device.xs} {
    .swiper-container {
      width: 100%;
      margin: 0 auto;
      color: transparent;
    }
  }

  @media only screen and ${breakpoint.device.sm} {
    .swiper-container {
      width: 60%;
      margin: 0 auto;
      color: transparent;
    }
  }

  @media only screen and ${breakpoint.device.lg} {
  }
`
const Styledh3 = styled.h3 `
  color: ${colors.logo_blue};
  font-size: 1.3em;
  font-family: ${fonts.temp_font};
  font-weight: 500;
  margin: .5em 0;
`
const Styledp = styled.p `
  font-family: ${fonts.roboto};
  color: ${colors.grey};

  a {
      ${fonts.roboto};
      text-decoration : none;

      &:hover {
        text-decoration: underline;
      }
  }

  @media only screen and ${breakpoint.device.xs} {
      font-size: 1em;
  }

  @media only screen and ${breakpoint.device.sm} {
      
  }

  @media only screen and ${breakpoint.device.lg} {
      font-size: .95em;
  }
`
const LimitedParagraph = styled(Styledp) `
  display: -webkit-box;
  overflow-y: scroll;
  -webkit-line-clamp: 8;
  // text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`
const TestimonialCard = styled.div `
  width: 60%;
  padding: 1em;
  margin: 0 auto;
  max-height: 400px;
  // height: auto;
  overflow: hidden;
  background-color: ${colors.wh};
  // background-color: ${colors.logo_peach};
  color: ${colors.grey_dark};
  border-radius: 7px;
  text-align: center;

  #f-QuoteIcon {
    display: block;
    margin: 0 auto;
    font-size: 1.5em;
    color: ${colors.grey_dark};
  }
`
const TestimonialCardHeaderDetails = styled.div `
  display: block;
  text-align: center;

  img {
    border-radius: 7px;
  }
`
const TestimonialCardHeader = styled.div `
  display: block;
  padding: .5em;
`
const StyledAvatar = styled(Avatar) `
  border-radius: 0%;
  filter: grayscale(100%);
  width: 70px;
  height: 70px;
  display: block;
  margin: 0 auto;

  img {
    border-radius: 7px;
  }
`
const StyledContainer = styled.div `
  padding: 2em 0;
`

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function Testimonial() {
  const [validData, setValidData] = useState(false);
  const [slides, setSlides] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const createFunction = () => {
    let slides = [];
    for (let i = 0; i < TestimonialData.length; i ++) {
      slides.push(
        <SwiperSlide key={`slide-${i}`} tag="li">
          <TestimonialCard>
            <i className="fas fa-quote-right" id="f-QuoteIcon"></i>              
            <LimitedParagraph>{TestimonialData[i].testimonial}</LimitedParagraph>
              <TestimonialCardHeader>
                <TestimonialCardHeaderDetails>
                  <StyledAvatar
                    alt={TestimonialData[i].first_name + " " + TestimonialData[i].sur_name}
                    src={TestimonialData[i].profile_picture}
                  />
                  <Styledh3>
                    {TestimonialData[i].first_name + " " + TestimonialData[i].sur_name}
                  </Styledh3>
                  <img alt={TestimonialData[i].company_name} src={TestimonialData[i].company_logo} />
                </TestimonialCardHeaderDetails>              
            </TestimonialCardHeader>
          </TestimonialCard>
        </SwiperSlide>
      );
    }
    setSlides(slides);
  };

  useEffect(() => {
    if (slides && slides.length > 0) {
      setValidData(true);
    } else {
      createFunction();
    }
  }, [slides]);

  return (
    <StyledContainer>
      <SectionTitle title="What our Customers Say"/>
      <TestimonialBackground>
        <Swiper
          id="main"
          thumbs={{ swiper: thumbsSwiper }}
          controller={{ control: controlledSwiper }}
          tag="section"
          wrapperTag="ul"
          navigation
          pagination
          spaceBetween={0}
          slidesPerView={1}
        >
        {
          validData ? slides : (
          <Styledp>No testimonials currently available</Styledp>
          )
        }
        </Swiper>
      </TestimonialBackground>
    </StyledContainer>
  );
};

export default Testimonial();