//funktsioon mis loob numbrid 0-99
function changeNumbers() {
    var price1=Math.round(Math.random()*10).toString();
    var price2=Math.round(Math.random()*10).toString();
    var price3=Math.round(Math.random()*10).toString();
    var price4=Math.round(Math.random()*10).toString();
    
    //laused mida peaks nägema
    var number1=`<p>Must kohvi: ${price1}€</p>`;
    var number2=`<p>Latte: ${price2}€</p>`;
    var number3=`<p>Cappucino: ${price3}€</p>`;
    var number4=`<p>Mokka: ${price4}€</p>`;
    
    document.getElementById('num1').innerHTML=number1;
    document.getElementById('num2').innerHTML=number2;
    document.getElementById('num3').innerHTML=number3;
    document.getElementById('num4').innerHTML=number4;
}

setInterval(changeNumbers, 2000);