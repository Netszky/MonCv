import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
    const [nbCases, setnbCases] = useState(0);

    return (
        <div className="square-container">
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            
        </div>
    );
};

export default Board;