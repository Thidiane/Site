icons.addEventListener("click", () => {
    nav.classList.toggle("active")
})
// variable body et bouton//
let body=document.querySelector('body');
let bt =document.querySelector("button");
// si fonction dark egale 1 alors mettre le fond en noir et si il est égale à 0 alors l'écran reste blanc
let x=0;
function dark(){
    if(x==0){
        body.style.background="black";
        x=1;
    }else{
        body.style.background="white";
        x=0
    }
}
bt.addEventListener("click", dark) //quand bouton cliquer evant activer