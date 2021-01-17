//On appelle la fonction qui permet le chargeent de la page
$(function(){
  //on initialise le tableau qui permet le morpion
  var j = 0;
  var morpion = ["#1","#2","#3","#4","#5","#6","#7","#8","#9"];
  var coteMorpion = ["#1","#3","#7","#9"];
  var selecteurOrdi = "";
  for (var i = 0; i < morpion.length; i++) {
    //on appelle la fonction cliccase
    clicCase(morpion[i]);
  }
  function patientez(){
      $("#patientez").text("Patientez...").fadeOut(1000,function(){
        $("#patientez").fadeIn(1000,function(){
          $("#patientez").remove();
        });
      });
  }

  function entierAleatoire(min, max)
  {
   return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function borderclic(selecteur){
    $(selecteur).css("border","1px solid red")

  }
  function tourOrdi(morpion,coteMorpion,selecteurOrdi,selecteur,j){
    delete morpion[morpion.indexOf(selecteur)];
    borderclic(selecteur);

    for (var i = 0; i < coteMorpion.length; i++) {
      if(selecteur == coteMorpion[i]){
        coteMorpion.splice(coteMorpion.indexOf(selecteur),1);
        selecteurOrdi = coteMorpion[entierAleatoire(0, coteMorpion.length - 1)];
      }
    }
    setTimeout(function(){$(selecteurOrdi).html("<p>O</p>");},2000);
    morpion.splice(morpion.indexOf(selecteurOrdi),1);
    coteMorpion.splice(coteMorpion.indexOf(selecteurOrdi),1);
  }
function clicCase(selecteur){
  //on initialise le compteur de clic

  $(selecteur).click(function(){
    //on incrémente afin de compter le nombre de clic
    j++;
    $(selecteur).html("<p>X</p>");

    tourOrdi(morpion,coteMorpion,selecteurOrdi,selecteur,j);
    //incrémenter le tour de l'ordi
    j++;
    if(j%2 == 0){
      patientez();
    }
    console.log(j);
    console.log(coteMorpion);
    console.log("#"+$(selecteur).attr('id'));
    console.log(morpion);
      //patientez();
      //setTimeout(function(){joueurOrdi(selecteur)},2000);

  });
};










});
