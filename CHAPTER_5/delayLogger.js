//Fix the classic closure bug. modify te loop so it logs 0 to 4 correctly after the delay

for(var i=0; i<5; i++) {
    setTimeout(() => console.log(i), 100);
}

// Logs 5,5,5,5,5

//Fix:

for(let i=0; i<5; i++) {
    setTimeout(() => console.log(i), 100);
}