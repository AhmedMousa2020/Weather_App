import React,{Component} from 'react';
import Forms from './components/Forms';
import Weather from './components/Weather';
import './App.css';

const Api_key="8feb610a576c12465e12771a5a9bd3e2";

class App extends Component{

  state=
  {
    tempreture:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    erorr:''
  }
  getWeather= async (e)=>
{
  e.preventDefault();
  const city =  e.target.elements.city.value
  const country =   e.target.elements.country.value
     const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_key}`);
    const data = await response.json();
    console.log(data);

    if(city && country)
    {
    this.setState(
    {
      tempreture:data.main.temp,
    city:data.name,
    country:data.sys.country,
    humidity:data.main.humidity,
    erorr:''
    })
  }else{
    this.setState(
    {
      tempreture:'',
      city:'',
      country:'',
      humidity:'',
      description:'',
      erorr:'please enter data'
    })
  }
}
render(){
  return (
    <div className="wrapper">
      <div className="form-container">
     <Forms getWeather={this.getWeather}/>
     <Weather
     tempreture={this.state.tempreture}
     city={this.state.city}
     country={this.state.country}
     humidity={this.state.humidity}
     description={this.state.description}
     erorr={this.state.erorr}
     />
     </div>
    </div>
  );
}
}

export default App;