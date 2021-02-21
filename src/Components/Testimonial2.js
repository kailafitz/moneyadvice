import React, { useEffect, useState } from "react";
import JSONData from "../JSON_Data/TestimonialData.json";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import SectionTitle from "./SectionTitle";
// import 'swiper/swiper.scss';
// import 'swiper/swiper.scss';

// const swiper = new Swiper() {

// }

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
}));
  
export const Testimonial2 = () => {
    const classes = useStyles();
  
    const [data, setData] = useState([]);
    const [validData, setValidData] = useState(false);
  
    // const [value, setValue] = useState(0);
  
    const createFunction = () => {
        // console.log(JSONData)
        // setData(JSONData);
        let tempData = [];
        //   let tempSmData = [];
  
        let minNum = 0;
    
        for (let i = 0; i < JSONData.length; i++) {
            if (i % 2 == 0 && i != 0) {
            tempData.push(JSONData.slice(minNum, i));
            minNum = i;
            }
    
            if (i == JSONData.length - 2) {
            tempData.push(JSONData.slice(i, JSONData.length));
            }
        }
  
        // console.log(JSONData.slice(0, 2))
        // console.log(JSONData.slice(2, 4))
        // console.log(JSONData.slice(4, 6))
    
        // console.log(tempData);
        setData(tempData);
    };
  
    useEffect(() => {
      if (data && data.length > 0) {
        setValidData(true);
        console.log(data);
      } else {
        createFunction();
        console.log("creating data:");
      }
    }, [data]);
  
    // const onChange = (value) => {
    //   setValue(value);
    // }
  
    return (
        <div>
          <SectionTitle title="What our Customers Say" />
            {/* <div id="f-test"> */}
            {
                validData ? (
                    data.map((person) => {
                        return ( 
                            <>    
                        <div className="f-TestimonialCard">
                            <Avatar
                            alt={person[0].first_name + " " + person[0].sur_name}
                            src={person[0].profile_picture}
                            className={classes.large}
                            />
                            <h4 className="f-h4">
                            {/* <i class="fas fa-minus"></i>  */}
                            {person[0].first_name + " " + person[0].sur_name}
                            </h4>
                            {/* <h4 className="f-h4">{person.company_name}</h4> */}
                            <img alt={person[0].company_name} src={person[0].company_logo} />
                            <p className="f-p f-TextLeft">{person[0].testimonial}</p>
                        </div>
                        <div className="f-TestimonialCard">
                            <Avatar
                            alt={person[1].first_name + " " + person[1].sur_name}
                            src={person[1].profile_picture}
                            className={classes.large}
                            />
                            <h4 className="f-h4">
                            {/* <i class="fas fa-minus"></i>  */}
                            {person[1].first_name + " " + person[1].sur_name}
                            </h4>
                            {/* <h4 className="f-h4">{person.company_name}</h4> */}
                            <img alt={person[1].company_name} src={person[1].company_logo} />
                            <p className="f-p f-TextLeft">{person[1].testimonial}</p>
                        </div>
                        </>
                        );
                    })
                ) : ( <h2>No testimonials currently available</h2> )
            }
        </div>
      
    );
};