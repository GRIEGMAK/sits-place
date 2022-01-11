import './styles/App.css';
import LeftBar from './components/LeftBar.jsx';
import React from "react";
import { observer } from 'mobx-react-lite';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import store from "./store/index"


const App = () => {
  const {getApi} = store;
  return (    
    <Router>
    <Switch>
    <Route path="/client">
      <div>Client</div>
    </Route>
    <Route path="/">
      <LeftBar getApi={getApi} />
    </Route>
  </Switch>
  </Router>
  );
}

export default observer(App);
