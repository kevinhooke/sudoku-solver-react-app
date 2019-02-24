import React, { Component } from 'react';
import CellComponent from "../components/CellComponent";

class SudokuSolver extends Component {

    constructor(props) {
        super(props);

        this.state =
            {
                row1 : [],
                row2 : [],
                row3 : [],
                row4 : [],
                row5 : [],
                row6 : [],
                row7 : [],
                row8 : [],
                row9 : [],
                grid : [],
            };
        //first approach
        for (var i=0;i<9;i++) {
            this.state.row1[i] = [];
            this.state.row2[i] = [];
            this.state.row3[i] = [];
            this.state.row4[i] = [];
            this.state.row5[i] = [];
            this.state.row6[i] = [];
            this.state.row7[i] = [];
            this.state.row8[i] = [];
            this.state.row9[i] = [];

        }
        this.state.row1 = [".", ".", "2", "4", "6", "1", ".", "8", "9"];
        this.state.row2 = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.state.row3 = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.state.row4 = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.state.row5 = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.state.row6 = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.state.row7 = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.state.row8 = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.state.row9 = [".", ".", ".", ".", ".", ".", ".", ".", "."];

        //second approach
        for (var row=0;row<9;row++) {
            this.state.grid[row] = [];
            for (var col=0;col<9;col++) {
                this.state.grid[row][col] = [];
            }
        }
        this.state.grid[4] = [".", ".", ".", ".", ".", ".", ".", ".", "."];
        this.state.grid[5] = [".", ".", ".", ".", ".", ".", ".", ".", "."];

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
                        this.state.row1.map( (cell, index) => (
                            <CellComponent key={index} value={this.state.row1[index]}
                                           onChange={this.handleChangeRow1.bind(this, index)}/>
                            )
                        )}
                </div>
                <div>
                {
                    this.state.row2.map( (cell, index) => (
                            <CellComponent key={index} value={this.state.row2[index]}
                                           onChange={this.handleChangeRow2.bind(this, index)}/>
                        )
                    )}
                </div>
                <div>
                    {
                        this.state.row3.map( (cell, index) => (
                                <CellComponent key={index} value={this.state.row3[index]}
                                               onChange={this.handleChangeRow3.bind(this, index)}/>
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

            </div>
        );
    }

}
export default SudokuSolver;