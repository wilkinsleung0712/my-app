import {ReduceStore} from 'flux/utils';
import { Map, List } from 'immutable';
import GameActionTypes from '../action/gameActionTypes';
import Actions from '../action/gameAction';
import GameDispatcher from '../dispatcher/gameDispatcher';

////////////////////////
// Action handler map //
////////////////////////
const ACTION_HANDLERS = {
    [GameActionTypes.MOVE]: move,
    [GameActionTypes.DISPLAYHISTORY]:displayHistory
}


/////////////////////////
// Action handler func //
/////////////////////////
export function initGameResponse(){
    return Actions.initGame;
}

export function displayHistory(state,action){
    console.log('go and display history on ' + action.payload.step);
    if(action.payload.step){
        const step = action.payload.step;
        return Object.assign({},
            state,
            {
                stepNumber:step,xIsNext:(step%2)===0
            }
        )
    }
    return state;
}

export function move(state,action){

    const gameStatus = state.gameEnded;
    if(gameStatus){
        return state;
    }
    // we get all history
    const history = state.history.slice(0,state.stepNumber+1);
    // we find the latest history as current step
    const current = history[history.length-1];
    // we take a copy of the current squares
    const squares = current.squares.slice();
    // we modify the squares
    squares[action.payload.position] = current.xIsNext?'X':'O';
    var winner = calculateWinner(squares);
    var result = winner != null ?true:false
 
    // if(!result){

        return {
            history:history.concat([
                {
                    squares:squares,
                    xIsNext:!current.xIsNext,
                }
            ]),
            stepNumber:history.length,
            gameEnded:result,
            winner:winner
        };
    // }

    // return Object.assign({},state,{gameEnded:result});
}


export const initialState = {
    history:[
        {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    ],
    stepNumber:0,
    gameEnded:false,
    winner:null
};

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a,
            b,
            c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

class GameStore extends ReduceStore {

    constructor() {
        super(GameDispatcher);
    }

    getInitialState() {
        return initialState;
    }

    reduce(state, action) {
        const handler = ACTION_HANDLERS[action.actionType];
        return handler ? handler(state, action) : state;
    }

}

export default new GameStore();