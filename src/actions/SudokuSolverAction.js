import request from 'superagent';
import AppDispatcher from "../dispatcher/Dispatcher";

const SudokuSolverAction = {

    initSamplePuzzle(){
        console.log("SudokuSolverAction initSamplePuzzle()");
        var puzzle = {
            rows:
                [
                    ["", "", "", "8", "1", "", "6", "7", ""],
                    ["", "", "7", "4", "9", "", "2", "", "8"],
                    ["", "6", "", "", "5", "", "1", "", "4"],
                    ["1", "", "", "", "", "3", "9", "", ""],
                    ["4", "", "", "", "8", "", "", "", "7"],
                    ["", "", "6", "9", "", "", "", "", "3"],
                    ["9", "", "2", "", "3", "", "", "6", ""],
                    ["6", "", "1", "", "7", "4", "3", "", ""],
                    ["", "3", "4", "", "6", "9", "", "", ""]
                ]
        }

        AppDispatcher.dispatch({
            actionName: 'NEW_DATA',
            data: puzzle.rows
        });
    },

    parseResponse(response){
        var parsedData = {};
        var temp = response.rows;
        for (var row=0;row<9;row++) {
            parsedData[row] = [];
            parsedData[row] = temp[row].split('');
        }
        return parsedData;
    },

    callSolverLambda() {
        console.log("SudokuSolverAction callSolverLambda()");

        //TODO: convert state/store to this format

        var requestPayload = {
            rows:
                [
                    "...81.67.",
                    "..749.2.8",
                    ".6..5.1.4",
                    "1....39..",
                    "4...8...7",
                    "..69....3",
                    "9.2.3..6.",
                    "6.1.743..",
                    ".34.69..."
                ]
        }

        request.post('https://aqfhv970kg.execute-api.us-west-1.amazonaws.com/test/sudoku')
            .send(requestPayload)
            .set('Content-Type', 'application/json')
            .timeout({
                response: 5000,  // 3 secs before response
                deadline: 10000, // 6 sec to complete
            })
            .end(function(err, res){
                if (err) {
                    console.log("error: ");
                } else {
                    console.log("success: ");
                    console.log(JSON.stringify(res));
                    var parsedData = SudokuSolverAction.parseResponse(res.body);
                    //dispatch response
                    AppDispatcher.dispatch({
                        actionName: 'UPDATE',
                        data: parsedData
                    })
                }
            });
    }
}
export default SudokuSolverAction;