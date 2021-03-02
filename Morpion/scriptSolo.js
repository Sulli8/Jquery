//On appelle la fonction qui permet le chargeent de la page
$(function(){
  //on initialise le tableau qui permet le morpion
  var j = 0;
  var morpion = ["#1","#2","#3","#4","#5","#6","#7","#8","#9"];
  var coteMorpion = ["#1","#2","#3","#4","#5","#6","#7","#8","#9"];
  var coteIntervalleMorpion = [];
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
  function victoire(){
      $("#gagne").text("Gagné !").fadeIn(1000);
      

  }

  function entierAleatoire(min, max)
  {
   return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function borderclic(selecteur){
    $(selecteur).css("border","1px solid red");
  }
  function verificate(morpion,coteMorpion,selecteurOrdi,selecteur,j){
    delete morpion[morpion.indexOf(selecteur)];
    borderclic(selecteur);

    for (var i = 0; i < coteMorpion.length; i++) {
      if(selecteur == coteMorpion[i]){
        coteMorpion.splice(coteMorpion.indexOf(selecteur),1);
        selecteurOrdi = coteMorpion[entierAleatoire(0, coteMorpion.length - 1)];
      }
    }

    setTimeout(function(){$(selecteurOrdi).html("<p>O</p>");},2000);
    $(selecteurOrdi).css("border","1px solid green");
    morpion.splice(morpion.indexOf(selecteurOrdi),1);
    coteMorpion.splice(coteMorpion.indexOf(selecteurOrdi),1);
  }

function clicCase(selecteur){
  //on initialise le compteur de clic

  $(selecteur).click(function(){
    //on incrémente afin de compter le nombre de clic
    j++;
    $(selecteur).html("<p>X</p>");
    verificate(morpion,coteMorpion,selecteurOrdi,selecteur,j);
    //incrémenter le tour de l'ordi
    j++;
    if(j%2 == 0){
      patientez();
    }
    console.log(j);
    console.log(coteMorpion);
    console.log("#"+$(selecteur).attr('id'));
    console.log(morpion);

    if($("#1").text() == "X" && $("#2").text() == "X" && $("#3").text() == "X"||
        $("#1").text() == "O" && $("#2").text() == "O" && $("#3").text() == "O"){
            $("#ligne1").css("visibility","visible");
            victoire();
    }

    if($("#4").text() == "X" && $("#5").text() == "X" && $("#6").text() == "X"||
    $("#4").text() == "O" && $("#5").text() == "O" && $("#6").text() == "O"){
      $("#ligne2").css("visibility","visible");
      victoire();
    }

    if($("#7").text() == "X" && $("#8").text() == "X" && $("#9").text() == "X"||
    $("#7").text() == "O" && $("#8").text() == "O" && $("#9").text() == "O"){
      $("#ligne3").css("visibility","visible");
      victoire();
    }

    if($("#1").text() == "X" && $("#4").text() == "X" && $("#7").text() == "X"||
    $("#1").text() == "O" && $("#4").text() == "O" && $("#7").text() == "O"){
      $("#colonne1").css("visibility","visible");
      victoire();
    }

    if($("#2").text() == "X" && $("#5").text() == "X" && $("#8").text() == "X"||
    $("#2").text() == "O" && $("#5").text() == "O" && $("#8").text() == "O"){
      $("#colonne2").css("visibility","visible");
      victoire();
    }

    if($("#3").text() == "X" && $("#6").text() == "X" && $("#9").text() == "X"||
    $("#3").text() == "O" && $("#6").text() == "O" && $("#9").text() == "O"){
      $("#colonne3").css("visibility","visible");
      victoire();
    }

    if($("#3").text() == "X" && $("#5").text() == "X" && $("#7").text() == "X"||
    $("#3").text() == "O" && $("#5").text() == "O" && $("#7").text() == "O"){
      $("#diagonale2").css("visibility","visible");
      victoire();
    }

    if($("#1").text() == "X" && $("#5").text() == "X" && $("#9").text() == "X"||
    $("#1").text() == "O" && $("#5").text() == "O" && $("#9").text() == "O"){
      $("#diagonale1").css("visibility","visible");
      victoire();
    }


  });
};










});
