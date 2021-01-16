//On appelle la fonction qui permet le chargeent de la page
$(function(){
  //on initialise le tableau qui permet le morpion
  var j = 0;
  var morpion = ["#1","#2","#3","#4","#5","#6","#7","#8","#9"];
  j++;
  for (var i = 0; i < morpion.length; i++) {
    //on appelle la fonction cliccase
    j++;
    clicCase(morpion[i]);
  }

function clicCase(selecteur){
  //on initialise le compteur de clic

  $(selecteur).click(function(){
    j++;
    //on incrémente afin de compter le nombre de clic
      $(selecteur).html("<p>X</p>");
      setTimeout(function(){joueurOrdi(selecteur)},2000);
  });
};

function joueurOrdi(selecteur){
//  console.log("#"+$(selecteur).attr('id'));
  var caseJoueur =  "#"+$(selecteur).attr('id');
  var caseExterieur = ["#1","#3","#7","#9"];
  var solutionOrdi = [];
  for (var j = 0; j < caseExterieur.length; j++) {
    if(caseJoueur ==  caseExterieur[j]){
      for (var i = 0; i < caseExterieur.length; i++) {
        if(caseJoueur != caseExterieur[i]){
          solutionOrdi.push(caseExterieur[i]);
        }
      }
      coupDulapin(solutionOrdi,caseExterieur,selecteur);
    }
  }
}

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 10
function coupDulapin(solutionOrdi,caseExterieur,selecteur){
  var jeu = [];
  var selecteurOrdi = solutionOrdi[entierAleatoire(0, solutionOrdi.length - 1)];
  $(selecteurOrdi).html("<p>O</p>");
  jeu.push(selecteurOrdi,selecteur);
  var caseExterieurNonjouer = [];
  for (var i = 0; i < caseExterieur.length; i++) {
    if(caseExterieur[i] != jeu[0] && caseExterieur[i] !=  jeu[1]){
      caseExterieurNonjouer.push(caseExterieur[i]);
    }
  }
  
}




});
