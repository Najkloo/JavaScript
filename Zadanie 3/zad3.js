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

//4
const cztery = document.querySelector("#guzik")
cztery.addEventListener("click", function() {
    const czwora = document.querySelector("#para");
    czwora.getAttribute('title')
    alert(czwora.title)
    console.log(czwora);
});

//5
const piec = document.querySelector("#guzika")
piec.addEventListener("click", function() {
    const piata = document.querySelector("#paragraf");
    piata.setAttribute('dir', 'rtl');
    console.log(piata);
});

//6
const szesc = document.querySelector("#guziczek")
szesc.addEventListener("click", function() {
    const szosta = document.querySelector("#putek");
    if(szosta.hasAttribute('disabled')) {
        document.getElementById('putek').disabled = false
        szosta.innerHTML = 'Można edytować';
    }
    else
    {
        document.getElementById('putek').disabled = true
        szosta.innerHTML = 'Nie mozna edytować'
    }


        console.log(szosta)
    }
);

