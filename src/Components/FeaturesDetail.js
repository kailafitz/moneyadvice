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

export const FeaturesDetail = () => {

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
          setValidData(true);
        } else {
          createFunction();
        }
    }, [data]);

  
    return (
        <>
      {
          validData ?
          <>
          <div>
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
          
              <div className="f-TabPanel">
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
              </div>
  
        </div>
        </>: null
      }
      </>
    );
}
