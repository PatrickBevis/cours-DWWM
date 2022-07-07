//Exo 21
//Créer un btn qui affiche un message dans la page au clic

let button = document.querySelector('#button21')
button.onclick = () => {
    document.querySelector('#message').innerText ='hello World';
}

//Exo 22
//Créer un formulaire avec un input[type="text"] et un btn
//au clic sur le btn, afficher dans la page le texte saisi par l'utilisateur
const afficher = document.getElementById("button22")


afficher.onclick = () => {
    
    const text = document.getElementById("text1");
    const message2= document.getElementById("message2");
    message2.innerText = text.value;
}



//Exo 23
//Créer un btn qui affiche/masque un texte dans la page

const btn3 = document.getElementById("button23");
btn3.onclick =(event)=>{
    const message3 = document.getElementById("message3");
    if(message3.hasAttribute("hidden")){
        message3.removeAttribute("hidden");
    } else{
        message3.setAttribute("hidden", true)
    }
    
}



//Exo 24 : créer un formulaire de connexion : pseudo/password
//au clic sur le bouton connexion si le pseudo/password sont dans la liste suivante
//afficher un message genre Bienvenu pseudo !
//sinon afficher la ou les erreurs (pseudo inéxistant ou mot de passe incorrect)
//admin/azerty
//user/poiuyt

let tbpseudo = ["admin","user"]
let tbpassword= ["azerty","poiuyt"]

const pseudo = document.getElementById("pseudo");
const password = document.getElementById("mdp");
const message4 = document.getElementById("message4");
const btn4 = document.getElementById("button24");

btn4.onclick = () => {
    for (let i = 0; i < tbpseudo.length; i++) {
    
        if(pseudo.value === tbpseudo[i] && password.value ===tbpassword[i]){
            message4.innerText = `Bienvenue ${pseudo.value}`;
            break;
        }if (pseudo.value === tbpseudo[i] && password.value !=tbpassword[i]){
            message4.innerText = "Mot de passe foireux";
            message4.style.color ="red"
            break;
        }if (pseudo.value!= tbpseudo[i] && password.value ===tbpassword[i]){
            message4.innerText = "Vous etes qui vous ?";
            break;
    }else{
            message4.innerText = "Pas bon !";

        }
     }
    }







//Exo 25 : créer un bouton qui disparaît quand on clic dessus

const btn5 =  document.getElementById("button25").onclick = (event) => {
event.currentTarget.setAttribute("hidden", true)
};


//Exo 26 : créer un formulaire avec un input[type="text"] un bouton et un select
//au clic sur le bouton, récupérer le texte saisi dans l'input, si le texte saisi n'est pas vide l'ajouter alors en option dans le select

document.getElementById("button26").onclick = (evt) => {
    evt.preventDefault();
    const saisie = document.getElementById("input1").value;
    if(saisie != "" && saisie.trim() != ""){
        const option = document.createElement('option');
        option.value = saisie;
        option.innerText = saisie;
        document.getElementById("select").append(option);
    }
    document.getElementById("input1").value = "";
}


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