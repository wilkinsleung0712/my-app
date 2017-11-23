import {Container} from 'flux/utils';
import React from 'react';

import GameStore from '../store/gameStore';
import Game from '../component/game';
import Demo from '../component/demo';

import Actions from '../action/gameAction';
import 'antd/dist/antd.css'

class GameContainer extends React.Component {

    static getStores() {
        return [GameStore];
    }

    static calculateState() {
        // calc how state change
        return {
            gameData: GameStore.getState()
        };
    }

    handleOnClick(i) {
        Actions.move(i);
    }

    handleOnHistoryClick(step) {
        Actions.displayStep(step);
    }

    render() {
        return (
            <div>
                <Game
                    gameData={this.state.gameData}
                    onClick={this.handleOnClick}
                    onHistoryClick={this.handleOnHistoryClick}/>
                <Demo/>

            </div>
        );

    }

}

export default Container.create(GameContainer);