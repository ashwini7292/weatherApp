import React from "react";
import { useDispatch } from "react-redux";
import Weather from './components/Weather';
import DateTime from "./components/DateTime";

function App() {

  return (
    <React.Fragment>
    <div className="App">
        <DateTime/>
        <Weather/>
      </div>
      </React.Fragment>
  );
}

export default App;
