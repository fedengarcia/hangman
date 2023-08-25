import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DialogContainer from '../DialogContainer/DialogContainer';
import HangManGameContainer from '../HangMan/HangManGameContainer/HangManGameContainer';
import GameContainer from '../GameContainer/GameContainer';
import MemoTestGameContainer from '../MemoTest/MemoTestGameContainer/MemoTestGameContainer';


const Router = () => {


    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<GameContainer/>}/>
                <Route path='/hangMan' element={<HangManGameContainer/>}/>
                <Route path='/memoTest' element={<MemoTestGameContainer/>}/>
                <Route path='/dialog/:dialogType' element={<DialogContainer/>}/>
                

            </Routes>
        </BrowserRouter>
    )
}

export default Router;