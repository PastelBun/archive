//salvestab nime
let nimi=prompt ('Palun sisestage oma nimi')
//salvestab lubatud kiiruse
let lubaKiirus=prompt ('Palun sisestage lubatud kiirus (täisarvuna)')
//salvestab tegeliku kiiruse
let tegeKiirus=prompt ('Palun sisestage oma tegelik kiirus (täisarvuna)')
//arvutab trahvi suuruse
trahv=(Number(tegeKiirus)-Number(lubaKiirus))*3
//viskab konsooli tulemusliku lause, kus on isiku nimi ja trahvi suurus
console.log(`${nimi}, kiiruse ületamise eest on teie trahv ${trahv} eurot.`)