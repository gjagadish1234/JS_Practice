function deepEqual(var1, var2) {
    let isVar1Obj = typeof var1 == "object" && var1 !== null;
    let isVar2Obj = typeof var1 == "object" && var2 !== null;
    let isEqual = true;
    if(isVar1Obj && isVar2Obj) {
        for(let key of Object.keys(var1)) {
            if(!deepEqual(var1[key], var2[key])) {
                isEqual = false;
                break;
            }
        } 
    }else if(!isVar1Obj && !isVar2Obj) {
        return var1 === var2;
    }
    return isEqual;
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual([1, 2, 3], [1, 2]));


// author's solution
// function deepEqual(a, b) {
//     if (a === b) return true;
    
//     if (a == null || typeof a != "object" ||
//         b == null || typeof b != "object") return false;
  
//     let keysA = Object.keys(a), keysB = Object.keys(b);
  
//     if (keysA.length != keysB.length) return false;
  
//     for (let key of keysA) {
//       if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//     }
  
//     return true;
//   }