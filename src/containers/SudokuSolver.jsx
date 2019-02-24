import React, { Component } from 'react';
import CellComponent from "../components/CellComponent";

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
        this.state.grid[0] = ["", "", "2", "4", "6", "1", "", "8", "9"];
        this.state.grid[1] = ["", "", "", "", "", "", "", "", ""];
        this.state.grid[2] = ["", "", "", "", "", "", "", "", ""];
        this.state.grid[3] = ["", "", "", "", "", "", "", "", ""];
        this.state.grid[4] = ["", "", "", "", "", "", "", "", ""];
        this.state.grid[5] = ["", "", "", "", "", "", "", "", ""];
        this.state.grid[6] = ["", "", "", "", "", "", "", "", ""];
        this.state.grid[7] = ["", "", "", "", "", "", "", "", ""];
        this.state.grid[8] = ["", "", "", "", "", "", "", "", ""];
    };

    //handler approach 2:
    handleGridChange(row, colIndex, event){
        console.log("row [" + row + "] col [" + colIndex + "] : " + event.target.value);
        var updatedGrid = [...this.state.grid];
        updatedGrid[row][colIndex] = event.target.value;
        this.setState( { grid : updatedGrid } );
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
            </div>
        );
    }

}
export default SudokuSolver;