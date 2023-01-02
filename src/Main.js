import React from "react";
import { BsSun } from "react-icons/bs";
import { WiHumidity,WiHail,WiStrongWind,WiSunset } from "react-icons/wi";
import {DateTime} from 'luxon'


export default function Main({allInfo}){
    const {  temp,
        humidity,
        pressure,
        wind,
        weathermood,
        icon,
        name,
        country,
        localtime,
        localtime_epoch,
         sunset} = allInfo

         const [dateTime,setDateTime] = React.useState(localtime)
         React.useEffect(()=>{
            setDateTime(localtime)
         },[localtime])
        
    return(
        <div className="row">
                <div className="col-md-6">
                    <div className="main-wrapper">
                        <div className="icon">
                            <div className="main-icons">
                            
                                <img src={`https:${icon}`} className="main-icon"></img>
                            </div>
                        </div>
                        <div className="weatherinfo">
                            <div className="upper-info">
                                <div className="left-info">
                                    <div className="temperature">
                                        <span>{temp}{'\u00b0'}C</span>
                                    </div>
                                    <div className="place-info">
                                        <p className="p1">{weathermood} <br /></p>
                                        <p>{name}, {country}</p>
                                    </div>
                                </div>
                                <div className="right-info">
                                    <div className="date-time">
                                       {/* <p>{new Date().toLocaleDateString()},<br />{new Date().toLocaleTimeString()}</p> */}
                                       <p>{dateTime}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-info">
                                <div className="sunset all-flex">
                                    <WiSunset className="lower-info-icons" />
                                    <div>
                                        <p>Sunset <br /> {sunset}</p>
                                    </div>
                                </div>
                                <div className="humidity all-flex">
                                    <WiHumidity className="lower-info-icons" />
                                    <div>
                                        <p>{humidity}% <br /> Humidity</p>
                                    </div>
                                </div>

                                <div className="pressure all-flex">
                                    <WiHail className="lower-info-icons" />
                                    <div>
                                        <p>Pressure <br /> {pressure} MM</p>
                                    </div>
                                </div>

                                <div className="wind all-flex">
                                    <WiStrongWind className="lower-info-icons" />
                                    <div>
                                        <p>Wind <br /> {wind}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}