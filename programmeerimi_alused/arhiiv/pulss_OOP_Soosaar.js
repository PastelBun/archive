const pulss={
        vanus: Number(prompt('Palun sisestage vanus')),
        sugu: prompt('Palun sisestage sünnijärgne sugu (m või n)'),
        treeninguTyyp: Number(prompt('1 kui tervisetreening, 2 kui põhivastupidavuse, 3 kui intensiivne aeroobne treening')),
    pulssCap(){ 
        if(this.sugu==='m'|| this.sugu==='M'){
            return pulseCap=220-this.vanus;
        } else if (this.sugu=== 'n'|| this.sugu==='N'){
            return pulseCap=206-this.vanus;
        }else {
            return ('Palun sisendage oma sünnijärgne sugu, kui m, M, n või N');
        }
    },
    leiaPulss(){
        if(this.treeninguTyyp===1){
            pulseMin=Math.ceil (pulseCap*0.5); pulseMax=Math.floor (pulseCap*0.7);
        } else if (this.treeninguTyyp===2){
            pulseMin=Math.ceil (pulseCap*0.7); pulseMax=Math.floor (pulseCap*0.8);
        } else {
            pulseMin=Math.ceil (pulseCap*0.8); pulseMax=Math.floor (pulseCap*0.87);
        }
        return (`Pulsisagedus peaks olema vahemikus ${pulseMin} kuni ${pulseMax}`);
        }
    };
console.log(pulss.vanus);
console.log(pulss.sugu);
console.log(pulss.treeninguTyyp);
console.log(pulss.pulssCap());
console.log(pulss.leiaPulss());