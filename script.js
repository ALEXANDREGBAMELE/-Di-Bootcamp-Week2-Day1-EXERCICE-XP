

       

        // Exercice 1
        let repas = "pizza";
        let meat = "dejeuner";

        console.log("Je prefère manger de la " + repas + " pour chaque " + meat)

        //Exercice 2
         // Partie I
        const myWatchedSeries = ["black mirror", "money heist", " bang theory"];

        // afficher la longueur du tableau
        const myWatchedSeriesLength= myWatchedSeries.length;
        const myWatchedSeriesSentence = "black mirror, money heist, big bang theory";

        // la phrase complète
        console.log("I watched " + myWatchedSeriesLength + " series :  " + myWatchedSeriesSentence);

        // Partie II
         //remplacer le dernier élément du tableau par #freind
  
            myWatchedSeries.splice(2,1,"freind")
            console.log(myWatchedSeries)

            // ajouter un nom de serie regarder au element du tableau
             myWatchedSeries.push("Game of Throne")
             console.log(myWatchedSeries)

             // ajouter un element au debut du tableau
             myWatchedSeries.unshift("Little Man")
             console.log(myWatchedSeries.reverse())

             // suprimer l'element black mirror
             delete myWatchedSeries[1];
             // afficher la troisieme lettere de mon tableau
            console.log(myWatchedSeries[2].slice(0,1))

            //afficher la matrice
                console.log(myWatchedSeries);

                const ajout = myWatchedSeries.push("friends");
                console.log( "l'élément : friends a été ajouter au tableau");
                console.log(ajout);

                myWatchedSeries.push("Avanger");
               
                //Exercice 3
                //conversion de temperature 
            const temperature = 37 ;
                const fahrenheit = (temperature * 5)/50+32
                console.log(fahrenheit)

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
        // Actual:'13'

        "1" - "3"
        // Prediction:-2
        // Actual: -2

        "johnny" + 5
        // Prediction:johny5
        // Actual:johny5

        "johnny" - 5
        // Prediction:NaN
        // Actual:NaN

        99 * "hello"
        // Prediction:NaN
        // Actual:NaN

        1 != 1
        // Prediction:false
        // Actual:false

        1 == "1" 
        // Prediction: true
        // Actual:true

        1 === "1"
        // Prediction:false
        // Actual:false

        // Exercice 6

        5 + "34"
        // Prediction: 534
        // Actual:'534'

        5 - "4"
        // Prediction: 1
        // Actual: 1

        10 % 5
        // Prediction:0
        // Actual:0










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
            