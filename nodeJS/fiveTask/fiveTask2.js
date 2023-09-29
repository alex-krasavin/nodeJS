import { EventEmitter } from "node:events";


class Logger extends EventEmitter {
    logQueue = []
    writing = false
    constructor( filename, maxSize ) {
        super()
        this.filename = filename,
        this.maxSize = maxSize,
        this.logQueue = logQueue,
        this.writing = writing
    }

    log (message) {
        
    }
};



