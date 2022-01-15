import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import DialogContainer from '../../../../Coder-House/shoes-garcia/src/components/DialogContainer/DialogContainer';
import GameContainer from '../GameContainer/GameContainer';


const Router = () => {


    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <GameContainer/>
            </Route>

            <Route path='dialog/:dialogType'>
                <DialogContainer/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router;