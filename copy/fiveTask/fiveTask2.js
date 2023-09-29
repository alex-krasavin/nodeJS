import { EventEmitter } from "node:events";


class Logger extends EventEmitter {
    logQueue = []
    writing = false
    constructor( filename, maxSize ) {
        super()
        this.filename = filename,
        this.maxSize = maxSize,
        this.logQueue = this.logQueue,
        this.writing = this.writing
    }

    log (message) {
        
    }
};



