let symbol = '';
for(let counter = 0; counter < 7; counter++) {
    symbol = symbol + '#';
    console.log(symbol);
}

symbol = '';
while(symbol.length < 7) {
    symbol += '#';
    console.log(symbol);
}


//soultion
for(let line = '#'; line.length < 8; line += '#') {
    console.log(line);
}