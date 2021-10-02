import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { TeamLineUpPanel,TeamList } from 'views/components';

const MainSection = () => {
    return ( 
        <main>
            <Switch>
                <Route exact path="/TeamLineUpPanel" component={TeamLineUpPanel}/>
                <Route exact path="/TeamList" component={TeamList}/>
            </Switch> 
        </main>
    
    );
}
 
export default MainSection;