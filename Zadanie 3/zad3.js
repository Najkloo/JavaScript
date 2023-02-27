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
//7
const siedem = document.querySelector('#guzik7')
siedem.addEventListener("click", function () {
    const siodmy = document.querySelector('#ps7')
    const sieben = document.querySelector('#pa7')
    siodmy.removeAttribute('style')
    sieben.removeAttribute('href')

    console.log(siodmy);
    console.log(sieben);
})



//8
document.querySelector('#dataset-attributes-button').addEventListener("click", function (){
    const osmy = document.querySelector('#dataset-attributes-element');
    console.log(osmy.dataset);
    console.log(osmy.attributes);
    const osiem = document.querySelector('#dataset-attributes-container');
    for (const attribute of osiem.attributes) {
        let  para = document.createElement("p");
        para.innerHTML = "Atrybut: <b>" + attribute.nodeName +
            "</b> ma wartość </b>" + attribute.nodeValue + "</b>";
        osiem.appendChild(para);
    }
});

//9
const dzie = document.querySelector('#guzik9')
dzie.addEventListener("click", function () {
    let letters = '0123456789ABCDEF';
    let index1 = Math.floor(=Math.random())
    let index2 =
    let index3 =
    let index4 =
    let index5 =
    let index6 =

    console.log(dzie);
});

