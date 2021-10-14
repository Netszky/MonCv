import React from 'react';
import { BrowserRouter,Switch,Route, useRouteMatch, Link } from "react-router-dom";
import Navigation from '../Navigation';
import TicTac from '../Titactoe/TicTac';
import Flappy from './Flappy/Flappy';

const Game = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="game-container">
                <Link to="/game/tictactoe">Test</Link>
                <Link to="/game/flappy">flappy</Link>
                <Route path="/game/tictactoe">
                    <TicTac/>
                </Route>
                <Route path="/game/flappy">
                    <Flappy/>
                </Route>
            </div>
        </div>
    );
};

export default Game;