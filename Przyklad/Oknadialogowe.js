//click
function fun(){
    alert('Możesz być z siebie dumny')
}
const ale = document.querySelector('#powiad');
ale.addEventListener('click', ()=>{fun();});
console.log(ale)
//confirm
const potw = document.querySelector('#smacznej');
potw.addEventListener('click', ()=>{conf();});
function conf(){
    let conf = confirm("Czy jesteś pewnien, że chcesz kontynuować?");
    if (conf)
        alert("Kontynuuj");
    else
        alert("Przykro mi, że nie chcesz kontynuować");
}
console.log(potw)
//promt
const por = document.querySelector('#pro');
por.addEventListener('click', ()=>{rop();});
function rop(){
    let rop = prompt("Podaj swoje imię:")
    if (rop)
        alert("witaj " + rop)
    else
        alert("Anulowałeś akcję, a okienko zwróciło " + rop )
}
console.log(por)