import React from "react";
import Board from "./Board";
import './TicTacToe.css';

export default class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'value': Board.myChars[props.index]
        }
    }

    squareClicked(index) {
        if (Board.myChars[index] === null) {
            Board.myChars[index] = Board.player;
            console.log('Hello:' + Board.player + ":");
            if (Board.player === 'X') {
                Board.player = 'O';
            } else if (Board.player === 'O') {
                Board.player = 'X';
            }
            const winner = this.checkResult();
            if (winner) {
                alert('Winner is ' + winner);
            } else if (this.checkBoardFilled()) {
                alert('There is No Winner');
            }
        } else {
            console.log('Hello:' + Board.myChars[index] + ":")
        }
    }

    checkBoardFilled() {
        for (let i = 0; i < Board.myChars.length; i++) {
            if (Board.myChars[i] === null) {
                return false
            }
        }
        return true
    }

    checkResult() {
        const possibleCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [0, 4, 8]
        ];
        for (let i = 0; i < possibleCombinations.length; i++) {
            const [a, b, c] = possibleCombinations[i];
            if (Board.myChars[a] && Board.myChars[a] === Board.myChars[b] && Board.myChars[a] === Board.myChars[c]) {
                return Board.myChars[a];
            }
        }
        return null;
    }

    render() {
        return (
            <button className="squareDiv" onClick={() => this.squareClicked(this.props.index)}>
                {Board.myChars[this.props.index]}
            </button>
        );
    }
}