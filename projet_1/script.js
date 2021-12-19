let form = document.querySelector("#formulaire");
form.telephone.addEventListener("change", function() {
    validetel(this);
});
const validetel = function reg(inputtel) {
    let telRegExp = new RegExp('^[7]{1}[05678]{1}[0-9]{7}$', 'g');
    let small = inputtel.nextElementSibling;
    if (telRegExp.test(inputtel.value)) {
        small.innerHTML = "Telephone Valide!";
        small.classList.remove("numNonValide");
        small.classList.add("numValide");
        return true;
    } else {
        small.innerHTML = "Telephone Non valide!";
        small.classList.remove("numValide");
        small.classList.add("numNonValide");
        return false;
    };
};
form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (validetel(form.telephone)) {
        form.submit();
    };
});