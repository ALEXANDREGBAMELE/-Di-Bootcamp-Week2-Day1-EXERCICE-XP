

// Partie I

// Exercice 1
let repas = "pizza";
let meat = "dejeuner";

console.log("Je prefère manger de la " + repas + " pour chaque " + meat)

//Exercice 2
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength= myWatchedSeries.length;
console.log(myWatchedSeries);

// variable decrivant une serie regardé : litte man
const myWatchedSeriesSentence = "black mirror, money heist, and the big bang theory";

console.log("I watched " + myWatchedSeriesLength + " series :  " + myWatchedSeriesSentence);


// Partie II
// remplacer le dernier élément du tableau

Array.prototype.remove = function(value) {
	this.splice(this.indexOf(value), 1);



    var re = /(\w+)\s(\w+)/;
var chn = 'Jean Martin';
var nouvChn = chn.replace( "$2, $1");
console.log(nouvChn); // Martin, Jean

}

var arr =  [1, 2, 4, 3, 5];
var item = 2;

arr.remove(item);
console.log(arr);

const suppri = myWatchedSeries.pop(1);
console.log( "l'élément : " + suppri+" a été supprimé du tableau");
console.log(myWatchedSeries);

const ajout = myWatchedSeries.push("friends");
console.log( "l'élément : friends a été ajouter au tableau");
console.log(myWatchedSeries);
//Exercice 3