import React from 'react';
import Navigation from '../Navigation';
import Board from './Board';

const TicTac = () => {
    return (
        <div className="game_container">
            <Navigation></Navigation>
            <h1>TicTacToe</h1>
            <div className="board">
                <Board></Board>
            </div>
        </div>
    );
};

export default TicTac;