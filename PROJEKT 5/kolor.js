const checkbox = document.getElementById('trzy');
const div = document.getElementById('dwa');
const div2 = document.getElementById('cztery');
const div3 = document.getElementById('siedem');
checkbox.addEventListener("change", function (){
    if(this.checked) {
        div.classList.remove("hide_number");
        div2.classList.remove("hide_number");
        div3.classList.remove("hide_number");
    } else {
        div.classList.add("hide_number");
        div2.classList.add("hide_number");
        div3.classList.add("hide_number");
    }
});