//1

const glowa = document.querySelector('header');
console.log(glowa);
glowa.style.backgroundColor="Yellow";

//2

const one = document.querySelector('header h1')
one.style.fontFamily="Arial Black";
one.innerHTML="Preambula";
console.log(one);
//3

const dwa = document.querySelectorAll("section")
for(const element of dwa){
    element.style.border='2px solid brown';
    console.log(element)
}

//4
const cztery = document.querySelector('.main_column h1')
console.log({cztery});
    cztery.innerHTML = "Specjalność Szefa";

//5
const piec = document.querySelector('.main_column')
console.log({piec});
    //piec.append('Kebab na frytkach _-_'); -- dodawanie tekstu
const akapit = document.createElement('p');
akapit.innerHTML = "Kebab na frytkach";
console.log({akapit});
piec.appendChild(akapit);


//6
const szesc = document.querySelector("section.side_column h1")
console.log({szesc})
szesc[1].remove();






//7
//const siedem = document.querySelector("footer")
//console.log({siedem});
//const dodatek