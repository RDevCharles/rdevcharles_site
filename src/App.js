import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './screens/Home';
import "aos/dist/aos.css";


function App() {
  return (
    <div className="App">
    
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
