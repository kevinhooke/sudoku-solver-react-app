import React, { Component } from 'react';
import CellComponent from "../components/CellComponent";
import SudokuSolverAction from "../actions/SudokuSolverAction";

class SudokuSolver extends Component {

    constructor(props) {
        super(props);

        this.state =
            {
                grid : [],
            };

        for (var row=0;row<9;row++) {
            this.state.grid[row] = [];
        }

        this.state.grid[0] = ["", "", "", "8", "1", "", "6", "7", ""];
        this.state.grid[1] = ["", "", "7", "4", "9", "", "2", "", "8"];
        this.state.grid[2] = ["", "6", "", "", "5", "", "1", "", "4"];
        this.state.grid[3] = ["1", "", "", "", "", "3", "9", "", ""];
        this.state.grid[4] = ["4", "", "", "", "8", "", "", "", "7"];
        this.state.grid[5] = ["", "", "6", "9", "", "", "", "", "3"];
        this.state.grid[6] = ["9", "", "2", "", "3", "", "", "6", ""];
        this.state.grid[7] = ["6", "", "1", "", "7", "4", "3", "", ""];
        this.state.grid[8] = ["", "3", "4", "", "6", "9", "", "", ""];
    };

    //handler approach 2:
    handleGridChange(row, colIndex, event){
        console.log("row [" + row + "] col [" + colIndex + "] : " + event.target.value);
        var updatedGrid = [...this.state.grid];
        updatedGrid[row][colIndex] = event.target.value;
        this.setState( { grid : updatedGrid } );
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("submit pressed");
        SudokuSolverAction.callSolverLambda();
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.grid[0].map( (cell, colIndex) => (
                                <CellComponent key={colIndex} value={this.state.grid[0][colIndex]}
                                               onChange={this.handleGridChange.bind(this, 0, colIndex)}/>
                            )
                        )}
                </div>
                <div>
                    {
                        this.state.grid[1].map( (cell, colIndex) => (
                                <CellComponent key={colIndex} value={this.state.grid[1][colIndex]}
                                               onChange={this.handleGridChange.bind(this, 1, colIndex)}/>
                            )
                        )}
                </div>
                <div>
                    {
                        this.state.grid[2].map( (cell, colIndex) => (
                                <CellComponent key={colIndex} value={this.state.grid[2][colIndex]}
                                               onChange={this.handleGridChange.bind(this, 2, colIndex)}/>
                            )
                        )}
                </div>
                <div>
                    {
                        this.state.grid[3].map( (cell, colIndex) => (
                                <CellComponent key={colIndex} value={this.state.grid[3][colIndex]}
                                               onChange={this.handleGridChange.bind(this, 3, colIndex)}/>
                            )
                        )}
                </div>
                <div>
                    {
                        this.state.grid[4].map( (cell, colIndex) => (
                                <CellComponent key={colIndex} value={this.state.grid[4][colIndex]}
                                               onChange={this.handleGridChange.bind(this, 4, colIndex)}/>
                            )
                        )}
                </div>
                <div>
                    {
                        this.state.grid[5].map( (cell, colIndex) => (
                                <CellComponent key={colIndex} value={this.state.grid[5][colIndex]}
                                               onChange={this.handleGridChange.bind(this, 5, colIndex)}/>
                            )
                        )}
                </div>
                <div>
                    {
                        this.state.grid[6].map( (cell, colIndex) => (
                                <CellComponent key={colIndex} value={this.state.grid[6][colIndex]}
                                               onChange={this.handleGridChange.bind(this, 6, colIndex)}/>
                            )
                        )}
                </div>
                <div>
                    {
                        this.state.grid[7].map( (cell, colIndex) => (
                                <CellComponent key={colIndex} value={this.state.grid[7][colIndex]}
                                               onChange={this.handleGridChange.bind(this, 7, colIndex)}/>
                            )
                        )}
                </div>
                <div>
                    {
                        this.state.grid[8].map( (cell, colIndex) => (
                                <CellComponent key={colIndex} value={this.state.grid[8][colIndex]}
                                               onChange={this.handleGridChange.bind(this, 8, colIndex)}/>
                            )
                        )}
                </div>
                <div>
                    <button onClick={this.handleSubmit}>Solve Puzzle</button>
                </div>
            </div>
        );
    }

}
export default SudokuSolver;