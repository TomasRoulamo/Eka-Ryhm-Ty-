var numero ='';
function luku(haettu)
 {
    arvo = haettu.value;

    if(arvo != '+' || arvo != '-')
    {
        numero += ''+arvo+'';
        alert(numero);
       return false;
    }
 }
 document.getElementById('tulos').innerHTML = numero;
        
