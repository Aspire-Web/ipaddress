import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapData from './map'
import { DateTime } from "luxon";

export default function Detail(props) {
    console.log(props)
      const [isLoading, setLoading] = useState(true);
    //const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_wg8arYLPhgZhqZAK4yP3jcplQWX7T&ipAddress=${props.ip}`
    const url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_wg8arYLPhgZhqZAK4yP3jcplQWX7T"
    const [restData, setRestData] = useState()
    console.log(url)

      
    useEffect(() => {
            axios.get("https://geo.ipify.org/api/v2/country,city?apiKey=at_wg8arYLPhgZhqZAK4yP3jcplQWX7T").then(response => {
            setRestData(response.data);
            setLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className="detail">Loading...</div>;
    }

    let date = DateTime.now().setLocale().toLocaleString(DateTime.DATE_FULL)
   
    
   // let utcDatetime = DateTime.utc().toLocal();
    

        let dt = DateTime.now();
        let dt1= dt.toLocaleString(DateTime.DATETIME_MED)
        let newTime = dt1.slice(13)
    
    console.log("Current Date:", date);
    console.log("Time: ", newTime)
   // console.log("UTC", utcDatetime)
    console.log("dt1",dt1)
    
    return (
         < div className="detail">
            <table>
                    <tr>
                      <td>ISP :</td>
                    <td>{restData.isp}</td>
                    </tr>
                    <tr>
                      <td>Country :</td>
                    <td>{restData.location.country}</td>
                    </tr>
                    <tr>
                      <td>Region :</td>
                      <td>{restData.location.region}</td>
                    </tr>
            </table>
            <MapData lat={restData.location.lat} lng={restData.location.lng} flag={restData.location.country} />
            
            <div className="time">
                <label>Today is : </label><span> {date} & </span>
                <label>Current Time is :</label><span> { newTime}</span><br/>
                <label>UTC Time :</label><span>  UTC here </span>
               
                
            </div>
        </div>
    )
}

/*
 <tr>
                      <td>ISP:</td>
                    <td>{restData.isp}</td>
                    </tr>
                    <tr>
                      <td>Country:</td>
                      <td>{restData.location.country}</td>
                    </tr>
                    <tr>
                      <td>Region:</td>
                      <td>{restData.location.region}</td>
                    </tr>*/