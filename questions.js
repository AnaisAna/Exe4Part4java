/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length//length est une propriété;
}
var remplaceECar = function (texte) {
    return texte.replace('e',' ');
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    return texte.slice(0, 9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase('UN AUTRE EXCELLENT EXERCICE');
}
var minusculeString = function (texte) {
    return texte.toLowerCase('celui ci aussi!');
}
var SupprEspaceString = function (texte) {
    return texte.trim(' ', ' ');
}
//Afficher true si le parametre d'entrée de la fonction est de type string
var IsString = function (texte) {
  var testString=isNaN(texte);
    return testString;
}
var AfficherExtensionString = function (texte) {
    return texte.substr(texte.lastIndexOf('.')+1);
}
var NombreEspaceString = function (texte) {
    return texte.match(/[ ]+/g).length;
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x,y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
  for(var i=0; i<array.length; i++){
      array[i] = Math.abs(array[i]);
    }
    return array;
}
//Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI*Math.pow(rayon,2));
}
//Calculer l'hypthènuse d'un triangle rectangle
var hypothenuse = function (ab, ac) {
    return Math.sqrt(Math.pow(ab,2)+Math.pow(ac,2));
}
//Calculer l'IMC (Poids/(taille*taille) Ne garder que deux chiffre après la virgule)
var calculIMC = function (poids, taille) {
    return Math.round(poids/(taille*taille)*100)/100;
}
