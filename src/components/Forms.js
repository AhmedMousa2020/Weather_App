import React from 'react';

const Forms = (props) => {
 
  return (
    <form onSubmit={props.getWeather}>
         <input type="text" name="city" placeholder="City...."/>
         <input type="text" name="country" placeholder="country...."/>
         <button>git Weather</button>
    </form>
  );
}

export default Forms;