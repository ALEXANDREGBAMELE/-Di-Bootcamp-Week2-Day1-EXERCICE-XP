

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
  
            myWatchedSeries.splice(0,1,"je te rempace ici")
            console.log(myWatchedSeries)

        //const remplacer= myWatchedSeries.replace(1);
        //console.log( "l'élément : " + suppri+" a été supprimé du tableau");
        console.log(myWatchedSeries);

        const ajout = myWatchedSeries.push("friends");
        console.log( "l'élément : friends a été ajouter au tableau");
        console.log(ajout);

        myWatchedSeries.push("Avanger");
        //consile.log(myWatchedSeries)

        // ajouter une autre serie preferé à la fin des éléments du tableau

        //Exercice 3
        //conversion de temperature 
       const temperature = 37 ;
        const fahrenheit = (temperature * 5)/50+32
        alert(fahrenheit)

        //Exercice 4

        let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //
    // Prediction: resultat 55 car a et b sont des nombre
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: resultat 23 car les deux son des nombres et les deux variable a= 34 et a=2 il y a ecrasement de la premirer a
    // Actual: 23;

    console.log(3 + 4 + '5'); // on obtiendra 75 ;


    //Exercice 5

    typeof(15)
// Prediction:number
// Actual:number

typeof(5.5)
// Prediction:number
// Actual:number

typeof(NaN)
// Prediction:boolean
// Actual:boolean

typeof("hello")
// Prediction:string
// Actual:string

typeof(true)
// Prediction:boolean
// Actual:

typeof(1 != 2)
// Prediction:boolean
// Actual:boolean

"hamburger" + "s"
// Prediction:hambergers
// Actual: hambergers

"hamburgers" - "s"
// Prediction: false
// Actual:false

"1" + "3" 
// Prediction:13
// Actual:13

"1" - "3"
// Prediction:
// Actual:

"johnny" + 5
// Prediction:
// Actual:

"johnny" - 5
// Prediction:
// Actual:

99 * "hello"
// Prediction:
// Actual:

1 != 1
// Prediction:
// Actual:

1 == "1"
// Prediction:
// Actual:

1 === "1"
// Prediction:
// Actual:

// Exercice 6

5 + "34"
// Prediction:
// Actual:

5 - "4"
// Prediction:
// Actual:

10 % 5
// Prediction:
// Actual:

5 % 10
// Prediction:
// Actual:

"Java" + "Script"
// Prediction:
// Actual:

" " + " "
// Prediction:
// Actual:

" " + 0
// Prediction:
// Actual:

true + true
// Prediction:
// Actual:

true + false
// Prediction:
// Actual:

false + true
// Prediction:
// Actual:

false - true
// Prediction:
// Actual:

!true
// Prediction:
// Actual:

3 - 4
// Prediction:
// Actual:

"Bob" - "bill"
// Prediction:
// Actual:
    