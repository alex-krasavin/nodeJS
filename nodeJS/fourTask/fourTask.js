// Task 1
import { EventEmitter } from 'node:events';
class EE extends EventEmitter {};
const ee = new EE ();

let count = 1;

const runTick = () => {
    console.log(`Tick - ${count}`);
    count++
    if (count > 10) {
        clearInterval(intervalId)
    }
}

const intervalId = setInterval(runTick, 1000);

ee.on('Tick', runTick);

ee.emit ('Tick');

// Task 2

const sendMessage = (username, message) => {
    console.log(`${username} : ${message}`);
};

const receiveMessage = () => {

};
