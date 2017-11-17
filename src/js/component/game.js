import React from 'react';
import Board from './board';

class Game extends React.Component {
    constructor(props) {

        super(props);
        console.log(props);
    }

    handleClick(i) {
        console.log('handle this click');
        // const history = this.state.history;
        // const current = history[history.length - 1];

        // const squares = current
        //     .squares
        //     .slice();

        // if (calculateWinner(squares) || squares[i]) {
        //     return;
        // }
        // squares[i] = this.state.xIsNext
        //     ? 'X'
        //     : 'O';
        // this.setState({
        //     history: this
        //         .state
        //         .history
        //         .concat([
        //             {
        //                 squares: squares
        //             }
        //         ]),
        //     stepNumber: history.length,
        //     xIsNext: !this.state.xIsNext
        // });
    }

    // jumpTo(step) {
    //     this.setState({
    //         stepNumber: step,
    //         xIsNext: (step % 2) === 0
    //     });
    // }

    render() {
        const history = this.props.gameData.history;
        const stepNumber = this.props.gameData.stepNumber;
        const current = history[stepNumber];
        const winner = this.props.gameData.winner;
        
        const moves = history.map((step,move)=>{
            const desc = move? 'Go to move #' + move : 'Go to game start';
            return (
                <li key={move}>
                  <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>)
        });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (current.xIsNext
                ? 'X'
                : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i)=>this.props.onClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;