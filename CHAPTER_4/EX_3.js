function arrayToList(arr) {
    let list = null;
    for(;arr.length;) {
        list = prepend(arr.pop(), list);
    }
    return list;
}

function prepend(element, list) {
    return {value: element, rest: list};
}

console.log(arrayToList([10, 20]));

function listToArray(list) {
    let arr = [];
    let index = 0;
    while(true) {
        let ele = nth(list, index);
        if (ele) arr.push(ele)
        else break;
        index += 1
    }
    return arr;
}

function nth(list, pos) {
    if(pos == 0) return list.value;
    else if(list.rest == null) return undefined;
    else return nth(list.rest, pos - 1);
}

//console.log(nth(arrayToList([1, 2, 3]), 4));

console.log(listToArray(arrayToList([10, 20])));



///Author's solution
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  
  function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
  
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20