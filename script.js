function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    document.write(5 + 6);
  } 

function envoyerFormulaire() {
    // Vérifier si les champs sont remplis correctement
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;

    if (!nom || !email) {
        alert("Veuillez remplir tous les champs !");
    } else {
        alert("Formulaire envoyé !");
        document.forms[0].submit();
    }
}
  