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
console.info(affConsole);

//5
// let li_list =document.getElementsByClassName("list-group-item")
// for (let i = 0; i < li_list.length; i++) {
//     const element = li_list[i];
//     element.classList.add("text-muted");

//     let ul_list = document.getElementsByTagName("list-group")
//         for (let j = 0; j < element.length; j++) {
//             const element2 = array [j];
            
//         }
// }

let listeUl = document.getElementsByClassName("list-group");

for (let index = 0; index < listeUl.length; index++) {
// A chaque liste de ul ..
    let listeLi = document.getElementsByClassName("list-group-item");

    for (let i = 0; i < listeLi.length; i++) {
        const elementCourant = listeLi[i];
        elementCourant.classList.add("text-muted");

        let positionNb = String(i + 1);
        elementCourant.innerText = positionNb + " list-item";
    }
}