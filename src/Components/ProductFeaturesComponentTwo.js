import React, { useEffect, useState } from 'react'

// Local JSON file
import ProductFeatureData from '../JSON_Data/ProductFeatureData.json'

// styled-components imports
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import {colors} from '../colors';
import {fonts} from '../fonts';

// MaterialUI
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import KeyboardArrowIcon from '@material-ui/icons/KeyboardArrowDown';

// styled-components
const Styledh2 = styled.h2 `
    font-family: ${fonts.temp_font};
    font-weight: 800;
    color: ${colors.logo_purple};
    letter-spacing: -.035em;
    margin: .5em 0;

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
        font-size: 4vw;
    }
`
const Styledh3 = styled.h3 `
    font-family: ${fonts.temp_font};
    color: ${colors.grey_dark};
    font-weight: 500;

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
    font-family: ${fonts.temp_font};
    color: ${colors.bl};

    a {
        text-decoration : none;
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
const StyledButton = styled(Button) `
    font-family: ${fonts.roboto};
    text-transform: uppercase;
    background-color: ${colors.logo_blue};
    color: ${colors.wh};
    margin: .8em;
    transition: .3s ease-in background-color, .3s ease-in color;

    &:hover {
        background-color: ${colors.logo_green};
        color: ${colors.grey_dark};
    }

    @media only screen and ${breakpoint.device.xs} {
        width: 100%;
    }

    @media only screen and ${breakpoint.device.sm} {
        width: auto;
    }
`
const FeaturesPage = styled.div `
    width: 100%;

    .f-CheckListIcon {
        color: ${colors.logo_green};
    }
`
const FeaturesPageInfo =styled.div ` 
    margin: 0.8em;
    z-index: 999;
    width: 100%;
    
    .f-TabPanel {
        #f-CoreInformation {        
            #f-InnerContainer {
                #f-FeatureMainImage {
                    border-radius: 4px;
                    -webkit-box-shadow: 0 5px 18px -2px #bebebe;
                    box-shadow: 0 5px 18px -2px #bebebe;
                }
            }
        }

        .f-FeatureImagesContainer {
            padding: 1em;
            background-color: ${colors.grey_light};
    
            .f-FeatureCard #f-FeatureImage {
                width: 100%;
            }
        }
    }    

    @media only screen and ${breakpoint.device.xs} {
        margin: 0;

        .f-TabPanel {

            #f-CoreInformation {
                padding: 1em;

                #f-InnerContainer {
                    padding: 1em;
                    display: block;
        
                    #f-FeatureMainImage {
                        width: 80%;
                        display: block;
                        margin: 0 auto;
                    }
        
                    #f-InnerInformation {
                        padding: 2em 0;
                        display: block;
                    }
                }
            }

            .f-FeatureImagesContainer {
                margin-top: 2em;
                padding: 2em 0;
    
                .MuiCard-root {
                    width: 80%;
                    margin: 1.5em auto;
                }
            }
        }        
    }

    @media only screen and ${breakpoint.device.sm} {

        .f-TabPanel {

            #f-CoreInformation {
                padding: 1em 3em;

                #f-InnerContainer {
                    display: block;
        
                    #f-FeatureMainImage {
                        width: 70%;
                    }
                }
            }

            .f-FeatureImagesContainer {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex-wrap: wrap;
    
                .MuiCard-root {
                    width: 40%;
                    padding: 1em;
                    margin: 1em;          
                }
            }
        }        
    }

    @media only screen and ${breakpoint.device.lg} {

        .f-TabPanel {

            #f-CoreInformation {
                padding: 1em 3em;
                
                #f-InnerContainer {
                    display: flex;
                    align-items: flex-start;
        
                    #f-FeatureMainImage {
                        width: 40%;
                        margin-right: 2em;
                    }
        
                    #f-InnerInformation {
                        width: 60%;
                        padding: 0;
                    }
                }
            }
        }
    }
`
const FeaturesPageMenu = styled.div `
    position: sticky;
    top: 0;
    border-radius: 4px;
    text-align: center;
    z-index: 1000;

    #simple-menu .MuiPopover-paper {
        top: 0;
        left: 0;
        width: 100%;
        background-color: red;
        color: white;
    }

    button { 
        width: 30%;
        background-color: ${colors.logo_purple}!important;
        color: ${colors.wh};
        padding: 0.5em 0 0.5em 0.5em;
        position: sticky;
        top: 0.8em;
    }

    @media only screen and ${breakpoint.device.xs}{
        margin: 0 auto;

        button { 
            width: 90%;
        }
    }   

    @media only screen and ${breakpoint.device.sm}{
        margin: 0.8em;
        button { 
            width: 40%;
        }
    }

    @media only screen and ${breakpoint.device.lg}{
        margin: 0.8em;
    }
`

export const ProductFeaturesComponentTwo = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [data, setData] = useState([]);
    const [validData, setValidData] = useState(false);
    const [feature, setFeature] = useState({});

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (event) => {
        try{
            let value = event.target.attributes["data-id"].value;
            if (value) {
                setFeature(data.filter(feature => feature.id == value)[0]);
            }
        }catch (E){
            
        }finally{
            setAnchorEl(null);
        }
    };

    const createFunction = () => {
        setData(ProductFeatureData);
    }

    useEffect(() => {
        if (data && data.length > 0) {
            setFeature(data[0])
          setValidData(true);
        } else {
          createFunction();
        }
    }, [data]);

  
    return (
        <FeaturesPage>
        {
          validData ?
          <>
            <FeaturesPageMenu>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    {feature.featureTitle}
                    <KeyboardArrowIcon />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {
                        data.map(feature => {
                            return <MenuItem onClick={handleClose} data-id={feature.id}>{feature.featureTitle}</MenuItem>
                        })
                    }
                </Menu>
            </FeaturesPageMenu>
            <FeaturesPageInfo>
                <div className="f-TabPanel">
                    <div id="f-CoreInformation">
                        <Styledh2>{feature.featureTitle}</Styledh2>
                        {
                            feature.featureSubtitle ?
                            <Styledh3>{feature.featureSubtitle}</Styledh3> : null

                        }
                        <div id="f-InnerContainer">
                            {
                                feature.featureMainImage ?
                                <div id="f-FeatureMainImage">
                                    <img src={feature.featureMainImage} alt="Feature"/>
                                </div> : null
                            }
                            <div id="f-InnerInformation">
                                {
                                    feature.featureBulletPoints ?

                                        <ul id="f-BulletpointDiv" className="fa-ul">
                                            {
                                                feature.featureBulletPoints.map((bulletpoint) => {
                                                    return (
                                                        <li><span className="fa-li"><i className="fas fa-check-square f-CheckListIcon"></i></span><Styledp>  {bulletpoint}</Styledp></li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    : null
                                }
                                {
                                    feature.featureButtonHref ?
                                    <StyledButton download={feature.featureDownloadFile} href={feature.featureButtonHref} target="_blank">{feature.featureButtonLabel}</StyledButton> :
                                    null
                                }
                                {
                                    feature.featureParagraph ?
                                    <Styledp>{feature.featureParagraph}</Styledp> : null
                                }
                            </div>
                        </div>
                    </div>
                    {
                        feature.featureImages ?

                        <div className="f-FeatureImagesContainer">
                            {
                                feature.featureImages.map((imageObject) => {
                                    return (
                                        <Card className="f-FeatureCard">
                                            <img id="f-FeatureImage" src={imageObject.featureImageURL}
                                            title={imageObject.featureImageTitle} alt="Feature"
                                            />
                                            <CardContent>
                                            {
                                                imageObject.featureImageTitle ?
                                                <Styledh3>{imageObject.featureImageTitle}</Styledh3> : null

                                            }
                                            {
                                                imageObject.featureImageDescription ?
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {imageObject.featureImageDescription}
                                                </Typography> : null

                                            }
                                            {
                                                imageObject.featureImageBulletPoints ?

                                                <ul id="f-BulletpointDiv" className="fa-ul">
                                                    {
                                                        imageObject.featureImageBulletPoints.map((bulletpoint) => {
                                                            return (
                                                                <li><span className="fa-li"><i className="fas fa-check-square f-CheckListIcon"></i></span><Styledp>  {bulletpoint}</Styledp></li>
                                                            );
                                                        })
                                                    }
                                                </ul> : null
                                            }
                                            </CardContent>
                                        </Card>
                                    );
                                })
                            }
                        </div> : null
                    }
                </div>
            </FeaturesPageInfo>
        </> : null
      }
      </FeaturesPage>
    );
}
