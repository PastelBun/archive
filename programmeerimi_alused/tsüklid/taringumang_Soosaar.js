let arv=prompt('Mitu täringut?');
console.log("Täringute arv: "+arv);
let rolls=[];
while (arv>0){
    arv--; rolls.push(Math.floor(Math.random()*6));
}
console.log(rolls);