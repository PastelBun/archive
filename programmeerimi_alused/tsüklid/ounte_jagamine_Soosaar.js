let arv=prompt('Mitu pöialpoissi soovivad õunu?');
console.log(arv+' pöialpoissi tahavad õunu.');
var lumivalgekese_ounad=14;
while(arv>0){
    arv--;
    let poialpoisi_ounad=Math.floor((Math.random()*2)+1);
    console.log(poialpoisi_ounad);
    while(poialpoisi_ounad>0){
        lumivalgekese_ounad--;
        poialpoisi_ounad--;
    }
}
console.log('Lumivalgekesele jäi '+lumivalgekese_ounad+' õuna.');