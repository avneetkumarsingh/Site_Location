import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import  LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab';
import useStyles from './styles';
import { ControlPointDuplicateSharp } from '@material-ui/icons';

 
const Map =( {setCoordinates, setBounds, coordinates, places,setChildClicked ,weatherData })=> {
const classes = useStyles();
const isDesktop = useMediaQuery('(min-width:600px)');
 
    return (
        // AIzaSyBOwCGYnlesQ1wc7nmSgNBrIj5on343rXw
        <div className={classes.mapContainer}>
        <GoogleMapReact 
             bootstrapURLKeys={{ key: 'AIzaSyBOwCGYnlesQ1wc7nmSgNBrIj5on343rXw' }}
             defaultCenter={coordinates}
             center={coordinates}
             defaultZoom={14}
             margin={[50, 50, 50 , 50]} 
             options={''}
             onChange={(e) => {
            console.log(e);
                   setCoordinates({lat:e.center.lat, lng:e.center.lng});
                   setBounds({ ne:e.marginBounds.ne , sw: e.marginBounds.sw});
             }}
             onChildClick={(child)=> setChildClicked(child)}
             > 
            {places?.map((place,i)=>(
            <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)} 
            key={i}
            >
            
            {
                !isDesktop ? (
                    <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                ) : (
                    <Paper elevation={3} className={classes.paper} >
                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                        {place.name}
                         </Typography>
                         <img
                         className={classes.pointer}
                         src={place.photo ? place.photo.images.large.url: 'https://www.foodserviceandgospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg' }
                         alt={place.name}
                         />
                         <Rating size="small" value={Number(place.rating)} readOnly />
                    </Paper>
                )
            }

            </div>
            ))}

           {weatherData?.list?.map((data, i)=>(
               <div key={i} lat={data.coord.lat} lng={data.coord.lng}> 
            <img height ={100} src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
               </div>
            ))}
            {weatherData?.list?.map((data, i) => (
                <div key={i} lat={data.coord.lat} lng={data.coord.lon}> 
            <img  height={100} src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>
                </div>
            ))}
        </GoogleMapReact>
        </div>
    );
}
export default Map;