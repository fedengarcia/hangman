import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import DialogContainer from '../DialogContainer/DialogContainer';
import HangManGameContainer from '../HangManGameContainer/HangManGameContainer';
import GameContainer from '../GameContainer/GameContainer';
import MemoTestGameContainer from '../MemoTestGameContainer/MemoTestGameContainer';



const Router = () => {


    return(
        <BrowserRouter>
        <Switch>
            
            <Route exact path="/">
                <GameContainer/>
            </Route>

            <Route path="/hangMan">
                <HangManGameContainer/>
            </Route>

            <Route path="/memoTest">
                <MemoTestGameContainer/>
            </Route>

            <Route path="/dialog/:dialogType">
                <DialogContainer/>
            </Route>
            
        </Switch>
        </BrowserRouter>
    )
}

export default Router;