import React from 'react';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';
import {Login,Home} from './views/components';

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/home" component ={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
