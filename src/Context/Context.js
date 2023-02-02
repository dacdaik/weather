import React, {useReducer, useContext} from 'react';

import { WeatherReducer } from './Reducer';

const WeaterAPPContext = React.createContext();

const WeaterAPPProvider = ({children}) => {
    const [state, dispatch] = useReducer(WeatherReducer,{
        city: '',
        current:'',
        daily:''
    })
    return (
        <>
            <WeaterAPPContext.Provider value={{state, dispatch}}>
                {children}
            </WeaterAPPContext.Provider>
        </>
    )
}
export default WeaterAPPProvider;

export const UseWeaterAPPContext = () => {
    return useContext(WeaterAPPContext)
}