function compute(){
    //võtab numbri html documendist
    var num=document.getElementById("ringide_arv").value;
    //arvutus funktsioon
    var ans=0; // porgandeid null
    var x=1; // ringi järjekorra nr
    
    while (x<=num){
        // siia jõuame ainult siis, kui ringi jrk nr on väiksem ringide arvust,
        // mis kasutaja ütles
        
        // kontrollime, kas jrk nr on paariarv
        if (x%2===0) {
            // kui oli paaris, siis porganditele otsa liita see jrk nr
            ans += x;    
        }
        // suurendama jrk, et saaks tsüklist kunagi ka väljuda
        x++; 
    }
    document.getElementById('result').innerHTML=`<p>Anna lapsele ${ans} porgandit</p>`;
    
}