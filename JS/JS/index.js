// //alert("Coucou");

// let maVariable="du texte";

// maVariable=10;

// maVariable=10,5

// maVariable=true;

// const pi = 3.1415;

// //alert(maVariable);

// maVariable = +prompt("Quel age avez-vous ?");

// console.log(maVariable);

// maVariable = confirm("Etes vous majeur ?")

// console.log(maVariable)

// let deux = "2";

// let deuxAussi =2;
// let comparaison = deux === deuxAussi //false diff de types
// let bp=true;


//Ex:0

//alert("Hello World");


//Ex:1

// let nom= prompt("Saisissez votre nom");
// let prenom= prompt("Saisissez votre prénom");
// console.log(nom+" "+prenom);

//Ex2:

// let nb1 = +prompt("Saisir premier nombre");
// let nb2 = +prompt("Saisir deuxieme nombre");
// let somme = (nb1+nb2);
// console.log(somme);

//Ex3

// let age= +prompt("Saisir votre age");
// if(age>=18){
//     console.log("majeur");
// }
// else{
//     console.log("mineur");
// }

//Ex4

// let mot1 =prompt("Saisir premier mot");
// let mot2 =prompt("Saisir deuxieme mot");
// let mot3 =prompt("Saisir troisieme mot");

// // if(mot1<mot2){
// //     console.log(mot1);
// // }else if(mot2<mot3){
// //     console.log(mot2);
// // }else if(mot3<mot1) {
// //     console.log(mot3);
// // }
// let tab =[mot1,mot2,mot3]
// let tri = tab.sort();
// console.log(tri);

//Ex5

// let nb1 = +prompt("Saisir un premier nombre");
// let nb2 = +prompt("Saisir un deuxieme nombre");
// let result;
// let operation= prompt("Saisir une opération");
// switch(operation){
//     case "+":
//     result=nb1+nb2;
//     console.log(result);
//     break;
//     case "-":
//     result=nb1-nb2;
//     console.log(result);
//     break;
//     case "*":
//     result=nb1*nb2;
//     console.log(result);
//     break;
//     case "/":
//     result=nb1/nb2;
//     console.log(result);
//     break;
// }

//Ex6

// let nombre = +prompt("Saisir un nombre")

// if(nombre%2 == 0){
//     console.log("pair");
// }else{
//     console.log("impair");
// }

// Exo 7 : Écrire un algorithme qui demande à l’utilisateur de saisir l'âge de son enfant et qui lui affiche 
// dans quelle catégorie celui-ci jouera au foot cette saison.
// Moins de 5 ans : pas possible de s’inscrire !
// 5-6 ans : baby foot
// 7-8 ans : poussins
// 9-10 ans : pupilles
// 11-12 ans : minimes
// 13-14 ans : cadets
// 15-16-17 ans : junior
// 18 ans et + : ça n’est plus un enfant

// let categorie = +prompt("Saisir un une catégorie d'age");

// switch(true){
//     case categorie < 5:
        
//         console.log ("no possible");
//         break;
//     case categorie == 5 || categorie == 6:
        
//         console.log ("baby foot");
//         break;
//     case categorie == 7 || categorie == 8:
        
//         console.log ("poussins");
//         break;
//     case categorie == 9 || categorie == 10:
        
//         console.log ("pupilles");
//         break;
//     case categorie == 11 || categorie == 12:
        
//         console.log ("minimes");
//         break;   
//     case categorie == 13 || categorie == 14:
        
//         console.log ("cadets");
//         break;  
//     case categorie == 15 || categorie == 16 || categorie == 17:
        
//         console.log ("junior");
//         break;    
//     case categorie >=18:
        
//         console.log ("vieux");
//         break;  
   
// }

// Exo 8 : Écrire une fonction qui prend un nombre entier de minutes en paramètre et le convertit en secondes
 // Exo 9 : Écrire ensuite un algorithme qui demande un nombre de minutes à l’utilisateur et lui affiche combien cela fait en secondes
// function convertSec(mins){
// return mins*60
// }

// console.log(convertSec(prompt("donne des minutes")));




// Exo 10 : Écrire une fonction qui prend 2 nombres en paramètres et retourne le plus petit
// Exo 11 : Écrire une fonction qui prend 2 nombres en paramètres et retourne le plus grand

// function plusPetit(nombre1,nombre2){
//     if(nombre1<nombre2){
//    return nombre1;}
//    else{return nombre2
// }

// }
// console.log(plusPetit(5,2))

// function plusGrand(nombre1,nombre2){
//     if(nombre1>nombre2){
//    return nombre1;}
//    else{return nombre2
// }

// }
// console.log(plusGrand(5,2))

// Exo 12 : Écrire un algo qui demande à l’utilisateur de saisir une note (nombre compris entre 0 et 20), si la saisie n’est pas valide l’indiquer à l’utilisateur

// let note =+prompt("Veuillez saisir une note");

// if(note>=0 && note <= 20){
//     console.log(note);
// }else {
//     console.log("Saisie non valide")
// }



// Exo 13 :  Écrire un algo qui demande à l’utilisateur de saisir une note (nombre compris entre 0 et 20), tant que la saisie n’est pas valide l’indiquer à 
// l’utilisateur et lui demander de saisir à nouveau une note


// let note =+prompt("Veuillez saisir une note");

// while(!(note>=0 && note <= 20)){
//     note =+prompt("Veuillez saisir une note");
//     console.log(note>=0 && note <= 20)
// }

// Exo 14 : Écrire un algorithme qui demande un nombre de départ compris entre 1 et 10, et qui ensuite écrit la table de multiplication de ce 
// nombre dans la console, présentée comme suit (cas où l'utilisateur entre le nombre 5) 
// 5x1 = 5 
// 5x2 = 10 
// 5x3 = 15 
// … 
// 5x10 = 50

// let nombre = +prompt("Saisir un nombre entre 1 et 10")
// while(!(nombre>=1 && nombre <= 10)){
//              nombre =+prompt("Veuillez saisir un nombre entre 1 et 10");
             
//          }
// for (let i = 1; i <= 10; i++) {
    
//     console.log(nombre*i);
// }

// Exo 15 : Écrire le code nécessaire pour déclarer et remplir un tableau contenant les six voyelles de l’alphabet latin

// let tabVoyelles = ["A","E","I","O","U","Y"]





// Exo 16 :  Écrivez une fonction calculant la somme des valeurs numériques d’un tableau




function sumArray(tab){
let result =0;
for (let i = 0; i < tab; i++) {
    
result += tab[i];

    
    
}return result;
}



// Exo 17 : Écrivez une fonction calculant la factorielle d’un nombre entier positif passé en paramètre

function CalcFactorielle(n){
  let result =1;

for( let i=1; i <= n; i++){
    result*=i;
}

   return result;

}



// Exo 18 : Écrivez un algorithme qui écrit lettre par lettre le contenu d’une variable de type string

let tab = ["gredin", "tarte"]
array.forEach(element => {
    
});





// Exo 19 : Écrire un algo qui permet de saisir les notes d’un élève pour en calculer la moyenne (Attention au contrôle de saisie)
// On commence par demander à l’utilisateur combien de notes il souhaite saisir.
// Une fois toutes les notes saisies, on calcule la moyenne puis on affiche note min, note max et moyenne