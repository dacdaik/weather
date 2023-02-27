import React from "react";
import axios from "axios";
import cities from "../../Data/in.json";
import {UseWeaterAPPContext} from "../../Context/Context"
import { useEffect } from "react";

const ChooseStateComponents = () => {

    const {state:{city}, dispatch} = UseWeaterAPPContext();
    console.log('UseWeaterAPPContext', UseWeaterAPPContext(), city);

    const handleChange = (e) => {
        const selectedCity = cities.filter((city)=>{
            return city.city === e.target.value
        })[0]
        // console.log(selectedCity);
        dispatch({
            type: "",
            payload: selectedCity
        })
    }
    //call API
    const APIKEY = '34480b98aa332da53123a0ac63a4ea9d';
    let lat = city && city.lat ? city.lat : '';
    let long = city && city.lng ? city.lng : '';
    let exclude = 'hourly,minutely';
    const URL =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`

    const fetchData = () => {
        axios(URL).then((data)=> {
            let _daily = data.data.daily;
            // console.log("data",data);
            dispatch({
                type:'SET_DAILY',
                payload: _daily
            })
        })
    }

    useEffect(()=>{
        fetchData();
    }, [city])
    return (
        <>
        <div className="stateWrap">
            <select className="stateMenu" defaultValue={city} onChange={handleChange}>
                {
                    cities && cities.length > 0 && cities.map((city)=>{
                        return (
                            <option key={`${city.population}${city.lat}`} value={city.city}>
                                {city.city} - {city.admin_name}
                            </option>
                        )
                    })
                }
            </select>
        </div>
        </>
    )
}
export default ChooseStateComponents;