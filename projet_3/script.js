// const jsonData= require('./tableau.json'); 
let jsonData = {};

fetch("./tableau.json")
.then(response => {
   return response.json();
})
.then(jsondata =>{
    jsonData = jsondata
    console.log('jsonData',jsonData);
});



document.getElementById("form").addEventListener("submit", function(event){
  

    var formData = new FormData(document.querySelector('form'))
    let prenomValid = formData.get('prenom');
    let nomValid = formData.get('nom');
    let telephoneValid = formData.get('tel');
    let adresseValid = formData.get('adresse');
    if(prenomValid !== "" && nomValid !== "" && telephoneValid !== "" && adresseValid !== ""){
        console.log("prenom valide", prenomValid);
        let data = {
            prenom: prenomValid,
            nom: nomValid,
            telephone: telephoneValid,
            adresse: adresseValid
        }
        console.log("data", data);
        sessionStorage.setItem("tableau", data);
       
    }
    let tableau = sessionStorage.getItem("tableau")

   
    console.log("tableau", typeof(tableau));
    console.log(formData.get('avatar'));
    event.preventDefault();
  });