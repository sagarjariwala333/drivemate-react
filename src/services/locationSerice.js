import axios, * as others from 'axios';
import { LOCATIONIQ_ENDPOINT, LOCATIONIQ_KEY, LOCATIONIQ_URL } from '../assets/environment';


export function reverseGeoCoding(url)
{
    try {
        const response = axios.get(url);
        return response;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
}

//https://api.distancematrix.ai/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=<your_access_token>
export function geocoding(address)
{
  address = address.split('.').map(item => item.trim()).join(', ');
  address = address.replace(/\s+/g, '+');
  const url = LOCATIONIQ_ENDPOINT + "/maps/api/geocode/json?address=" + address + "&key=" + LOCATIONIQ_KEY;
  //console.log("URL service",url);
  try
  {
    const response = axios.get(url);
    return response;
  }
  catch(error)
  {
    throw error
  }
}

//https://api.distancematrix.ai/maps/api/distancematrix/json?origins=51.4822656,-0.1933769&destinations=51.4994794,-0.1269979&key=<your_access_token>
export function getDistance(data)
{
  const {src,des} = data;
  //console.log("service",data);
  //lat lng
  const url = LOCATIONIQ_ENDPOINT + "/maps/api/distancematrix/json?" + 
            "origins=" + src.lat + "," + src.lng +
            "&destinations=" + des.lat + "," + des.lng +
            "&key=" + LOCATIONIQ_KEY
  //console.log("Service",url);

  try
  {
    const response = axios.get(url);
    return response;
  }
  catch(error)
  {
    throw error
  }
}
