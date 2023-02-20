//1
const jedynka = document.querySelector("#buton");
jedynka.addEventListener("click", function() {
    document.querySelector("#szesc").innerHTML = "<i>Świetnie</i>";
});
console.log(jedynka);
//2
const dwojka = document.querySelector("#piaty");
dwojka.addEventListener("click", function() {
    document.querySelector("#piec").innerHTML = "<i>Świetnie</i>";
});
console.log(dwojka);

//3
const trzy = document.querySelector("#buton1");
trzy.addEventListener("click", function() {
    const trzy_ele = document.querySelector("#trio strong");
    trzy.style.border='2px dotted red';
console.log(trzy_ele);
});