// let a = 1;


// function outer() {
//     return () => a;
// }

// let func1 = outer();
// console.log(func1());

// a++;

// a = {name: 'Jagadish'};
// console.log(func1());

// let func2 = outer();
// a['age'] = 32; 
// console.log(func2());
// console.log(func1());

//Run once

function outer(){

    let isRunOnce = false;

    function multiplyBy2(n) {
        if(!isRunOnce) {
            isRunOnce = true;
            return 2 * n;
        }

        return 'Sorry limit reached!'
    }

    return multiplyBy2;
}

let genratedFunc = outer();
console.log(genratedFunc(2));
console.log(genratedFunc(2));