import React from "react";
import Square from "./Square";
import './TicTacToe.css';


export default class Board extends React.Component {
    static player = 'X';
    static myChars = [null, null, null, null, null, null, null, null, null];

    renderSquare(ch) {
        return <Square index={ch}/>;
    }

    render() {
        let player = Board.player;
        const status = 'Next player: ' + player;
        return (
            <div className="board-info" onClick={() => this.forceUpdate()}>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}