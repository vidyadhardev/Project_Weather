import React from 'react';
import WeekInfoCardComponents from './WeekInfoCard/WeekInfoCardComponents';
import ChooseStateComponents from './ChooseState/ChooseStateComponents';
import HumidityComponents from './HUMIDITY';
import LeftComponents from './Left/LeftComponents';
const HomeComponents = ()=>{   
    return (
        <>
            <div className='homeWrap'>
                <div className='weatherSection'>
                    <LeftComponents />
                    <div className='rightSide'>
                        <ChooseStateComponents />
                        <WeekInfoCardComponents />
                        <HumidityComponents />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponents;

// 34480b98aa332da53123a0ac63a4ea9d weather api key
// https://openweathermap.org/
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
 


