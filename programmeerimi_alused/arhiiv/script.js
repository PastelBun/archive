//starting array
let words = ['allveelaev', 'sügavas', 'käis', 'linnud', 'vees', 'kollane'];
//not working properly returns [HTMLInputElement]
let word=document.getElementById("word").valueOf().toString();
//showing the array so there's more user interactivity
document.getElementById('result').innerHTML=`<p>${words}<p>`;
//removes the word, works great, but as the input is always wrong the value is always(-1;1)
function remove_word(){
  words.splice(words.indexOf(word), 1);
   document.getElementById('result').innerHTML=`<p>${words}<p>`;
}