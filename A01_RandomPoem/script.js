"use strict";
var randompoem;
(function (randompoem) {
    //Arrays: Inhalt der zufälligen Gedichte
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibens", "Dementoren"];
    let sentence = "";
    //nachfrage: obs soweit passt? ja passt
    //console.log(subjects, predicates, objects);
    //for Schleife: wenn Wert 1 erreicht ist, wird Gedicht erstellt
    for (let index = subjects.length; index >= 1; index--) { //index bekommt die Länge von subjects, ist größer/gleich 1, zählt rückwärts
        if (index == 0) { //der index wird niemals null
            break;
        }
        getVerse(subjects, predicates, objects, sentence); //wenn irgendeine zahl über null ist, soll die Funktion ausgeführt werden
    }
    //funktion: Arrays sollen verwendet werden, gedicht soll entstehen
    function getVerse(_subjects, _predicates, _objects, _sentence) {
        let randomsubject = Math.floor(Math.random() * subjects.length); //subject erhält eine nummer, die zufällig ist und der länge des subjects entspricht
        _sentence += _subjects.splice(randomsubject, 1) + " "; //der Satz besteht aus einem zufälligen Wort
        let randompredicate = Math.floor(Math.random() * predicates.length);
        _sentence += _predicates.splice(randompredicate, 1) + " ";
        let randomobject = Math.floor(Math.random() * objects.length);
        _sentence += _objects.splice(randomobject, 1) + " ";
        console.log(_sentence);
        return _sentence;
    }
})(randompoem || (randompoem = {}));
//# sourceMappingURL=script.js.map