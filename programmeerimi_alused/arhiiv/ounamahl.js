//funktsioon mis arvutab mahlapakkide arvu kasutades õunte kogust, mis on antud kilogrammides
function mahlapakkide_arv(){
     return Math.round(Number(ounte_kogus)* 0.4 / 3);
}
//küsib õunte koguse kilogrammides
let ounte_kogus=prompt('Palun sisestage õunte kogus kilogrammides (ainult arvuna)')
//väljastab konsooli eeldatud mahlapakkide arvu
console.log(mahlapakkide_arv(ounte_kogus))