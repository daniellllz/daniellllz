// Estrutura condicional simples
// Igual duplo
const a = 10;
if (a == 10) {
console.log('a é 10');
}
const b = '10';
if (b == 10) {
console.log('b é 10');
}
// Estrutura condicional composta
console.clear();
const e = '10';
if (e === 10) console.log('e é o numeral 10');
else {
console.log(`Resultado da condição: ${e === 10}`);
console.log('e não é o numeral 10');
}
// Multiplas condições
console.clear();
const f = 4;
const g = 11;
if (f > 5 || g > 10) {
console.log(`Condição é ${f > 5 || g > 10}`);
console.log('f é maior do que 5 ou g é maior do 10');
} else console.log('f não é maior do que 5 e g não é maior do 10');
if (f > 5 && g > 10) console.log('f é maior do que 5 e g é maior do 10');
else {
console.log(`Condição é ${f > 5 && g > 10}`);
console.log('f não é maior do que 5 ou g não é maior do 10');
}