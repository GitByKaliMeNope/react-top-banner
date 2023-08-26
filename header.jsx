import React from "react";
import PropTypes from 'prop-types'; 
import Banner from "./banner";
import './header.css';
import Stopwatch from "./stopuhr";
import HeaderButton from "./HeaderButton";


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            className: props.className,
            active: props.active,
            isDisabled: props.isDisabled
            
          } 
    this.openNewWindowWithStopwatch = this.openNewWindowWithStopwatch.bind(this);
        }

          
       
    
     

    render() { 
    
    return ( 
        <nav className="header">
            <div>
            < Banner /> 
       
            </div>
            <h1 className="MyTag">KaliMeNope.de</h1>
            <div className="MenuBar">
            
             <a href="https://kalimenope.de" className="button">KaliMeNope.de</a>
               
          
            
            <HeaderButton
            id={Stopwatch}
            className="button"
            content={this.props.content}
            isDisabled={this.props.isDisabled} 
            active={this.props.active}
            onClick={this.openNewWindowWithContent }
            />
            <HeaderButton
            id='Home'
            className="button"
            content={this.props.content}
            isDisabled={this.props.isDisabled} 
            active={this.props.active}
            
            />
               
            </div>            
            

        </nav>
     );
}
PropTypes ={
    active: PropTypes.bool.isRequired,
 className: PropTypes.string.isRequired,

}
}
 export default Header  ;
