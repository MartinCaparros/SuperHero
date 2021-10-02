import React from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import {Login,Home} from './views/components';

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component ={Home}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
