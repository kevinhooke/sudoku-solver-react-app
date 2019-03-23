import AppDispatcher from "../dispatcher/Dispatcher";
var EventEmitter = require('events').EventEmitter;

var puzzleData = {

}

class SudokuSolverStore extends EventEmitter {

    constructor() {
        super();
        this.payload = AppDispatcher.register(this.handleAction.bind(this));
    }

    addChangeListener(callback){
        this.on('change', callback);
    }

    removeChangeListener(callback){
        this.removeListener('change', callback);
    }

    setData(newData){
        puzzleData = newData;
    }

    getData(){
        return puzzleData;
    }

    handleAction(action) {

        switch (action.actionName) {

            case 'NEW_DATA' :
                this.setData(action.data);
                this.emit('change');
                break;

            case 'UPDATE':
                console.log("SudokuSolverStore is handling UPDATE action!: " + JSON.stringify(action.data));
                var newData = [];

                for(var row in action.data){
                    console.log("row: " + JSON.stringify(action.data[row]));
                    newData[row] = action.data[row];
                }
                this.setData(newData);
                this.emit('change');
                break;
        }
    }

}

export default new SudokuSolverStore();