function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5q7ksgwLmdk":
        Script1();
        break;
      case "5UnYEldm1al":
        Script2();
        break;
      case "6PdYchhkzva":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgsound');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  var audiomusik = document.getElementById('bgsound');
audiomusik.volume=0;
}

function Script3()
{
  var audiomusik = document.getElementById('bgsound');
audiomusik.volume=0.3;
}

