//On appelle la fonction qui permet le chargeent de la page
$(function(){
  //on initialise le tableau qui permet le morpion
  var morpion = ["#1","#2","#3","#4","#5","#6","#7","#8","#9"];
  for (var i = 0; i < morpion.length; i++) {
    //on appelle la fonction cliccase
    clicCase(morpion[i]);
  }
function clicCase(selecteur){
  //on initialise le compteur de clic
  var j = 0;
  $(selecteur).click(function(){
    //on incrémente afin de compter le nombre de clic
    j++;
    if(j%2 == 0){
      $(selecteur).html("<p>X</p>");
      //on vérifie la lauer du clic
    }else{
      $(selecteur).html("<p>O</p>");
    }
    //on vérifie sur les ligne sont égales
    if(
//ligne X du morpion
$("#1").text() == "X" && $("#2").text() == "X" && $("#3").text() == "X"||
$("#4").text() == "X" && $("#5").text() == "X" && $("#6").text() == "X"||
$("#7").text() == "X" && $("#8").text() == "X" && $("#9").text() == "X"||
//Diagonale X du morpion
$("#1").text() == "X" && $("#5").text() == "X" && $("#9").text() == "X"||
$("#3").text() == "X" && $("#5").text() == "X" && $("#7").text() == "X"||
//Colonne X du morpion
$("#1").text() == "X" && $("#4").text() == "X" && $("#7").text() == "X"||
$("#2").text() == "X" && $("#5").text() == "X" && $("#8").text() == "X"||
$("#3").text() == "X" && $("#6").text() == "X" && $("#9").text() == "X"||
//ligne O du morpion
$("#1").text() == "O" && $("#2").text() == "O" && $("#3").text() == "O"||
$("#4").text() == "O" && $("#5").text() == "O" && $("#6").text() == "O"||
$("#7").text() == "O" && $("#8").text() == "O" && $("#9").text() == "O"||
//Diagonale O du morpion
$("#1").text() == "O" && $("#5").text() == "O" && $("#9").text() == "O"||
$("#3").text() == "O" && $("#5").text() == "O" && $("#7").text() == "O"||
//Colonne O du morpion
$("#1").text() == "O" && $("#4").text() == "O" && $("#7").text() == "O"||
$("#2").text() == "O" && $("#5").text() == "O" && $("#8").text() == "O"||
$("#3").text() == "O" && $("#6").text() == "O" && $("#9").text() == "O"
){
  //on affiche un message qui permet de dire que le joueur X à gagné
      $("#verification").text("Gagné !");
      //on affiche puis on efface le message
      $("#verification").animate({opacity:"0"},2000,function(){
        //Puis on recharge la page
        location.reload();
      });
    }
    
  });
};




});
