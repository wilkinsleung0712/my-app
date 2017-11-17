import '../../index.css'
import React from 'react';

class Square extends React.Component {
    // state should handle by parent, and remove private state constructor(props) {
    // super(props);     this.state = {         value: null     }; }

    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
            {console.log('square ->' + this.props|JSON)}
                {this.props.value}
            </button>
        );
    }
}

export default Square;