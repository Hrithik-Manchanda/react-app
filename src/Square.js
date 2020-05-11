import React from "react";
import Board from "./Board";

export default class Square extends React.Component {

    squareClicked(index) {
        if (Board.myChars[index] === ' ') {
            Board.myChars[index] = Board.player;
            console.log('Hello:' + Board.player + ":");
            if (Board.player === 'X') {
                Board.player = 'O';
            } else if (Board.player === 'O') {
                Board.player = 'X';
            }
            this.forceUpdate();
        } else {
            console.log('Hello:' + Board.myChars[index] + ":")
        }

    }

    render() {
        return (
            <button className="square" onClick={() => this.squareClicked(this.props.index)}>
                {Board.myChars[this.props.index]}
            </button>
        );
    }
}