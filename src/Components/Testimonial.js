import React, { useEffect, useState } from "react";
import JSONData from "../JSON_Data/TestimonialData.json";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import SectionTitle from "./SectionTitle";
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import CloseIcon from '@material-ui/icons/Close';
import 'swiper/swiper-bundle.css';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import {fonts} from '../fonts';
import {colors} from '../colors';

const TestimonialBackground = styled.div`
  width:100%;
  background-color: #E8DCE2;
  padding: 3em 0;

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-wrapper {
      padding-inline-start: 0;
      display:flex;
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

const LimitedParagraph = styled.p`
  font-size: 1em;
  font-family: ${fonts.roboto};
  color: ${colors.white};
  display: -webkit-box;
  overflow : hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  font-weight: 100;

  a {
      text-decoration: none;
      color: ${colors.wh};
  }
`

const Title = styled.h3`
  font-size: 1.5em;
  font-family: ${fonts.temp_font};
  font-weight: 600;
`

const Para = styled.p`
  font-size: 1em;
  font-family: ${fonts.roboto};
  color: ${colors.wh};
  font-weight: 100;
  
  a {
      text-decoration: none;
      color: ${colors.wh};
  }
`

const CloseIconStyled = styled(CloseIcon)`
  float:right;
  padding-right:10px;
  cursor: pointer;
`
const TestimonialCard = styled.div`
  width: 60%;      
  padding: 1.5em;
  margin: 0 auto;
  max-height: 400px;
  overflow: hidden;
  background-color: ${colors.logo_purple};
  color: ${colors.wh};
  border-radius: 14px;
`

const TestimonialCardHeaderDetails = styled.div`
  display: block;
  text-align: left;
`

const TestimonialCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const ButtonStyled = styled.button`
    box-shadow: none;
    background-color: ${colors.logo_blue};
    color: ${colors.wh};
    transition: ".3s ease-in background-color";
    outline: none;
    padding: 10px;
    border-radius: 4px;
    border:none;
    cursor: pointer;
    font-family: ${fonts.roboto};
    :hover {
        background-color: ${colors.logo_green};
    }

    @media only screen and ${breakpoint.device.xs} {
      width: 100%;
      margin: 0 auto;
    }

    @media only screen and ${breakpoint.device.sm} {
      width: 30%;
      margin: 0;
    }

    @media only screen and ${breakpoint.device.lg} {
    }

    
`
const ModalStyled = styled(Modal)`
    background-color: ${colors.logo_purple};
    color: ${colors.wh};
    outline: none;
    border: none;
    height: fit-content;
    padding: 1em;
    border-radius: 14px;

    @media only screen and ${breakpoint.device.xs} {
      width: 90%;
      margin: 1em auto;
    }

    @media only screen and ${breakpoint.device.sm} {
      width: 70%;
      margin: 2em auto;
    }

    @media only screen and ${breakpoint.device.lg} {
    }
`
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: "80px",
    height: "80px",
    // width: theme.spacing(7),
    // height: theme.spacing(7),
  },
  button: {
    backgroundColor: "#068095",
    color: "#ffffff",
    transition: ".3s ease-in background-color",
    "&:hover": {
        backgroundColor: "#b8d30c",
    },
  }
}));

export const Testimonial = () => {
  const classes = useStyles();
  const [validData, setValidData] = useState(false);
  const [slides, setSlides] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  const handleOpen = (event) => {
    let val = -1
    try{
      val = event.target.attributes['data-id'].value
    }catch (err){

    }
    if (val > -1){
      setModalData([
          <>
            <CloseIconStyled onClick={handleClose} />
            
              <Avatar
                alt={JSONData[val].first_name + " " + JSONData[val].sur_name}
                src={JSONData[val].profile_picture}
                className={classes.large}
              />
              <TestimonialCardHeaderDetails>
                <Title>
                  {JSONData[val].first_name + " " + JSONData[val].sur_name}
                </Title>
                <img alt={JSONData[val].company_name} src={JSONData[val].company_logo} />
              </TestimonialCardHeaderDetails>
              <Para>{JSONData[val].testimonial}</Para>       
          </>      
      ])
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createFunction = () => {
    let slides = [];
    for (let i = 0; i < JSONData.length; i ++) {
      slides.push(
        <SwiperSlide key={`slide-${i}`} tag="li">
          <TestimonialCard>
              <TestimonialCardHeader>
                <Avatar
                  alt={JSONData[i].first_name + " " + JSONData[i].sur_name}
                  src={JSONData[i].profile_picture}
                  className={classes.large}
                />
                <TestimonialCardHeaderDetails>
                  <Title className="f-h3">
                    {JSONData[i].first_name + " " + JSONData[i].sur_name}
                  </Title>
                  <img alt={JSONData[i].company_name} src={JSONData[i].company_logo} />
                </TestimonialCardHeaderDetails>              
              </TestimonialCardHeader>            
              <LimitedParagraph>{JSONData[i].testimonial}</LimitedParagraph>
              <ButtonStyled type="button" onClick={handleOpen} data-id={i}>
                View More
              </ButtonStyled>
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
    <>
      <SectionTitle title="What our Customers Say" style={{'color': '#732C4E'}}/>
      <ModalStyled
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
            {modalData[0]}
      </ModalStyled>
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
          <h2>No testimonials currently available</h2>
          )
        }
        </Swiper>
      </TestimonialBackground>
    </>
  );
};