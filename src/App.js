// importing all required components
import './App.css';
import UserInput from './Components/Input/UserInput';
import UserOutput from './Components/Output/UserOutput';

function App() {
  return (
    <div className="App">
      {/* the UserInput and userOutput is to be rendered  */}
      <div>
        <UserInput /> 
        <UserOutput /> 
        <UserOutput /> 
        <UserOutput /> 
        <UserOutput /> 
        <UserOutput /> 
        <UserOutput /> 
        <UserOutput /> 
        </div>
    </div>
  );
}

export default App;
