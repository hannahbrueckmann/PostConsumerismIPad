
var werkstatt_noise = new Audio("sound/werkstatt.mp3");;
var zug_noise = new Audio ("sound/zug.mp3");
var baustelle_noise = new Audio("sound/constructionside.wav");
var cafe_noise = new Audio("sound/cafe.mp3");
var punkbar_noise = new Audio("sound/concert.mp3");
var background_noise = werkstatt_noise;
var current_interview =new Audio();
var time_played;
var interview_is_played = false;
var w;
var x;
var ratio;

var last_character = "";

function startScene(){
  alert("Start");
  //w=document.getElementById("container_f").scrollWidth;
  //printScrollPosition();
  //background_noise.play();
}

function updateNoise(){
/*    x = window.scrollX;
    w = document.getElementById("container_f").scrollWidth;
    ratio = x/w;

    if(interview_is_played==false){
      alert(ratio);

    if(ratio>0.12&&ratio<0.20){ //im Zug, Nebokeh
        background_noise = zug_noise;
    }else if (ratio>0.20&&ratio<0.4) { //im Cafe, Hannah Vivien
      background_noise = cafe_noise;

    }else if (ratio>0.4&&ratio<0.6) { //auf der Baustelle, Tom
      background_noise = baustelle_noise;

    }else if(ratio>0.6){//in einer Kneipe, Krat
      background_noise = punkbar_noise;
    }
    else {
      background_noise = werkstatt_noise;
    }

    //wenn zu ende neu laden
    if (background_noise.ended()) {
      background_noise.load();
    }
  }
  */

};



function Interview(persona){

  background_noise.pause();
  interview_is_played = true;
  //alert(persona.id);

    switch (persona.id) {
      case "chester":
      if(last_character!="chester"){
      //  alert(current_interview.src);
      current_interview = new Audio("sound/chester.mp3");
    }
        last_character = "chester";
        break;
      case "nebokeh":
      if(last_character!="nebokeh"){
      //  alert(current_interview.src);
      current_interview = new Audio("sound/nikhe.wav");
    }
        last_character = "nebokeh";
        break;

      case "hannahvivien":
      if(last_character!="hannahvivien"){
      //  alert(current_interview.src);
      current_interview = new Audio("sound/hannahvivien.mp3");
    }
        last_character = "hannahvivien";
        break;

      case "tom":
      if(last_character!="tom"){
      //  alert(current_interview.src);
      current_interview = new Audio("sound/tom.wav");
    }

        last_character = "tom";
        break;

      case "krat":
      if(last_character!="krat"){
      //  alert(current_interview.src);
      current_interview = new Audio("sound/krat.mp3");
      //time_played = new TimeRanges(0);
    }
        last_character = "krat";
          break;

      default:
      break;

    }

      current_interview.play();

}


function pauseInterview(){
  //if(background_noise.ended()){background_noise.load("sound/werkstatt.wav");}

  current_interview.pause();
  time_played = current_interview.played();
  interview_is_played =false;
  updateNoise();
  background_noise.play();
}


function printScrollPosition(){
//  x = window.scrollX;
//  w = document.getElementById("container_f").scrollWidth;
//  alert(x + " von " + w + " Pixeln gescrollt.\n Das ist " + x/w);
alert("Scrolle, um mehr Charaktere kennen zu lernen.")
}
