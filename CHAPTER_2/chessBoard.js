let size = 8;
let output = '';
for(let row = 0; row < size; row++) {
    let op = '';
    for (let col = 0; col < size; col++) {
       (row + col) % 2 == 0? op += ' ': op += '#'; 

    }
    output += op + '\n';
}

//console.log(output);


//solution
let size1 = 8;
let board = '';
for(let row = 0; row < size1; row++) {
    for (let col = 0; col < size1; col++) {
       (row + col) % 2 == 0? board += ' ': board += '#'; 

    }
    board += '\n';
}

console.log(board);