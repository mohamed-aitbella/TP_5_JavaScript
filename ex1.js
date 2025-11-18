
const a = parseFloat(prompt("Saisissez le premier nombre a :"));
const b = parseFloat(prompt("Saisissez le deuxième nombre b:"));

if (!isNaN(a) && !isNaN(b)) {
   
    console.log("Résultats pour " + a + " et " + b );
    
    console.log("Somme : " + (a + b));
    
    console.log("Différence : " + (a - b));
    
    console.log("Produit : " + (a *  b));
    
    if (b === 0) {
        console.log("Division par zéro impossible");
    } else {
        console.log("Quotient : " + (a / b));
    }

} else {
    console.log("Erreur : Veuillez saisir des nombres correct");
}