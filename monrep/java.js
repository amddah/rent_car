var a=document.getElementById('formElem');
var date=document.getElementById('mois');
var temps=document.getElementById('time');
var lieu=document.getElementById('lieu') ;
var date1=document.getElementById('mois1');
var temps1=document.getElementById('time1');
var lieu1=document.getElementById('lieu1') ;


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
    var erreur=document.getElementById('erreur');

    if(date.value==""){
       
        alert('S’il vous plaît sélectionnez la date de charge!');
        return false;
    } if(lieu.value==""){
        alert('S’il vous plaît sélectionnez la lieu de charge!');
        return false;
    } if(date1.value==""){
       
        alert('S’il vous plaît sélectionnez la date 2!');
        return false;
    } if(lieu1.value==""){
        alert('S’il vous plaît sélectionnez la lieu de RESTITUTION:!');
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
var moi=datecharge.getMonth()+1;
var full=datecharge.getFullYear();
datecharge=day+'/'+moi+'/'+full;
var daterestitution=new Date(date1.value);
var dayrestitution=daterestitution.getDate();
var moi2=daterestitution.getMonth();
var full2=daterestitution.getFullYear();
daterestitution=dayrestitution+'/'+moi2+'/'+full2;
function calculenbrjour(){
    var dd=date1.value;
    var d1=date.value;
    var d=dd.setTime() - d1.setTime();
    var jr=d/(1000*3600*24);
    return jr;
}


function RESTITUTION(){
  /*  var datecharge=new Date(date.value);
    var day=datecharge.getDate();
    var moi=datecharge.getMonth()+1;
    var full=datecharge.getFullYear();
    datecharge=day+'/ 0'+moi+'/'+full;
   
    var daterestitution=new Date(date1.value);
    var dayrestitution=daterestitution.getDate();
    var moi2=daterestitution.getMonth();
    var full2=daterestitution.getFullYear();
   // var defejour=datecharge.getDay() - daterestitution.getDay();
  // var j= datecharge.setTime(datecharge.getDay()+50);
    //alert('day'+defejour);*/
    var w=window.innerWidth;
    if(reservation()){
        /*if(moi2<moi && full==full2 ||full2<full ){
            alert('la date de restitution n est pas valide');
            return false;
        }*/
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
       /* document.getElementById("nbrjour").innerHTML='120';
         var defejour= calculenbrjour();
         document.getElementById("nbrjour").innerHTML=defejour+"jour";*/
        return true;
    }else{
        return false;
    }
}
/************************************ */
