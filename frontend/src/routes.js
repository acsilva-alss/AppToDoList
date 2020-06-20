import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Initial from './pages/initial';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Initial} />
            </Switch>
        </BrowserRouter>
    );
}
