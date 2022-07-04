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
