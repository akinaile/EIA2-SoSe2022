namespace randompoem {

    //Arrays: Inhalt der zufälligen Gedichte
    let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicates: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibens", "Dementoren"];
    let sentence: string = "";

    //nachfrage: obs soweit passt? ja passt
    //console.log(subjects, predicates, objects);

    //for Schleife: wenn Wert 1 erreicht ist, wird Gedicht erstellt
    for (let index: number = subjects.length; index >= 1; index--) {  //index bekommt die Länge von subjects, ist größer/gleich 1, zählt rückwärts
        if (index == 0) { //der index wird niemals null
            break;
        }
        getVerse(subjects, predicates, objects, sentence); //wenn irgendeine zahl über null ist, soll die Funktion ausgeführt werden
}

    //funktion: Arrays sollen verwendet werden, gedicht soll entstehen
    function getVerse(_subjects: string[], _predicates: string[], _objects: string[], _sentence: string): string {
       
        let randomsubject: number = Math.floor(Math.random() * subjects.length); //subject erhält eine nummer, die zufällig ist und der länge des subjects entspricht
        _sentence += _subjects.splice(randomsubject, 1) + " "; //der Satz besteht aus einem zufälligen Wort

        let randompredicate: number = Math.floor(Math.random() * predicates.length);
        _sentence += _predicates.splice(randompredicate, 1) + " ";

        let randomobject: number = Math.floor(Math.random() * objects.length);
        _sentence += _objects.splice(randomobject, 1) + " ";

        console.log(_sentence);
        return _sentence;
    }


}