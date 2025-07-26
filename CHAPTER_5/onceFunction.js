//Write a function once(fn) that ensures fn is only called once


function once(fn) {
    let isCalledOnce = false;
    function callOnce() {
        if(!isCalledOnce) {
            fn();
            isCalledOnce = true;
        } 
    }
    return callOnce;
}

const init = once(() => console.log("Initialized"));
init();
init();