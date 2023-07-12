// form de contact 
var nom=document.getElementById('nom');
var email=document.getElementById('mail');
var tel=document.getElementById('tel-client');
var message=document.getElementById('message');
var submit=document.getElementById('bttn');
function valide(){
    if(nom.value=="" || !isNaN(nom.value)){
        document.getElementById('formerr').innerHTML='*vous voullez saisir votre nom ';
        return false;
    }
    if(email.value==""){
        document.getElementById('formerr').innerHTML='*vous voullez saisir votre email';
        return false;
    }
    if(tel.value==""){
        document.getElementById('formerr').innerHTML='*vous voullez saisir votre numero telephone';
        return false;
    }
    if(message.value==""){
        document.getElementById('formerr').innerHTML='*vous voullez saisir votre message';
        return false;
    }
    else{
        return true;
    }
}

/*carte de choisi votre categorie page d acuiell
document.querySelector(".liste-item").style.display="none";*/

function display(){
    var i=1;
    if(i==1)document.querySelector("#precedent").style.display="initial";
    else document.querySelector(".btnslide").style.display="none";
    document.querySelector("#liste-item-"+i).style.display="none";i++;
    document.querySelector("#liste-item-"+i).style.display="flex";

}
const pages=document.querySelectorAll(".liste-item");
const header = document.querySelector("header")
 
//*********fonction 
let pageActive = 1
var i=0
window.onload = () => {
    // On affiche la 1ère page du formulaire
    document.querySelector(".liste-item").style.display = "flex"
    // On gère les boutons "suivant"
    let boutons = document.querySelectorAll(".next")

    for(let bouton of boutons){
        bouton.addEventListener("click", pageSuivante)   
    }

    // On gère les boutons "suivant"
    boutons = document.querySelectorAll(".prec")

    for(let bouton of boutons){
        bouton.addEventListener("click", pagePrecedente)
        
    }
}

 //Cette fonction fait avancer le formulaire d'une page
 
function pageSuivante(){
    // On masque toutes les pages
    for(let page of pages){
        page.style.display = "none"
    }
     i++;//incremente le numero de la page
    // On affiche la page suivante
    document.querySelector("#liste-item-"+i).style.display="flex"
}
function pagePrecedente(){
    // On masque toutes les pages
    for(let page of pages){
        page.style.display = "none"
    }
      // On affiche la page suivante
      i--;
    document.querySelector("#liste-item-"+i).style.display="flex"
    
}
