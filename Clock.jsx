import React, { useState, useEffect } from "react";
import './body.css';



const ClockTime = (props) => {

    const[dateTime, setDateTime] = useState (new Date().toUTCString());

    

    useEffect(() =>{
    document.title = 'KaliMeNope.de' ;
    const clockInter = setInterval(() => {
      setDateTime(new Date().toUTCString());
    }, 1000);
    
    return() => clearInterval(clockInter);
    
    }, []);
   
        return(
            <div id="uhr" className="uhr">
            <span className="span"> <h1 id='Uhrzeit' className="clock">Uhr : { dateTime }</h1></span> 
        </div>
        )
    
};


export default ClockTime;