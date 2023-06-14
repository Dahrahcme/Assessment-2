// importing all required components
import React, { Component } from 'react';
import './App.css';
import UserOutput from './Components/Output/UserOutput';


class App extends Component {
  
  state = {
    users: [
      {username: "Ayomikun"}      
    ]
  }

  nameChangeHandler = (e) =>{
    this.setState({
      users: [
        {username: e.target.value}      
    ]
    })
  }

  render() {
    return (
      <div className="App">
        {/* the UserInput and userOutput is to be rendered  */}
        <div>
          {/* Rendering the username with props */}
          <UserOutput 
            user = {this.state.users[0].username}
            change = {this.nameChangeHandler}
          /> 
      
          </div> 
      </div>
    );
  }
}

export default App;



