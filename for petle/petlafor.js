const jednen = document.getElementById('cos');

for (let i = 0; i < 100; i++){
    let put = document.createElement('input');
    put.setAttribute('id', 'input' + i);
    put.setAttribute('name', 'input' + i);
    put.setAttribute('style', 'margin: 10px; box-shadow: 5px 5px lightblue ');
    put.setAttribute('placeholder', 'Element numer ' + (i + 1));

    const kolumna = Math.floor(1/20);
    const kolumnid = 'column' + kolumna;
    const column = document.getElementById('kolumnid');

    if (!column){
        kolum = document.createElement('div')
        kolum.setAttribute('class', 'column')
        kolum.setAttribute('id', kolumnid)
        jednen.appendChild(kolum);
    }
    kolum.appendChild(put)
    kolum.appendChild(put)
}