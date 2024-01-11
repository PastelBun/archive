const vigased = ['alkohool', 'grematoorium', 'kanditaat']; // vigased sõnad
let tekst = 'Oleks hea, kui alkohool ei satuks teismeliste kätte. Võrru rajatakse grematoorium riigi kulul. Jaan oli parim kanditaat peaministriks.'; // tekst mida parandame
const oiged = ['alkohol', 'krematoorium', 'kandidaat']; // parandatud sõnad

tekst = tekst.split(" ");//loome tekstist array, kus iga sõna on oma element

const tulemus = tekst.map(sona => {//alustame map funktsiooni ja loome muutja sona
    /*loome muutja index, kontrollime iga sõna arrays ja vaatame kus see on vigade arrays*/
    const index = vigased.indexOf(sona);
    if (index !== -1) {
        return oiged[index];
    }//kontrollime, et sõna ikka oleks vigade arrays
    return sona;
}).join(" ");//tagastame uued sonad ja loodame nendest laused

console.log(tulemus);//näitame tulemust konsoolis