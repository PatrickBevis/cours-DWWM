//Exo 21
//Créer un btn qui affiche un message dans la page au clic

let button = document.querySelector('.btn')
button.onclick = function(){
    alert("Coucou");
}

//Exo 22
//Créer un formulaire avec un input[type="text"] et un btn
//au clic sur le btn, afficher dans la page le texte saisi par l'utilisateur
let afficher = document.getElementById("button22")
let message = document.getElementById("text1")

afficher.onclick = function(){

   alert(message.value);
    
}



//Exo 23
//Créer un btn qui affiche/masque un texte dans la page






//Exo 24 : créer un formulaire de connexion : pseudo/password
//au clic sur le bouton connexion si le pseudo/password sont dans la liste suivante
//afficher un message genre Bienvenu pseudo !
//sinon afficher la ou les erreurs (pseudo inéxistant ou mot de passe incorrect)
//admin/azerty
//user/poiuyt


//Exo 25 : créer un bouton qui disparaît quand on clic dessus

//Exo 26 : créer un formulaire avec un input[type="text"] un bouton et un select
//au clic sur le bouton, récupérer le texte saisi dans l'input, si le texte saisi n'est pas vide l'ajouter alors en option dans le select

//Exo 27 : créer un formulaire avec un input[type="text"] et un bouton
//au clic sur le bouton, récupérer le texte saisi dans l'input et vérifier que ce texte contient au moins 6 caractères
//dont au moins une minuscule et une majuscule
//si ça n'est pas le cas afficher un message d'indication à l'utilisateur

//Exo 28 : créer 2 select
//Dans le 1er select insérer les options "Fruits" et "Légumes"
//Le 2ème select est vide (pas d'option)
//Lors de la sélection d'une option dans le premier select il faut ajouter des options dans le 2ème select 
//en fonction de l'option du 1er select qui a été choisie
//Si l'option "Fruits" est choisie, ajouter les options "Bananes", "Fraises" et "Pommes" au 2ème select
//Si l'option "Légumes" est choisie, ajouter les options "Carottes", "Navets", et "Tomates" au 2ème select
//voir l'évènement onchange