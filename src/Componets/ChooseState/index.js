import React from "react";
import cities from "../../Data/in.json";

const ChooseStateComponents = () => {
    return (
        <>
        <div className="stateWrap">
            <select className="stateMenu">
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