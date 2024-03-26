import axios from 'axios';



  

export const getPlacesData = async (type,sw, ne) => {
    try{ 
        const { data: { data} } = await axios.get( `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
        ,{      
   
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              // bl_latitude: '11.847676',
              // tr_latitude: '12.838442',
              // bl_longitude: '109.095887',
              // tr_longitude: '109.149359',
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': '5a69d5d324mshf71bc4daf8418ccp15709bjsnb36dcc0dd522'
            }
          });
        return data;
    }
    catch (error) {
          console.log(error);
    }
}

export const getWeatherData= async (lat, lng) =>{

  try{

    const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
       params: { lon: lng, lat: lat, },
    headers: {
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      'X-RapidAPI-Key': '5a69d5d324mshf71bc4daf8418ccp15709bjsnb36dcc0dd522'
    }});

    return data;
  }
  catch (error)
  {
    console.log(error) 
  }
}