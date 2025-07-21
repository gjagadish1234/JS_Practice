function range(start, end) {
    let arr = [];
    while(start <= end) {
        arr.push(start);
        start += 1;
    }
    return arr;
}

//console.log(range(-1, 10));

function sum(...numbers) {
    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }
    return sum;
}

//console.log(sum(...range(1, 10)));


// function range(start, end, step = 1) {
//     let arr = [];
//     if (start < end && !(step > 0)) return arr;
//     if (start > end && !(step < 0)) return arr;
//     for (; step < 0? start >= end: start <= end ; start += step) {
//         arr.push(start);
//     }
//     return arr;
// }

// console.log(range(-1, -5, -2));

// author's solution
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}

console.log(range(5, 1, 1));