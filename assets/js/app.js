function CalculGain() {
  //On vérifie les inputs
  CheckInputs();


  //On récupére le formulaire dans le html
  let myForm = document.getElementById("formCalculGain");
  //On letransforme en objet FormData
  let formObj = new FormData(myForm);

  //On récupère les inputsde notre formulaire par leurs noms
  let tauxHoraire = formObj.get('TH');
  let tauxJournalier = formObj.get('TJM');
  let extras = formObj.get('Extras');
  let taxesValues = [0, 5.5, 10, 20];

  let qteTauxHoraire = formObj.get('QteTH');
  let qteTauxJournalier = formObj.get('QteTJM');
  let qteExtras = formObj.get('QteExtras');

  //let charges = formObj.get('Charges');

  //on commence lecalcul 
  let gainHeure = tauxHoraire * qteTauxHoraire;

  let gainJour = tauxJournalier * qteTauxJournalier;

  let gainExtras = extras * qteExtras;

  let totalBrut = gainHeure + gainJour + gainExtras;

  let chargeADeduire = (totalBrut * taxesValues[charges.value])/100;
  let totalNet = totalBrut - chargeADeduire;


  document.getElementById("resultBrut").value = totalBrut.toFixed(2) + " €";
  document.getElementById("resultTaxe").value = chargeADeduire.toFixed(2) + " €";
  document.getElementById("resultNet").value = totalNet.toFixed(2) + " €";
  
}
 

function CheckInputs() {
  let mesInputs = document.querySelectorAll('#formCalculGain input.form-control');

  mesInputs.forEach(monInput => {
    //Vérifier si il vaut 0 ou plus
    if(monInput.value >= 0){

    } else {
      monInput.value = 0;
    }
    SaveElementInCookies(monInput);
  });
}

function SaveElementInCookies(input) {
  document.cookie = input.name + "=" + input.value;
}

//Récupérer les cookies
function getCookie(input){
  let mesCookies = document.cookie;

  const name = input.name + '=';
  const tableauCookies = mesCookies.split('; ');
  let valeurCookie = null;
  tableauCookies.forEach(cookie => {
    if(mesCookies.indexOf(name) === 0) {
      //On a chopé le bon cookie
      valeurCookie = cookie.substring(name.length);
      
    }
  });
  return valeurCookie;
}

//Ajout des événements
let btn = document.getElementById("buttonValidation");
btn.addEventListener('click', CalculGain);

let mesInputs = document.querySelectorAll('#formCalculGain input.form-control');

mesInputs.forEach(monInput => {
  //Si il a une valeur en cookie, lui donner
getCookie(monInput);
if(cookie != undefined && cookies != null) {
  monInput.value = cookie;
}
  monInput.addEventListener("keyup", CalculGain);
  monInput.addEventListener("change", CalculGain);
});
CalculGain;