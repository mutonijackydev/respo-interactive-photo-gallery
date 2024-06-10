function transformString(input) {
    const len = input.length;

    if (len % 15 === 0) {
        return reverse(ascii(input));
    } else if (len % 3 === 0) {
        return reverse(input);
    } else if (len % 5 === 0) {
        return ascii(input);
    } else {
        return input;
    }
}

function reverse(str) {
    return str.split('').reverse().join('');
}

function ascii(str) {
    return str.split('').map(char => char.charCodeAt(0)).join(' ');
}

console.log(transformString("Mutoni"));
console.log(transformString("jacky"));  
console.log(transformString("pizza"));  
