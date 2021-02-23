import React, { useEffect, useState } from 'react'
import FeatureData from '../JSON_Data/FeatureData.json'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box p={3}>
                <Typography>{children}</Typography>
            </Box>
            )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
  
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
    },
    tabs: {
      overflow: "visible",
      "max-width": "20%",
      "min-width": "20%",
      backgroundColor: "#067f95b6",
      color: "#ffffff",
      textTransform: "capitalize",
    },
    indicator: {
        backgroundColor: "#f3f3f3",
        height: "10px",
        top: "45px"
    },
    wrapper: {
        textAlign: "left",
        justifyContent: "left",
        flexDirection: "row",
        fontWeight: "500",
    },
    selected: {
        backgroundColor: "#f3f3f3",
        color: "#068095",
    },
    button: {
        backgroundColor: "#068095",
        color: "#ffffff",
        margin: ".8em auto",
        transition: ".3s ease-in background-color, .2s ease-in color",
        "&:hover": {
            backgroundColor: "#b8d30c",
            color: "#7d7d7d",
        },
    },
}));

export const ProductFeaturesComponentOne = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [data, setData] = useState([]);
    const [validData, setValidData] = useState(false);

    const createFunction = () => {
        setData(FeatureData);
    }

    useEffect(() => {
        if (data && data.length > 0) {
          setValidData(true);
        } else {
          createFunction();
        }
    }, [data]);

    return (
        <div id="f-FeaturesBody">
            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                    TabIndicatorProps={{ className: classes.indicator }}
                >
                    {
                        data.map((feature) => {
                            return (
                                <Tab
                                classes={{
                                    wrapper: classes.wrapper,
                                    selected: classes.selected,
                                }}
                                disableRipple
                                label={feature.featureTitle}
                                {...a11yProps(feature.id)}/>
                            );
                        })                    
                    }

                </Tabs>
                {
                    data.map((feature) => {
                        return (
                            <TabPanel value={value} index={feature.id} className="f-TabPanel">
                                {/* <Typography variant="h2">{feature.featureTitle}</Typography>
                                <Typography variant="h4">{feature.featureSubtitle}</Typography> */}
                                <h2 className="f-h2">{feature.featureTitle}</h2>
                                <h3 className="f-h3 f-BlueFont">{feature.featureSubtitle}</h3>
                                <p className="f-p">{feature.featureParagraph}</p>
                                <div className="f-TextCenter f-MarginAuto">
                                    <img id="f-FeatureMainImage" src={feature.featureMainImage} alt="Feature"/>
                                </div>
                                {
                                    feature.featureBulletPoints.map((bulletpoint) => {
                                        return (
                                            <p className="f-p"><i class="fas fa-check-square f-CheckListIcon"></i>  {bulletpoint}</p>
                                        );
                                    })
                                }
                                <div className="f-FeatureImagesContainer">
                                    {
                                        feature.featureImages.map((imageObject) => {
                                            return (
                                                <Card className="f-FeatureCard">
                                                    <CardActionArea>
                                                        <img id="f-FeatureImage" src={imageObject.featureImageURL}
                                                        title={imageObject.featureImageTitle} alt="Feature"
                                                        />
                                                        <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {imageObject.featureImageTitle}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {imageObject.featureImageDescription}
                                                        </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            );
                                        })
                                    }
                                </div>
                                {/* <div>
                                    <Button className={classes.button} href={feature.featureButtonHref}>{feature.featureButtonLabel}</Button>
                                </div> */}
                            </TabPanel>
                        );
                    })
                
                }
            </div>
        </div>
    )
}