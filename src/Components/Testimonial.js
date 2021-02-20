import React, { useEffect, useState } from "react";
import JSONData from "../JSON_Data/TestimonialData.json";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import SectionTitle from "./SectionTitle";
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

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
  const [open, setOpen] = React.useState(false);

  const handleOpen = (event) => {
    console.log(event.target.attributes['slide-id'].value)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const body = (
  //   <div className={classes.paper}>
  //     <h2 id="simple-modal-title">Text in a modal</h2>
  //     <p id="simple-modal-description">
  //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //     </p>
  //   </div>
  // );

  const createFunction = () => {
    let slides = [];
    for (let i = 0; i < JSONData.length; i ++) {
      console.log(JSONData[i]);
      slides.push(
        <SwiperSlide key={`slide-${i}`} tag="li">
          <div className="f-TestimonialCard">
            <div id="f-TestimonialCardHeader">
              <Avatar
                alt={JSONData[i].first_name + " " + JSONData[i].sur_name}
                src={JSONData[i].profile_picture}
                className={classes.large}
              />
              <div id="f-TestimonialHeaderDetails">
                <h3 className="f-h3">
                  {JSONData[i].first_name + " " + JSONData[i].sur_name}
                </h3>
                <img alt={JSONData[i].company_name} src={JSONData[i].company_logo} />
              </div>              
            </div>            
            <p className="f-p f-TextLeft">{JSONData[i].testimonial}</p>
            <Button type="button" className={classes.button} onClick={handleOpen} slide-id={i}>
              View More
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
                <div className="f-TestimonialCard">
                  <Avatar
                    alt={JSONData[i].first_name + " " + JSONData[i].sur_name}
                    src={JSONData[i].profile_picture}
                    className={classes.large}
                  />
                  <h4 className="f-h4">
                    {JSONData[i].first_name + " " + JSONData[i].sur_name}
                  </h4>
                  <img alt={JSONData[i].company_name} src={JSONData[i].company_logo} />
                  <p className="f-p f-TextLeft" style={{'-webkit-line-clamp': 'none'}}>{JSONData[i].testimonial}</p>
                </div>
            </Modal>
        </div>
        </SwiperSlide>
      );
    }

    console.log(slides);
    setSlides(slides);
  };

  useEffect(() => {
    if (slides && slides.length > 0) {
      setValidData(true);
      console.log("Hello");
    } else {
      createFunction();
    }
  }, [slides]);

  return (
    <>
      <SectionTitle title="What our Customers Say" style={{'color': '#732C4E'}}/>
      <div className="f-testimonialBackground">
        <Swiper
          id="main"
          thumbs={{ swiper: thumbsSwiper }}
          controller={{ control: controlledSwiper }}
          tag="section"
          wrapperTag="ul"
          navigation
          pagination
          spaceBetween={0}
          slidesPerView={2}
          onInit={(swiper) => console.log('Swiper initialized!', swiper)}
          onSlideChange={(swiper) => {
            console.log('Slide index changed to: ', swiper.activeIndex);
          }}
          onReachEnd={() => console.log('Swiper end reached')}
        >
        {
              validData ? slides : (
              <h2>No testimonials currently available</h2>
              )
            }
      </Swiper>
      </div>
    </>
  );
};