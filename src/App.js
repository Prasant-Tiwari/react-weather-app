import React from "react";
import "./style.css"
// import { BsSun,BsSunFill} from "react-icons/fa";

import Main from "./Main";
import Alert from 'react-bootstrap/Alert'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function App(){
    const [searchValue,setSearchValue] = React.useState("kolkata")
    const [allInfo,setAllInfo] =React.useState({})

    async function getWeatherInfo(){
        const url = `https://api.weatherapi.com/v1/current.json?key=a55c3a52a8e04a0ba03101007220507&q=${searchValue}&aqi=yes`
        const url2 = `https://api.weatherapi.com/v1/forecast.json?key=a55c3a52a8e04a0ba03101007220507&q=${searchValue}&days=1&aqi=no&alerts=no`
       try{
        const response = await fetch(url)
        const data = await response.json()
        const response2 = await fetch(url2)
        const data2 = await response2.json()



        const {temp_c:temp,humidity,pressure_mb:pressure,wind_mph:wind} = data.current
        const {text:weathermood ,icon}=data.current.condition
        const {name,country,localtime,localtime_epoch}= data.location
        const {sunset} = data2.forecast.forecastday[0].astro

        const myNewWeatherInfo = {
            temp,
            humidity,
            pressure,
            wind,
            weathermood,
            icon,
            name,
            country,
            localtime,
            localtime_epoch,
            sunset
        }
        setAllInfo(myNewWeatherInfo)
       } catch(error){
        toast.warn("Please Enter the correct Location",{
            position: "top-center"
        })
       }
    }
    React.useEffect(()=>{
        getWeatherInfo()
    },[])

    return (
        <div className="container">
            <div className="full-wrapper">
            <div className="row">
                    <div className="col-md-4 search-wrapper">
                        <div className="input-group mb-3">
                            <input type="search" className="form-control search-input" placeholder="Search....." aria-label="Search" aria-describedby="button-addon2" autoFocus value = {searchValue} onChange = {(e)=>setSearchValue(e.target.value)} />
                            <button className="btn  search-btn" type="button" id="button-addon2" onClick={()=>getWeatherInfo()}>Search</button>
                        </div>
                </div>
           </div>
           <ToastContainer />
        
  
           {/* Main-area styling -------------------------------------------------------- */}
           <Main allInfo = {allInfo} />
            </div>
        </div>
    )
}