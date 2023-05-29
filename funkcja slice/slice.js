var jed = document.getElementsByClassName('cos')[0].innerText;
var jedne = document.getElementById('guzik');
jedne.addEventListener("click", function() {
    alert(jed.slice(26, 36));
});
const dwa = document.getElementById('guzikk');
dwa.addEventListener("click", function() {
    alert(jed.slice(-12, -5));
});