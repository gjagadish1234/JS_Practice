// let test = 1;
// console.log(test);
// {
//     let test = 2;
//     console.log(test);
// }
// console.log(test = 5);
// if(test = 0){
//     let test = 3;
//     console.log(test);

// }

// {
//     const halve = function(n) {
//         return n / 2;
//     }

//     console.log(halve(4));
//     console.log(halve(2));
// }

// minus(1);
// minus(2, 3);
// minus(2, null);
// minus(3, undefined);

// function minus (a, b = 1) {
//     console.log(a, b);
// }
// let m = 2;
// function returnClosure(){
//     let m = 3;
//     let n = 3;
//     return o => {
//         console.log(m, n, o, 'Result', m * n * o);
//     };
// }

// let mul1 = returnClosure();
// let mul2 = returnClosure();
// mul1(1);
// mul2(2);

// let target = 5;
// let sequence = '';
// let number = 1;
// while(number < target) {
//     if (number + 5 <= target) {
//         number += 5;
//         sequence += ' 5';
//     } else {
//         break;
//     }
//     if (number * 3 <= target) {
//         number *= 3;
//         sequence += ' 3';
//     } else {
//         break;
//     }
// }

// if (number == target) console.log(sequence.trim());
// else console.log('Cannot be reached');


let sum = 0;
function printEvenSum(n) {
    if (n === 0) return;
    if (n % 2 == 0) {
        sum += n;
    }
    printEvenSum(n - 1);
}
printEvenSum(10);
console.log(sum);

