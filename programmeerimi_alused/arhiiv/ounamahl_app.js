//funktsioon mis arvutab mahlapakkide arvu kasutades õunte kogust, mis on antud kilogrammides
function arvuta(){
//võtab õunte koguse html documendist ja muudab selle javascript väärtuseks
 let ounte_kogus = document.getElementById("ounte_kogus").value;
//arvutab ja salvestab tulemuse kui muutuja
    let summa = Math.round(Number(ounte_kogus)* 0.4 / 3);
//saadab tulemuse kui lause tagasi html faili, et seda saaks näha
    document.getElementById("tulemus").innerHTML = `<p>Tere, õunamahla saate Te ${ounte_kogus}kg õunte eest
                    <u>${summa} liitrit</u>.</p>`;
}
