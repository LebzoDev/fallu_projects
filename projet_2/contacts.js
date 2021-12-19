var table = document.getElementById("tableau");
var ligne = table.insertRow();
var prenomUser = ligne.insertCell(0),
    nomUser = ligne.insertCell(1),
    telUser = ligne.insertCell(2),
    adresseUser = ligne.insertCell(3),
    supprimerUser = ligne.insertCell(4);
prenomUser.innerHTML = localStorage.getItem("prenom");
nomUser.innerHTML = localStorage.getItem("nom");
telUser.innerHTML = localStorage.getItem("telephone")
adresseUser.innerHTML = localStorage.getItem("adresse");
var bouton = document.createElement("input");
bouton.type = "button";
bouton.value = "Supprimer";
bouton.className = "supprimer";
bouton.onclick = function() {
    suppression(ligne)
};
supprimerUser.appendChild(bouton);
document.querySelector("#prenom").value = "";
document.querySelector("#nom").value = "";
document.querySelector("#telephone").value = "";
document.querySelector("#adresse").value = "";
//La fonction supprimer
function suppression(ligne) {
    document.getElementById('tableau').deleteRow(ligne.rowIndex);

    //Recomptage des lignes...
    var tableau = document.getElementById('tableau');
    var trs = tableau.rows;
    var n = trs.length;
    for (var i = 0; i < n; i++) {
        trs[i].cells.innerHTML = trs[i].rowIndex;
    }
}