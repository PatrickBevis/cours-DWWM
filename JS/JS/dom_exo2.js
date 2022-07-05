// Comment récupérer un élément avec son id ?
// Ex 1 : récupérer l’élément #main-title de de manières différentes

let main_title = document.getElementById("main-title");



// Comment lire le texte contenu dans un élément ?
// Ex 2 : écrire dans la console le texte contenu dans l’élément #main-title

let text = main_title.innerText;
main_title.textContent;
console.log(text)


// Comment modifier le texte dans un élément ?
// Ex 3 : remplacer le texte de l’élément #main-title par “Exercices sur le DOM Javascript”

let text_main = main_title.innerText;
main_title.innerText = "Exercices sur le DOM Javascript";

// Comment lire le contenu HTML d’un élément ?
// Ex 4 : récupérer le code HTML contenu dans l’élément footer et l’écrire dans la console

let footer = document.querySelector("footer")
let footerHtml =footer.innerHTML;
let footerAllHtml = footer.outerHTML;
console.log (footerHtml)
console.log (footerAllHtml)


// Comment ajouter du contenu HTML à la fin d’un élément ? (première approche)
// Ex 5 : ajouter un élément p contenant le texte “” à la fin du footer

// let newP =document.createElement("p");
// let newTexte = document.createTextNode("Lorem ipsum dolor sit amet");

// footer.append(newP);
// newP.prepend(newTexte);

////////////OU/////////////

footer.innerHTML += '<p> Lorem ipsum dolor sit amet </p>'


// Comment ajouter une classe à un élément ?
// Ex 6 : ajouter la classe text-center au footer

footer.classList.add("text-center");

// Comment retirer une classe à un élément ?
// Ex 7 : retirer la classe text-white au footer et ajouter la classe text-info

footer.classList.remove("text-white")
footer.classList.add("text-info")
// Comment remplacer une classe par une autre pour un élément ?
// Ex 8 : remplacer la classe bg-dark par la classe bg-primary dans le footer

footer.classList.replace("bg-dark","bg-primary")

// Ex 9 : remplacer la classe text-info par la classe text-white dans le footer
footer.classList.replace("text-info","text-white")

// Comment récupérer une collection d’éléments par leur classe ?
// Ex 10 : récupérer tous les éléments .nav-item et les afficher leur texte dans la console

let nav_items = document.getElementsByClassName("nav-item");

for (const iterator of nav_items) {
   console.info(iterator.textContent);
 
}


// Ex 11 : récupérer tous les éléments .nav-item de la navbar principale et afficher l’élément dans la console
let v =document.querySelectorAll(".nav-item .navbar")
for (const iterator of v) {
    console.log(iterator)
    
}

// Ex 12 : récupérer tous les éléments .nav-item de la nav secondaire (.nav) et leur ajouter la classe p-3
let v2 =document.querySelectorAll(".nav-item .nav")
for (const iterator of v2) {
    iterator.classList.add("p-3")
    console.log(iterator)
    
}

// compte a rebours
// let cpt = 10;

// document.body.classList.add("text-center");
// document.body.classList.add("p-5");
// document.body.innerHTML = '<h1></h1>';
// const handleInterval = setInterval(function(){
//     document.querySelector('h1').innerHTML = cpt--;
//     if(cpt == -1){
//         clearInterval(handleInterval);
//         document.body.innerHTML = '<img src="img/boom.png" alt="Boom !">'
//     }
// }, 1000);



//Comment créer un élément HTML en JS (sans utiliser innerHTML) et l'ajouter à la fin d'un élément ?
//13. Recréer en javascript l'élément ul.nav et l'ajouter au début du footer


let ul_elt = document.createElement('ul');
ul_elt.classList.add("nav", "nav-pills", "flex-column");

let list_item = document.createElement('li');
list_item.classList.add("nav-item");
ul_elt.append(list_item);

let link1 = document.createElement('a');
link1.classList.add("nav-link", "active");
link1.setAttribute('href','#');
link1.innerText="active";
list_item.append(link1);

let list_item2 = document.createElement('li');
list_item2.classList.add("nav-item");
ul_elt.append(list_item2);

let link2 = document.createElement('a');
link2.classList.add("nav-link");
link2.setAttribute('href','#');
link2.innerText="link";
list_item2.append(link2);

let list_item3 = document.createElement('li');
list_item3.classList.add("nav-item");
ul_elt.append(list_item3);

let link3 = document.createElement('a');
link3.classList.add("nav-link", "disabled");
link3.setAttribute('href','#');
link3.innerText="disabled";
list_item3.append(link3);



console.log(ul_elt)

//Comment créer un élément HTML en JS (sans utiliser innerHTML) et l'ajouter au début d'un élément ?
//13-bis. Recréer en javascript l'élément ul.nav et l'ajouter à la fin du footer
footer.append(ul_elt)
//Comment dupliquer un élément HTML en JS pour l'ajouter au document HTML ?
//14. Dupliquer l'élément ul.nav pour l'ajouter au footer
let ul_elt_bis = ul_elt.cloneNode(true);
footer.prepend(ul_elt_bis)
//Comment remplacer un élément par un autre ?
//15. Remplacer chaque paragraphe "Some text ..." par un h6 contenant le text "Lorem ipsum ..."
// let firstP =document.getElementsByTagName("p");
// let newH6 = document.createElement("h6");
// newH6.innerText = "Lorem ipsum"
// for (const item of firstP) {
//     if (item.innerText ==="Some text..") {
//         let newH6_bis = newH6.cloneNode(true)
//         item.replaceWith(newH6_bis)
//     }
// }
// console.log(newH6)
//Comment ajouter un élément avant ou après un autre élément ?
//16. Créer en JS une div.article qui va servir de container pour chaque article (h2 h5 div.fakeimg p p)

let div_article_container = document.createElement("div");
div_article_container.className="article";

let div_article1= document.querySelector(".col-sm-8")
let h2_div_article1= div_article1.getElementsByTagName("h2");
let h5_div_article1 = div_article1.getElementsByTagName("h5");
let fakeimg_div_article1 = div_article1.getElementsByClassName("fakeimg");
let p_div_article1 = div_article1.getElementsByTagName("p");
div_article1.append(div_article_container)
div_article_container.append(h2_div_article1[0],h5_div_article1[0],fakeimg_div_article1[0],p_div_article1[0],p_div_article1[1]);


console.log(div_article_container);

//17. Dupliquer le premier article, en modifier la date puis l'ajouter à la fin du div.col-sm-8 qui contient tous les articles
let div_article_container
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