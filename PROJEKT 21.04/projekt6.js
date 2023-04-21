let miesiac = Math.floor(Math.random() * 15) + 1;
console.log(miesiac)
let text = "";
switch (miesiac){
    case 1:
    case 2:
    case 3:
        text = "I kwartał";
        break;
    case 4:
    case 5:
    case 6:
        text = "II kwartał";
        break;
    case 7:
    case 8:
    case 9:
        text = "III kwartał";
        break;
    case 10:
    case 11:
    case 12:
        text = "IV kwartał";
        break;
    default:
        text = "Błędny numer miesiąca";
}
document.getElementById('mies').innerHTML = text;
document.getElementById('numer').innerHTML = miesiac;