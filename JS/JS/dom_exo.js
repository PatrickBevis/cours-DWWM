//1
document.body.classList.add('bg-secondary');

//2
let secondCard =document.getElementById("second-card");
secondCard.classList.add("text-center");

//3
let card_body =document.getElementsByClassName("card-body");
for (let i = 0; i <card_body.length; i++) {
 const current_card_body = card_body[i];
 current_card_body.classList.add("bg-info");
    
}

//4
let affConsole = document.getElementsByClassName("card-title");
let card_texte =affConsole.innerText
console.info(affConsole);

// 5.récupérer tous les li de la page (de 2 manières différentes)
// ajouter leur la classe text-muted
// modifier leur texte en indiquant leur ordre d’apparition dans la liste suivi de list-item
// ex : 1 list-item, 2 list-item, …

document.getElementsByTagName("li")
let listOfLi = document.querySelectorAll("li")

for (const iterator of listOfLi) {
    
iterator.classList.add("text-muted")
}

let listOfUl =document.querySelectorAll("ul")

for (const ulElt of listOfUl) {
    let currentUlLiList = ulElt.querySelectorAll("li")
    for (let index = 0; index < currentUlLiList.length; index++) {
        const element = currentUlLiList[index];
        element.innerText = index +1 + "list-item"
        
    }
    
}
// 6. ajouter un élément li contenant le texte “4 list-item” à la fin de chaque ul

for (const ulElt of listOfUl) {
    ulElt.innerHTML += '<li class = "list-group-item">4 list-item</li>'
    ulElt.innerHTML = '<li class = "list-group-item">0 list-item</li>' +ulElt.innerHTML;
}

// 7. ajouter un élément li contenant le texte “0 list-item” au début de chaque ul

//8. supprimer les li impaires de chaque ul 
// let ul_List =document.querySelectorAll("ul");
// for (const element of ul_list) {
//     const il_list = element.querySelectorAll("li");
//     for (let j = 0; index <il_list.length; j++) {
//         if(j%2 == 1){
//         const li_elt =il_list[j];
//         li_elt.remove();
// }
      
        
//     }
    
// }


//Comment créer un élément HTML en JS (sans utiliser innerHTML) et l'ajouter à la fin d'un élément ?
//13. Recréer en javascript l'élément ul.nav et l'ajouter au début du footer




//Comment créer un élément HTML en JS (sans utiliser innerHTML) et l'ajouter au début d'un élément ?
//13-bis. Recréer en javascript l'élément ul.nav et l'ajouter à la fin du footer

//Comment dupliquer un élément HTML en JS pour l'ajouter au document HTML ?
//14. Dupliquer l'élément ul.nav pour l'ajouter au footer

//Comment remplacer un élément par un autre ?
//15. Remplacer chaque paragraphe "Some text ..." par un h6 contenant le text "Lorem ipsum ..."

//Comment ajouter un élément avant ou après un autre élément ?
//16. Créer en JS une div.article qui va servir de container pour chaque article (h2 h5 div.fakeimg p p)

//17. Dupliquer le premier article, en modifier la date puis l'ajouter à la fin du div.col-sm-8 qui contient tous les articles

//18. Dupliquer le premier article, en modifier la date puis pour l'ajouter au début du div.col-sm-8 qui contient tous les articles

//Comment supprimer un élément définitivement ?
//18. Supprimer le 2ème ul.nav du footer

//19. Supprimer le 1er ul.nav du footer mais le garder en mémoire pour le remettre dans le footer au bout de 5 secondes

//20. Réaliser un tirage au sort de l'euromillions
//Commencer par écrire les composant HTML/CSS qui serviront à afficher une boule et une étoile

///BONUS///
// let boulesNum
// let boulesEto

// function getRandom(min, max) {
//     return Math.round(Math.random() * (max - min) + min)
    
    
// }



// for (int i = 1; i <=49; i++)
// {
//     boulesNum.Add(i);
// }

// for (int i = 1; i <=12; i++)
// {
//     boulesEto.Add(i);
// }

// string numbers= "";
// string stars= "";

// for (int i = 0; i < 5; i++)
// {
//     int index= random.Next(0, boulesNum.Count);
//     numbers +=index + " ";
//    // Console.WriteLine($"Numero: {boulesNum[index]}");
// boulesNum.Remove(boulesNum[index]);

// }

// Console.WriteLine("Numéros: ");
// Console.WriteLine("");
// Console.WriteLine(numbers);
// Console.WriteLine("");

// for (int i = 0; i < 2; i++)
// {
//     int index= random.Next(0, boulesEto.Count);
//     stars +=index + " ";
//    // Console.WriteLine($"Numero: {boulesNum[index]}");
// boulesEto.Remove(boulesEto[index]);
// }

// Console.WriteLine("Etoiles: ");
// Console.WriteLine("");
// Console.WriteLine(stars);
// Console.WriteLine("");