import React from 'react';
import {Route, Link } from "react-router-dom";
import Flappy from '../Flappy/Flappy';
import Navigation from '../Navigation';
import TicTac from '../Titactoe/TicTac';


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