import React, { useEffect, useState } from 'react'
import FeatureData from '../JSON_Data/FeatureData.json'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import {colors} from '../colors';
import {fonts} from '../fonts';


const DownloadLink = styled.button`
    background-color: ${colors.logo_blue};
    color: ${colors.wh};
    transition: .3s ease-in background-color, .2s ease-in color;
    padding: 10px;
    border: none;
    cursor: pointer;

    :hover {
        background-color: ${colors.logo_green};
        color: white;
    }

    @media only screen and ${breakpoint.device.xs} {
        width:100%;
    }

    @media only screen and ${breakpoint.device.sm} {
        width: 20%;
    }

    @media only screen and ${breakpoint.device.lg} {
    }
`

const FeaturesPage = styled.div `
    width: 100%;
`

const FeaturesPageInfo =styled.div` 
    margin: 0.8em;
    z-index: 999;
    width: 100%;
    
    .f-TabPanel {
        padding: 3em;
    }

    #f-FeatureMainImage {
        width: 100%;
        margin: 0 auto;
        padding: 0;
    }

    @media only screen and ${breakpoint.device.xs} {
        margin:0;

        .f-FeatureImagesContainer {
            width: 100%;
            align-items: normal;

            .MuiCard-root {
                width: 100%;
            }
        }

        .f-TabPanel{
            padding: 2em;
        }
    }

    @media only screen and ${breakpoint.device.sm} {

        #f-FeatureMainImage {
            width: 40%;
        }

        .f-FeatureImagesContainer {
            align-items: normal;
            justify-content: space-between;
            .MuiCard-root{
                width: 100%;
            }
        }
    }

    @media only screen and ${breakpoint.device.lg} {

        #f-FeatureMainImage {
            width: 40%;
        }

        .f-FeatureImagesContainer {
            align-items: normal;
            justify-content: space-between;
            .MuiCard-root {
                width: 40%;            
            }
        }
    }
`
const FeaturesPageMenu = styled.div`

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
        color: white;
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
        setData(FeatureData);
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
                  {/* <Typography variant="h2">{feature.featureTitle}</Typography>
                  <Typography variant="h4">{feature.featureSubtitle}</Typography> */}
                  <h2 className="f-h2">{feature.featureTitle}</h2>
                  <h3 className="f-h3 f-BlueFont">{feature.featureSubtitle}</h3>
                  <p className="f-p">{feature.featureParagraph}</p>
                  <div class="f-TextCenter">
                    <img id="f-FeatureMainImage" src={feature.featureMainImage} alt="Feature"/>
                  </div>
                  {
                      feature.featureBulletPoints.map((bulletpoint) => {
                          return (
                              <p className="f-p"><i class="fas fa-check-square f-CheckListIcon"></i>  {bulletpoint}</p>
                          );
                      })
                  }
                  {
                      feature.featureButtonHref ?
                      <DownloadLink download href={feature.featureButtonHref}>{feature.featureButtonLabel}</DownloadLink>:
                      null
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
              </div>
            </FeaturesPageInfo>
        </>: null
      }
      </FeaturesPage>
    );
}
