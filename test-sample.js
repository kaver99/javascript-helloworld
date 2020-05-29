'use strict'

var _locked = false;
var _waiting = [1, 2, 3, 4];

function lock () {
    console.log('start');
    let nextResolve;
    const unlock = () => {
        if(_waiting.length > 0) {
            nextResolve = _waiting.pop(0);
            nextResolve(unlock);
        } else {
            _locked = false;
        }
    }

    if(_locked) {
        return new Promise(resolve => {
            _waiting.push(resolve);
        });
    } else {
        
    }
    console.log('end');
}

lock();