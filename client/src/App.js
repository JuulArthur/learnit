import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'moment/locale/nb';
import './reset.css';
import './Home/Home.css';
import Home from './Home/Home';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home />
                <Switch>
                    <Route exact path="/test" component={App} />
                </Switch>
            </div>
        );
    }
}

export default App;
