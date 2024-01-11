// Proovime salvestada kohalikku salvestusruumi veidi keerulisemaid andmeid ja vaatame, kas õnnestub.
// Siin on kaks koodilõiku: esimene kirjeldab probleemi ja teine lahendab probleemi.

// 1. problemaatiline koodilõik

// defineerime objekti
let isik = {
    nimi: "Margus",
    vanus: 46,
    elukoht: "Tartu"
};

// märkame, et logisse suudetakse seda objekti näidata kenasti
console.log(isik);
// saame näidata ka konkreetset atribuuti eraldiseisvana
console.log(isik.elukoht);

// vaatame kas õnnestub ka kohalikku salvestusruumi salvestada
localStorage.setItem("isikuAndmed", isik);

// mis juhtus?
// kui nüüd võtate Inspect ja Application, siis näete, et kohalikku salvestusruumi ei tekkinud õige asi
// seal paistavad vaid sõnad [object Object], aga kõik andmed kadunud

// ja kui kohalikust salvestusruumist lugeda andmeid, siis kah kõik andmed kadunud
isik = localStorage.getItem("isikuAndmed");

// logisse ei tule enam andmeid, tuleb ainult see tekst: [object Object]
console.log(isik);

// ja ei saa pöörduda enam ka konkreetse atribuudi "elukoht" poole
console.log(isik.elukoht)

// Kokkuvõte: Probleem on selles, et me ei saa panna OBJEKTi andmeid kohalikku salvestusruumi otse objektina.

// 2. lahendame probleemi, teeme uue sarnase objekti, aga paneme erinevad väärtused, et logi loetavam oleks
let isik2 = {
    nimi: "Mari",
    vanus: 26,
    elukoht: "Põlva"
};

console.log(isik2);

// lahendus on see, et me teisendame objekti JSON andmevahetusformaati
localStorage.setItem("isikuAndmed", JSON.stringify(isik2));

// märkame, et nüüd on kohalikus salvestusruumis parem seis: {"nimi":"Mari","vanus":26,"elukoht":"Põlva"}
// selgub, et nüüd suutsime väärtused säilitada kohalikus salvestusruumis

// kas lugemine salvestusruumist õnnestub?
isik2 = localStorage.getItem("isikuAndmed");
// aga lugemisel selgub, et ikka midagi on valesti
console.log(isik2);
console.log(isik2.elukoht)

// teeme teisenduse JSON-ist tagasi objektiks ja asi korras, kõik andmed olemas ja taas kasutatavad
isik2 = JSON.parse(isik2)
console.log(isik2);
console.log(isik2.elukoht)

// Kokkuvõte: kohalikku salvestusruumi saame salvestada ka keerulisemaid andmestruktuure, kui viime nad JSON kujule.
// Siis saame salvestada objektide andmeid ja ka listide andmeid.
// Andmete lugemisel kohalikust salvestusruumist ei tohiks unustada tagasiteisendust algsesse formaati.
// Teisendamine JSON tekstiks: JSON.stringify()
// Teisendamine tagasi: JSON.parse()