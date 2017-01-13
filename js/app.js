
var fortunesToSay = ['good stuff coming', 'you will be able to breathe tomorrow', 'you will die between now and 50 years', 'someone will tell you to shut up', 'you wiil see'];
var fortune="";
var saidAll=false;

function generateFortuneCookie() {
  if(saidAll==false){
    var btn= document.getElementById('onlyButton')
    var box = document.getElementById('fortune-cookie-text');
    var list = document.getElementById('list');
    var li = document.createElement("li");
    btn.innerHTML="Hit me baby one more time!";

    if (fortune!=""){
      li.appendChild(document.createTextNode(fortune));
      list.appendChild(li);
    }
    if (fortunesToSay.length>0) {
      var num;
      num =Math.floor(Math.random()*fortunesToSay.length);
      fortune = fortunesToSay[num];

      fortunesToSay.splice(num, 1);
      box.innerHTML = "<b>Fortunes</b> <br><br>"+fortune;
    }
    else{
      btn.innerHTML="You ran out of fortunes!";
      box.innerHTML = "<b>Fortunes</b> <br><br> Nomore, get away!";
      saidAll=true;
    }
  }
}