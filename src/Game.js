import React from "react";
import Board from "./Board";
import './TicTacToe.css';

class Game extends React.Component {
    render() {
        return (
            <div className={'d-flex'}>
                <div className={"center"}>
                    <div className="game-info">
                        <div>Welcome To game</div>
                    </div>
                    <div className="game">
                        <div className="game-board">
                            <Board />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// ========================================

export default Game;
