import React from 'react';
import {Provider} from 'react-redux';
import { store } from 'core/redux-config';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import {Login,Home} from './views/components';




function App() {

    return (
        <Provider store={ store }>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component ={Home}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
