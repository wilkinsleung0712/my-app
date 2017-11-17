import GameActionTypes from './gameActionTypes';
import GameDispatcher from '../dispatcher/gameDispatcher';

const Actions = {

    // initGame(){     GameDispatcher.dispatch({         actionType:
    // GameActionTypes.INIT_GAME     }) }

    move(i) {
        GameDispatcher.dispatch({actionType: GameActionTypes.MOVE, payload:{position:i}})
    }

};

export default Actions
