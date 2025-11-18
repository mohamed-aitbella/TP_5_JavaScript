
function lancerDeDevinette() {
    const nombreADeviner = Math.floor(Math.random() * 10) + 1;
    
    let tentatives = 0; 
    let proposition = 0; 
    alert(" devinette ! Devinez un nombre entre 1 et 10");
    while (proposition !== nombreADeviner) {    
        let input = prompt("Votre proposition :");   
        proposition = parseInt(input);
        tentatives++;
        if (isNaN(proposition)) {
            alert("Veuillez entrer un nombre valide.");
        } else if (proposition > nombreADeviner) {
            alert("C'est plus grand !"); 
        } else if (proposition < nombreADeviner) {
            alert("C'est plus petit !"); 
        }
        
    }
  alert("Bravo  Vous avez trouvé le nombre " + nombreADeviner + " en " + tentatives + " tentatives");}