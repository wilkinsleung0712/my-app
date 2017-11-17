import { Container } from 'flux/utils';
import React from 'react';

import GameStore from '../store/gameStore';
import Game from '../component/game';

import Actions from '../action/gameAction';

class GameContainer extends React.Component {

    static getStores(){
        return [GameStore];
    }

    static calculateState(){
        // calc how state change
        return {
            gameData:GameStore.getState()
        };
    }

    handleOnClick(i){
        Actions.move(i);
    }

    handleOnHistoryClick(step){
        Actions.displayStep(step);
    }

    render(){
        return (
            <Game gameData={this.state.gameData} onClick={this.handleOnClick} onHistoryClick={this.handleOnHistoryClick}/>
        );
       
    }

}

export default Container.create(GameContainer);