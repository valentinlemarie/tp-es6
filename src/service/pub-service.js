var classPub = require('../class/pub');

var liste = require('../mocks/pub.json')


function listePub() {
    var pubs = [];

    liste.forEach(pub => {
            pubs.push(new classPub.Pub(pub.name,
                pub.owner.firstName,
                pub.owner.lastName,
                pub.owner.mail,
                pub.openDays,
                pub.openHours.start,
                pub.openHours.end,
                pub.beers));
    });
    return pubs;
}




function listePubOuvert() {

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



    var pubs = [];

    liste.forEach(pub => {
        if(pub.openDays.includes(stringDate)) {
            pubs.push(new classPub.Pub(pub.name,
                pub.owner.firstName,
                pub.owner.lastName,
                pub.owner.mail,
                pub.openDays,
                pub.openHours.start,
                pub.openHours.end,
                pub.beers));
        }
    });
    return pubs;
}


module.exports = {
    listePub:listePub,
    listePubOuvert:listePubOuvert
}
