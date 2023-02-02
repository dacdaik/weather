import React from "react";
import ChooseStateComponents from "./ChooseState";

const HomeComponets = () => {
    return (
        <>
         <div className="homeWrap">
            <div className="weatherSection">
                Left components
                <div className="rightSide">
                    <ChooseStateComponents/> <br/>
                    2. week info <br/>
                    3. humity
                </div>
            </div>
         </div>
        </>
    )
}

export default HomeComponets;