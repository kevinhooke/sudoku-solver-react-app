import React, { Component } from 'react';
import CellComponent from "../components/CellComponent";

class SudokuSolver extends Component {

    constructor(props) {
        super(props);

        this.state =
            {
                grid : []
            };
        this.state.grid.push("2");
        this.state.grid.push("4");
        this.state.grid.push("6");

    };

    render() {
        return (
            <div>
                {
                    this.state.grid.map( (cell, index) => (
                        <CellComponent value={cell}/>
                        )
                    )}
            </div>
        );
    }

}
export default SudokuSolver;