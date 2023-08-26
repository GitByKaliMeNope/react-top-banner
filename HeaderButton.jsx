import React from "react";
import ReactDOM from "react-dom"; 


class HeaderButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id, 
      className: props.className,
      content: props.content,
      isDisabled: props.isDisabled,
      active: props.active,
    };
    this.openNewWindowWithContent = this.openNewWindowWithContent.bind(this);
    this.handleActive = this.handleActive.bind(false);
  }
  handleActive = (props) => {
          
      this.setActive = (active) => {
      document.return ? (this.setState = (props) => {this.return (this.props.active = true, this.props.isDisabled = true)}):
      (this.setState = (props) => {this.return (this.props.isDisabled = false, this.props.active = false)})
    }
  }


  openNewWindowWithContent = (props) => {
    
    const newWindow = window.open('', '_blank', 'width=400,height=200');
    ReactDOM.render(< this.props.id />, newWindow.document.body);
    
}
  render() {
   this.props.isDisabled = this.state.isDisabled;
   this.props.active = this.state.active;

    return (
      <div>
        <button
          id={this.props.id}
          onClick={this.openNewWindowWithContent } // Verweisen Sie auf die Funktion mit 'this'
          className={this.props.className} // Verwenden Sie die className aus dem State
          isDisabled={this.props.isDisabled}
          active = {this.props.active}
        >
          {this.state.content}
        </button>
      </div>
    );
  }
}

export default HeaderButton;