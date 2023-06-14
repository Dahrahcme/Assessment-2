// importing all required components
import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/Input/UserInput';
import UserOutput from './Components/Output/UserOutput';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        {/* the UserInput and userOutput is to be rendered  */}
        <div>
          <UserInput /> 
          <UserOutput user = {"Ayomikun"} /> 
          <UserOutput user ={"Jide"}/> 
          <UserOutput user ={"Seun"}/> 
          <UserOutput user ={"Ayomide"}/> 
          <UserOutput user ={"Ireoluwa"}/> 
          <UserOutput user ={"Ifeoluwa"}/> 
          <UserOutput user ={"Ola"}/> 
          </div> 
      </div>
    );
  }
}

export default App;



// importing all required components
// import './App.css';
// import UserInput from './Components/Input/UserInput';
// import UserOutput from './Components/Output/UserOutput';

// function App() {
//   return (
//     <div className="App">
//       {/* the UserInput and userOutput is to be rendered  */}
//       <div>
//         <UserInput /> 
//         <UserOutput /> 
//         <UserOutput /> 
//         <UserOutput /> 
//         <UserOutput /> 
//         <UserOutput /> 
//         <UserOutput /> 
//         <UserOutput /> 
//         </div> 
//     </div>
//   );
// }

// export default App;

