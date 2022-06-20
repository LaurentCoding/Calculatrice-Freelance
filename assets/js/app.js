function CalculGain() {
  //On récupére le formulaire dans le html
  let myForm = document.getElementById("formCalculGain");
  //On letransforme en objet FormData
  let formObj = new FormData(myForm);
  
  //On récupère les inputsde notre formulaire par leurs noms
  let tauxHoraire = formObj.get('TH');
  let tauxJournalier = formObj.get('TJM');
  let extras = formObj.get('Extras');
  let taxesValues = [0, 5.5, 11, 16.5, 22];

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

  document.getElementById("resultBrut").value = totalBrut + " €";
  document.getElementById("resultTaxe").value = chargeADeduire + " €";
  document.getElementById("resultNet").value = totalNet + " €";
  
}