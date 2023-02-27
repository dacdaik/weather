import React from "react";
import ChooseStateComponents from "./ChooseState";
import WeekInfoCardComponents from "./WeekinfoCard";

const HomeComponets = () => {
    return (
        <>
         <div className="homeWrap">
            <div className="weatherSection">
                Left components
                <div className="rightSide">
                    <ChooseStateComponents/> <br/>
                    <WeekInfoCardComponents/> <br/>
                    3. humity
                </div>
            </div>
         </div>
        </>
    )
}

export default HomeComponets;