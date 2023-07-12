var a=document.getElementById('formElem');
var date=document.getElementById('mois');
var temps=document.getElementById('time');
var lieu=document.getElementById('lieu') ;
var date1=document.getElementById('mois1');
var temps1=document.getElementById('time1');
var lieu1=document.getElementById('lieu1') ;
 var erreur = document.querySelector('.erreurf');

/*function visible(c)
{
   var c;
    
    if(c.style.visibility=="visible"){
        c.style.visibility="hidden";
    }else{
        c.style.visibility="visible";
    }
}
setInterval('visible()',400)*/
function reservation(){
    //var reservation=document.getElementsByClassName('reservation');
   

    if(date.value==""){
        erreur.innerHTML='S’il vous plaît sélectionnez la date de charge!'
        return false;
    } if(lieu.value==""){
       erreur.innerHTML= 'S’il vous plaît sélectionnez la lieu de charge!';
        return false;
    } if(date1.value==""){  
       erreur.innerHTML= 'S’il vous plaît sélectionnez la date 2!';
        return false;
    } if(lieu1.value==""){
       erreur.innerHTML= 'S’il vous plaît sélectionnez la lieu de RESTITUTION:!';
        return false;
    }
    else{
        
        return true;
    }
}

document.querySelector("#datareservation").style.display="none";
var responsive=document.querySelector("#datareservation");
var datecharge=new Date(date.value);
var day=datecharge.getDate();
var full=datecharge.getFullYear();
var daterestitution=new Date(date1.value);
var moi2=daterestitution.getMonth();
var full2=daterestitution.getFullYear();
daterestitution=dayrestitution+'/'+moi2+'/'+full2;



function RESTITUTION(){
    var w=window.innerWidth;
    var dat1 = new Date(date.value); 
    var dat2 = new Date(date1.value); 
    var Diff_temps = dat2.getTime() - dat1.getTime(); 
    var Diff_jours = Diff_temps /(1000*3600 * 24);
   
    if(reservation()){
        if(dat2.getTime() < dat1.getTime()){
            erreur.innerHTML='Votre date de restitution doit être postérieure à la date de prise en charge'
            return false;
        }
        if(document.querySelector("#datareservation").style.display="none"){
           if(w > 1024){ document.querySelector("#datareservation").style.display="flex";
            }else {
            document.querySelector("#datareservation").style.display="block";
            }
        } 
        document.getElementById('charge').innerHTML=date.value;
        document.getElementById('charge1').innerHTML=date1.value;
        document.getElementById('lieucharge').innerHTML=lieu.value;
        document.getElementById('lieucharge1').innerHTML=lieu1.value;
        document.getElementById('temps').innerHTML=" "+temps.value;
        document.getElementById('temps1').innerHTML=" "+temps1.value;
         document.getElementById("nbrjour").innerHTML=Math.round(Diff_jours);
        return true;
    }else{
        return false;
    }
}
/************************************ */
