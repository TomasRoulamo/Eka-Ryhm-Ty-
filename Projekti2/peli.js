function Numero(arpa)
{
  var arvaus = arpa.value;
  var satnum = Math.floor((Math.random() * 10) + 1);
  {
  if (arvaus == satnum)
    {
      alert("Voitit!");
      location.reload();
    }
    if (arvaus > rannum)
    {
    alert("Liian korkea !");
    }
    else if (playerguess.value < rannum)
    {
    alert("Too low!");
    }
  }
}
