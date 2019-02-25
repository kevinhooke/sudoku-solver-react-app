var AppDispatcher = require('../dispatcher/AppDispatcher');
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

    getData(){
        return puzzleData;
    }

    handleAction(action) {

        switch (action.actionName) {

            // Do we know how to handle this action?
            case 'UPDATE':
                console.log("SudokuSolverStore is handling UPDATE action!");
                this.emit('change');
                break;
        }
    }

}

export default new SudokuSolverStore();