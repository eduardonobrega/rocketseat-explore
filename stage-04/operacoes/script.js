let number1 = Number(prompt('Informe o 1° Número: '));
let number2 = Number(prompt('Informe o 2° Número: '));

let sum = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;
let rest = number1 % number2;

let parSum = sum % 2 == 0 ? 'Par' : 'Ímpar';

let equals = number1 == number2 ? 'iguais' : 'diferentes';

alert('A soma entre os dois números é: ' + sum)
alert('A subtração entre os dois números é: ' + subtraction)
alert('A multiplicação entre os dois números é: ' + multiplication)
alert('A divisão entre os dois números é: ' + division)
alert('O resto entre os dois números é: ' + rest)
alert('A soma entre os dois números é: ' + parSum)
alert('Os dois números são: ' + equals)