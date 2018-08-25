var tiro  = new Audio();
var srce  = document.createElement("source");
srce.src  = "audio/tiro.wav";
tiro.appendChild(srce);
tiro.load();

document.addEventListener("click", function(){
  document.getElementById("arma").style.opacity = 0;
  document.getElementById("arma2").style.opacity = 1;
  tiro.pause();
  tiro.currentTime = 0;
  tiro.play();
  setTimeout(function(anterior){ 
    document.getElementById("arma").style.opacity = 1;
    document.getElementById("arma2").style.opacity = 0;
  }, 200);
});

$(document).bind('mousemove', function(e){
  var conta = $(document).width();
  conta = conta / 5;
    $('#arma').css({
       left:  e.pageX-conta,
    });
    $('#arma2').css({
       left:  e.pageX-conta,
    });
});


if (!armaHud)
var armaHud = setInterval(function(){
  var altura = $('#hud').height();
  document.getElementById("arma").style.bottom=altura+"px";
  document.getElementById("arma2").style.bottom=altura+"px";
},500);

function desliga(e){
  e.parentElement.parentElement.style.display = "none";
  document.getElementById("inimigo1").style.display = "initial";
  document.getElementById("inimigo2").style.display = "initial";
}

function liga(idioma){
  if (idioma==1){
    var timeoute = setTimeout(function(){
      document.getElementById("eng").style.display = "initial";
      document.getElementById("inimigo1").style.display = "none";
      document.getElementById("inimigo2").style.display = "none";
    },300);
  }else{
    var timeoute = setTimeout(function(){
      document.getElementById("pt").style.display = "initial";
      document.getElementById("inimigo1").style.display = "none";
      document.getElementById("inimigo2").style.display = "none";
    },300);
  }
}
