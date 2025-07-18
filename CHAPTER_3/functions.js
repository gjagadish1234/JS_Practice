// function min(num1, num2) {
//     if (num1 < num2) return num1
//     else if(num2 < num1) return num2
//     else return 'Equal';
// }

// console.log(min(1, 2));
// console.log(min(3, 1));
// console.log(min(1, 1));

//Max call stack error
// function isEven(num) {
//     if(num == 0) return true;
//     if(num == -1) return false;
//     return isEven(num-2);
// }

// console.log(isEven(50));
// console.log(isEven(75));

//Solution
function isEven(num) {
    if(num == 0) return true;
    else if(num == 1) return false;
    else if(num < 0) return isEven(-num);
    else return isEven(num - 2);    
}
console.log(isEven(-2));

function countBs(str) {
    let count = 0;
    for(let index = 0; index < str.length; index++) {
        if(str[index] == 'B') {
            count++;
        }
    }
    return count;
}

//console.log(countBs('jabBga'));

function countChar(str, char){
    let count = 0;
    for(let index = 0; index < str.length; index++) {
        if(str[index] == char) {
            count++;
        }
    }
    return count;
}

function countBs(str) {
   return countChar(str, 'B');
}

console.log(countChar('jabBga', 'a'));