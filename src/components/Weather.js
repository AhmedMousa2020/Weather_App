import React from 'react';
const Weather = (props) => {
 
  return (
    <div className="info">
        {
             props.tempreture &&
             <p className="info_key">tempreture:
                 <span className="info_value">{props.tempreture}</span>
             </p>
        }
        
        {
             props.city &&
             <p className="info_key">city:
                 <span className="info_value">{ props.city}</span>
             </p>
        }
          
        
        {
             props.country &&
             <p className="info_key">country:
                 <span className="info_value">{ props.country}</span>
             </p>
        }

        {
              props.humidity &&
             <p className="info_key">humidity:
                 <span className="info_value">{  props.humidity}</span>
             </p>
        }

        {
              props.description &&
             <p className="info_key">tempreture:
                 <span className="info_value">{ props.description}</span>
             </p>
        }
     
        {
            props.erorre &&
             <p className="info_key">erorr:
                 <span className="info_value">{props.erorr}</span>
             </p>
        }
    </div>
  );
}

export default Weather;