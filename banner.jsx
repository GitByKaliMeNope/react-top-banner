import React from "react";
import ClockTime from "./Clock";
import  logo  from '../logo.svg';
import './body.css';



class Banner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ClockTime: ['UTCString'],
            src: {logo}
            
        }
    }
   
    render() { 
       


    return (
        <div id="banner" className="banner">
        
              <img src={logo} className="App-logo-spin-left App-logo-left" alt="logo" />
        
            <span className="uhr">
                Die Aktuelle Zeit : 
                <ClockTime />
            </span>
        
            <img src={logo} className="App-logo-spin-right App-logo-right" alt="logo" />
        
        </div>
     );
    }
}

export default Banner;