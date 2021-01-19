import React, { useEffect, useState } from "react";
import JSONData from "../TestData/TestimonialData.json";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

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
    margin: "0 auto",
  },
}));

export const Testimonial = () => {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [validData, setValidData] = useState(false);

  const createFunction = () => {
    // console.log(JSONData);
    setData(JSONData);
    // console.log(data)
    let tempData = [];
    let tempSmData = [];

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

    console.log(tempData);
    setData(tempData);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setValidData(true);
      console.log("Hello");
    } else {
      createFunction();
    }
  }, [data]);

  return (
    <>
      <h2 className="f-h2">What Our Customers Say</h2>
      <div id="f-TestimonialContainer">
        {console.log(validData)}
        {validData ? (
          data.map((person) => {
            return (
              <div className="f-TestimonialWrapperDiv">
                <div className="f-TestimonialCard">
                  <Avatar
                    alt={person[0].first_name + " " + person[0].sur_name}
                    src={person[0].profile_picture}
                    className={classes.large}
                  />
                  <h3 className="f-h3">
                    {person[0].first_name + " " + person[0].sur_name}
                  </h3>
                  {/* <h4 className="f-h4">{person.company_name}</h4> */}
                  <img alt={person[0].company_name} src={person[0].company_logo} />
                  <p className="f-p">{person[0].testimonial}</p>
                </div>
                <div className="f-TestimonialCard">
                  <Avatar
                    alt={person[1].first_name + " " + person[1].sur_name}
                    src={person[1].profile_picture}
                    className={classes.large}
                  />
                  <h3 className="f-h3">
                    {person[1].first_name + " " + person[1].sur_name}
                  </h3>
                  {/* <h4 className="f-h4">{person.company_name}</h4> */}
                  <img alt={person[1].company_name} src={person[1].company_logo} />
                  <p className="f-p">{person[1].testimonial}</p>
                </div>
              </div>
            );
          })
        ) : (
          <h2>Data not found</h2>
        )}
      </div>
    </>
  );
};
