import './styles/App.css';
import LeftBar from './components/LeftBar.jsx';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  return (    
    <Router>
    <Switch>
    <Route path="/client">
      <div>Client</div>
    </Route>
    <Route path="/">
      <LeftBar />
    </Route>
  </Switch>
  </Router>
  );
}

export default App;
