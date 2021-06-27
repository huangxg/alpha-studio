let number = 255,
    binary = 0b11111111,
    octal = 0o377,
    hex = 0xff;

console.log(binary);
console.log(octal);
console.log(hex);

console.log('Decimal: ' + number.toString())
console.log('Binary: ' + number.toString(2))
console.log('Octal: ' + number.toString(8))
console.log('Hex: ' + number.toString(16))
