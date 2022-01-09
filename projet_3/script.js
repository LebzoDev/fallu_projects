// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text, function (key, value) {
//   if (key == "birth") {
//     return new Date(value);
//   } else {
//     return value;
//   }
// });



let jsonData = {};

fetch("./tableau.json")
.then(response => {
   return response.json();
})
.then(jsondata =>{
    jsonData = jsondata
    console.log('jsonData',jsonData);
});

let tableau = sessionStorage.getItem("tableau")
console.log("tableau", JSON.parse(tableau));

document.getElementById("form").addEventListener("submit", function(event){
    var formData = new FormData(document.querySelector('form'));
    
    let prenomValid = formData.get('prenom');
    let nomValid = formData.get('nom');
    let telephoneValid = formData.get('tel');
    let adresseValid = formData.get('adresse');

    if(prenomValid !== "" && nomValid !== "" && telephoneValid !== "" && adresseValid !== ""){

        let data = {
            prenom: prenomValid,
            nom: nomValid,
            telephone: telephoneValid,
            adresse: adresseValid
        }
        console.log("data", data);
        // let newData = [JSON.parse(tableau),data];
        console.log("newData", JSON.parse(tableau),data);

        // sessionStorage.setItem("tableau",JSON.stringify(data));
       
    }else{
        // document.getElementById("prenom").value = "Johnny Bravo";
        if(nomValid === ""){
            document.getElementById("obl-nom").innerText = "*Obligatoire";
            document.getElementById("obl-nom").style.color = "red";
        }
        if(prenomValid === ""){
            document.getElementById("obl-prenom").innerText = "*Obligatoire";
            document.getElementById("obl-prenom").style.color = "red";
        }

    }
    let tableau = sessionStorage.getItem("tableau")

    console.log("tableau", tableau);
    console.log(formData.get('avatar'));
    event.preventDefault();
  });