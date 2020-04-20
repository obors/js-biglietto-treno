//parte iniziale del esercizio nome , cognome , colore
var hello;
var hello = alert ("Gentile cliente, grazie per utilizzare i servizzi di TrenItalia per proseguire con l'acquisto del biglieto La preghiamo di inserire i dati che Le veranno richiesti in seguito, arrivederci !!! ")

var Km;
var Km = prompt("Per favore scegliere la distanza in km da percorre:", "100");

console.log(Km);

var age = prompt('Per favore inserire l\'etá',"")
//var eta = prompt('Per favore inserire l\'anno di nascita')
console.log(age);

var price;
var price = Km * 0.21;

console.log(price);

var price20;
var price20 =  price - ((Km * 0.21) * 20 / 100);

console.log(price20);

var price40;
var price40 =  price - ((Km * 0.21) * 40 / 100);

console.log(price40);

if (age < 18 ) {
  price = price20;

}

if (age > 65 ) {
  price = price40;

}
console.log(price);


document.getElementById('createdPrice').innerHTML = price;
//document.getElementById('name').style.display = 'block';
document.getElementById('userDist').setAttribute('class', "visible") ;
//.setAttribute - la funzione che permette di aggiungere attributi in css senza modificare html e senza che JS si occupi dello stile della pagina

console.log(userDist, createdPrice );
document.writeln();
