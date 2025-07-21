function reverseArray(arr) {
    let newArray = [];
    for(let mem of arr) {
        newArray.unshift(mem);
    }
    return newArray;
}

console.log(reverseArray(["A", "B", "C"]));

let arr = ["A", "B", "C"];
function reverseArrayInPlace(){
    for(let index = 0; index < Math.floor(arr.length /2); index++) {
        let tmp = arr[index];
        arr[index] = arr[arr.length - index - 1];
        arr[arr.length - index - 1] = tmp; 
    }
}
reverseArrayInPlace();
console.log(arr);
