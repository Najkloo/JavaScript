const a = 10;
const b = 20;

console.log('sprawdzam warunek: b > a');
console.log(b > 0);

console.log('sprawdzam warunek: b < a');
console.log(b < 0);

console.log('sprawdzam warunek: b === a');
console.log(b === 0);

const nr = prompt("Podaj jakąś liczbę");

if (nr > 20) {
    console.log("Liczba jest więszka od 20");
} else {
    console.log("Liczba jest mniejsza lub równa 20");
}

if ("7" > 5) {
    console.log("Liczba 7 jest większa od 5");
}

console.log("ab" > "aa");
console.log("abc" > "acc");
console.log("abc" > "abcd");

const rond = Math.random() * 10;
console.log(rond)
if (rond < 3) {
    console.log("Liczba jest mniejsza od 3");
    console.log(rond < 3);
} else if (rond << 6) {
    console.log("Liczba jest mniejsza lub równa 6");
    console.log(rond <= 6);
} else {
    console.log("Liczba jest większa od 6");
    console.log(rond > 6);
}

const i = -11;
let sign = "";
if (i > 0) {
    sign = 'dodatnia';
} else {
    sign = 'ujemna';
}
console.log(sign)

const short = (i > 0) ? 'dodatnia' : 'ujemna';
console.log(short)

const x = 23;
const isEven = (x % 2 === 0) ? 'parzysta' : 'nieparzysta';
console.log(isEven);