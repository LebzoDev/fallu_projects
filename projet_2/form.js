//Séléction de formulaire
let form = document.querySelector("#formulaire");
//VALIDATION DU PRENOM
//Activer une fonction en changeant de champ
form.prenom.addEventListener("change", function() {
    validePrenom(this);
});
const validePrenom = function reg(inputprenom) {
    let prenomRegExp = new RegExp('^[A-Z]{1}[a-z A-Z]+$', 'g'),
        small = inputprenom.nextElementSibling;
    if (prenomRegExp.test(inputprenom.value)) {
        small.innerHTML = "";
        return true;
    } else {
        alert("Le prenom doit commencer par une lettre en majuscule et ne doit comporterque des lettres!");
        return false;
    };
};
//VALIDATION DU NOM
//Activer une fonction en changeant de champ
form.nom.addEventListener("change", function() {
    valideNom(this);
});
const valideNom = function reg(inputnom) {
    let nomRegExp = new RegExp('^[A-Z]{1}[a-zA-Z]+$', 'g'),
        small = inputnom.nextElementSibling;
    if (nomRegExp.test(inputnom.value)) {
        small.innerHTML = "";
        return true;
    } else {
        alert("Le nom doit commencer par une lettre en majuscule et ne doit comporterque des lettres!");
        return false;
    };
};
//VALIDATION DU NUMERO DE TELEPHONE
//Activer une fonction en changeant de champ
form.telephone.addEventListener("change", function() {
    validetel(this);
});
const validetel = function reg(inputtel) {
    let telRegExp1 = new RegExp('^[7]{1}[05678]{1}[0-9]{7}$', 'g'),
        telRegExp2 = new RegExp('^[2]{2}[1]{1}[7]{1}[05678]{1}[0-9]{7}$', 'g'),
        small = inputtel.nextElementSibling;
    if ((telRegExp1.test(inputtel.value)) || (telRegExp2.test(inputtel.value))) {
        small.innerHTML = "";
        return true;
    } else {
        alert("Numero de Telephone Non valide!");
        return false;
    };
};
form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (validetel(form.telephone)) {
        form.submit();
    };
});

//Séléction du bouton envoyer
let btnEnvoyer = document.querySelector("#btn");
//Activer une fonction en appuyant sur le bouton
btnEnvoyer.addEventListener("click", () => {
    //Stocker les saisies dans le localStorage
    // ________________________________________________________________________
    localStorage.setItem("prenom", document.querySelector("#prenom").value);
    localStorage.setItem("nom", document.querySelector("#nom").value);
    localStorage.setItem("telephone", document.querySelector("#telephone").value);
    localStorage.setItem("adresse", document.querySelector("#adresse").value);

});
var inputFile = document.getElementById("file");
inputFile.addEventListener("change", () => {
    afficherImage(this);
});

function afficherImage() {
    var file = document.querySelector('input[type=file]').files[0],
        nomUser = document.querySelector("#nom_user"),
        imgProfil = document.getElementById("profil"),
        prenom = document.querySelector("#prenom").value,
        nom = document.querySelector("#nom").value,
        reader = new FileReader();

    reader.addEventListener("load", () => {
        imgProfil.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
        nomUser.innerHTML = prenom + " " + nom;
    }
}