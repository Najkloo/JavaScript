//let i = 1;
//while(i<=10){
//    console.log('i = ' +i);
//    i++;
//}

const generuj = document.getElementById("guzik");
generuj.addEventListener("click", function() {
const kolumnyinput = document.getElementById("kolumny")
const kolumny = parseInt(kolumnyinput.value)
    console.log('LICZBA KOLUMN' + kolumny)


})
    const wierszeinput = document.getElementById('wiersze')
    const wiersze = parseInt(wierszeinput.value)
    console.log('LICZBA WIERSZY' + wiersze)

    let W = 1;
    while(W<=wiersze){
        document.createElement('tr')
        let K = 1;
        while(K<=kolumny) {
            document.createElement('td')
        }
    }
})
