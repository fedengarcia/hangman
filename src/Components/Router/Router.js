import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import PopUpContainer from '../PopUpContainer/PopUpContainer'
import GameContainer from '../GameContainer/GameContainer';


const Router = () => {


    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <GameContainer/>
            </Route>

            <Route path='popUpContainer/:dialogType'>
                <PopUpContainer/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router;