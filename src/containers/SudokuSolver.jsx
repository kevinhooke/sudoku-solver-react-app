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
            // for (var col=0;col<9;col++) {
            //     this.state.grid[row][col] = [];
            // }
        }
        this.state.grid[0] = [".", ".", "2", "4", "6", "1", ".", "8", "9"];
        this.state.grid[1] = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.state.grid[2] = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.state.grid[3] = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.state.grid[4] = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.state.grid[5] = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.state.grid[6] = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.state.grid[7] = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.state.grid[8] = [".", ".", ".", ".", ".", ".", ".", ".", "."];
    };

    //handler approach 2:
    handleGridChange(row, colIndex, event){
        console.log("row [" + row + "] col [" + colIndex + "] : " + event.target.value);
        var updatedGrid = [...this.state.grid];

        updatedGrid[row][colIndex] = event.target.value;

        this.setState( { grid : updatedGrid } );
    }

    //handler approach 1: one per row

    handleChangeRow1(index, event){
        console.log("row 1 update: " + event.target.value);
        var updatedRow = [...this.state.row1];
        updatedRow[index] = event.target.value
        this.setState( { row1 : updatedRow } );
    }

    handleChangeRow2(index, event){
        console.log("row 2 update: " + event.target.value);
        var updatedRow = [...this.state.row2];
        updatedRow[index] = event.target.value
        this.setState( { row2 : updatedRow } );
    }
    handleChangeRow3(index, event){
        console.log("row 3 update: " + event.target.value);
        var updatedRow = [...this.state.row3];
        updatedRow[index] = event.target.value
        this.setState( { row3 : updatedRow } );
    }
    handleChangeRow4(index, event){
        console.log("row 4 update: " + event.target.value);
        var updatedRow = [...this.state.row4];
        updatedRow[index] = event.target.value
        this.setState( { row4 : updatedRow } );
    }
    handleChangeRow5(index, event){
        console.log("row 5 update: " + event.target.value);
        var updatedRow = [...this.state.row5];
        updatedRow[index] = event.target.value
        this.setState( { row5 : updatedRow } );
    }
    handleChangeRow6(index, event){
        console.log("row 6 update: " + event.target.value);
        var updatedRow = [...this.state.row6];
        updatedRow[index] = event.target.value
        this.setState( { row6 : updatedRow } );
    }
    handleChangeRow7(index, event){
        console.log("row 7 update: " + event.target.value);
        var updatedRow = [...this.state.row7];
        updatedRow[index] = event.target.value
        this.setState( { row7 : updatedRow } );
    }
    handleChangeRow8(index, event){
        console.log("row 8 update: " + event.target.value);
        var updatedRow = [...this.state.row8];
        updatedRow[index] = event.target.value
        this.setState( { row8 : updatedRow } );
    }
    handleChangeRow9(index, event){
        console.log("row 9 update: " + event.target.value);
        var updatedRow = [...this.state.row9];
        updatedRow[index] = event.target.value
        this.setState( { row9 : updatedRow } );
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