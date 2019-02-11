import React, { Component } from 'react';

class CellComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="label">
                <input className="cell" type="text" value={this.props.value}/>
            </span>
        );
    }

}
export default CellComponent;