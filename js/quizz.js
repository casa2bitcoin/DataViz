

var current_index = 0 ;

var questionnaire = new Array();


//QUESTION 1
questionnaire[0] = new Array();
questionnaire[0][0] = " Que représente  la consommation électrique d’une transaction bitcoin?";
questionnaire[0][1] = "img/planete.png";
questionnaire[0][2] = new Array("Celle d’un  ménage français pendant 1 journée","Celle d’un  ménage français pendant 2 semaines","Celle d’un  ménage français pendant 1 mois");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[0][3] = "Celle d’un  ménage français pendant 2 semaines";
questionnaire[0][4] = "Exactement! Chaque transaction représente 271 kWh et il y en a environ 300 000 par jour";
questionnaire[0][5] = "Non, essayez à nouveau!";



//QUESTION 2
questionnaire[1] = new Array();
questionnaire[1][0] = " Que représente la consommation électrique de toutes les transactions bitcoin sur un an? ";
questionnaire[1][1] = "img/planete.png";
questionnaire[1][2] = new Array("Celle du Maroc en un jour","Celle du Maroc en un mois","Celle du Maroc en un an");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[1][3] = "Celle du Maroc en un an";
questionnaire[1][4] = "Bonne réponse! Cela représente 0.14% de la consommation d’électricité mondiale";
questionnaire[1][5] = "Non, il faut voir plus grand...";





//QUESTION 3
questionnaire[2] = new Array();
questionnaire[2][0] = "Que représente la production d’une heure d’une mine de bitcoin en termes de CO2?";
questionnaire[2][1] = "img/paris_m.jpg";
questionnaire[2][2] = new Array("Un trajet  Paris - Marseille  en voiture","28 trajets  Paris - Marseille  en voiture","262 trajets  Paris - Marseille  en voiture");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[2][3] = "262 trajets  Paris - Marseille  en voiture" ;
questionnaire[2][4] = "C'est juste! Une mine est responsable de 8 000 à 13 000 kg d'émissions de CO2 par Bitcoin";
questionnaire[2][5] = "Non, c'est bien plus que ce que vous n'imaginez.";


function compare(a,b){
    if (a == b){
        document.getElementById("question1-feedback").innerHTML = questionnaire[current_index][4];

    }else{
         document.getElementById("question1-feedback").innerHTML = questionnaire[current_index][5];


    }

}

function changerQuestion(){
if ( current_index+1 == questionnaire.length){
           swal("Bravo!", "Vous êtes allé au bout de l'aventure bitcoin...", "success");
            show_quizz(0);
           document.getElementById("question1-feedback").innerHTML = "Veuillez cliquer sur la bonne réponse"
        }
else{
    show_quizz((current_index+1));
  document.getElementById("question1-feedback").innerHTML = "Veuillez cliquer sur la bonne réponse";
}

}


function show_quizz(index){
current_index = index;
document.getElementById("question").innerHTML = questionnaire[index][0];
//document.getElementById("img").src = questionnaire[index][1];
reponses = document.getElementById("reponses");
reponses.innerHTML = "";
for (var i = 0; i < questionnaire[index][2].length ; i++){
    reponses.innerHTML += "<input type='button' value='"+questionnaire[index][2][i]+"' onclick=\"compare(\'"+questionnaire[index][2][i]+"\',\'"+questionnaire[index][3]+"\');\" /> <br />";

}

}







