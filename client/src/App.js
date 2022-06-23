import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component
{
    render(){
        return(
            <Router>
                <div className="home">
                    <h2>Hello React!</h2>
                    <h6>simple boilerplate for getting started</h6>
                </div>
            </Router>       
        )
    }
}

export default App;