import React from "react";
import cities from "../../Data/in.json";
import {UseWeaterAPPContext} from "../../Context/Context"

const ChooseStateComponents = () => {

    const {state:{city}, dispatch} = UseWeaterAPPContext();
    console.log('UseWeaterAPPContext', UseWeaterAPPContext());

    const handleChange = (e) => {
        const selectedCity = cities.filter((city)=>{
            return city.city === e.target.value
        })[0]
        console.log(selectedCity);
    }
    return (
        <>
        <div className="stateWrap">
            <select className="stateMenu" defaultValue={city} onChange={handleChange}>
                {
                    cities && cities.length > 0 && cities.map((city)=>{
                        return (
                            <option>
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