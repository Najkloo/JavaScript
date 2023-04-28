const USERNUMBER = prompt("Podaj jakąś liczbę");
const SPANNUMBERS = document.getElementsByClassName('dwa');
document.getElementById('pierwsza').innerText = ("Podana liczba: " + USERNUMBER);
for (const num of SPANNUMBERS)
{
num.innerText = USERNUMBER;

}
document.getElementById('je').innerText = Math.abs(USERNUMBER);
document.getElementById('dw').innerText = Math.ceil(USERNUMBER);
document.getElementById('trz').innerText = Math.floor(USERNUMBER);
document.getElementById('czt').innerText = Math.min(USERNUMBER);
document.getElementById('pie').innerText = Math.max(USERNUMBER);
document.getElementById('sze').innerText = Math.pow(USERNUMBER,2);
document.getElementById('sie').innerText = Math.sqrt(USERNUMBER);