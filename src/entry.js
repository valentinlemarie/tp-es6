var moment = require('moment');
import styles from './app.css'
var pubService = require('./service/pub-service');
var classPub = require('./class/pub')


var liste = pubService.listePubOuvert();

function ajoutPub(){
    var name = document.getElementById("name");
    var firsName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var mail = document.getElementById("mail");

    var date = new Date();
    var chiffreDate = date.getDay();
    var semaine = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    var stringDate = semaine[chiffreDate - 1];
    var pub = new classPub.Pub(name,firsName,lastName,mail,[stringDate],8,10,null);
    liste.push(pub);
    var element = document.getElementById("mySelect");
    var opt = document.createElement('option');
    opt.text ="Le pub "+pub.name+"appartient à "+pub.firstName+" "+pub.lastName;
    element.add(opt);
}

function sayHelloToday() {
    var element = document.createElement('div');
    var today = moment().format('dddd, MMMM Do YYYY');
    element.innerHTML = "Hello, today we are : " + today;
    element.classList.add("hello");
    return element;
}

function htmlListePub(){
    var element = document.getElementById("mySelect");

    console.log(liste);
    liste.forEach(pub => {
        var opt = document.createElement('option');
        opt.text ="Le pub "+pub.name+"appartient à "+pub.firstName+" "+pub.lastName;
        element.add(opt);
    });
}

htmlListePub();
document.body.appendChild(sayHelloToday());

