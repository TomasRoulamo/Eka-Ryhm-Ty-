const laskin = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

var numero ='';
function luku(haettu)
 {
    arvo = haettu.value;

    if(arvo != '+' || arvo != '-')
    {
        numero += ''+arvo+'';
       return false;
    }
 }
 document.getElementById('tulos').innerHTML = numero;
