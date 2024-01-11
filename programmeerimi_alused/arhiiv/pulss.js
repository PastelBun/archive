//asks the person their age and saves it as a variable
let vanus=prompt ('Palun sisestage oma vanus');
//asks the person their gender and saves it as a variable
let sugu=prompt ('Palun sisestage oma sünnijärgne sugu');
//asks the person their desired excercise type and saves it as a variable
let treeninguTyyp=prompt ('Palun sisestage oma treeningu tüüp');
//calculates the maximum pulse of a person by subtracting their age from a number decided by their sex assigned at birth 
if(sugu=== 'm' || sugu=== 'M'){
    pulseCap=220-Number(vanus);
} else if (sugu=== 'n' || sugu=== 'N'){
    pulseCap=206-Number(vanus);
}else {
    console.log ('Palun sisendage oma sünnijärgne sugu, kui m, M, n või N');
}
//calculates the minimum and maximum pulse required for the desired type of excercise
if('treeninguTyyp'===1){
    pulseMin=Math.ceil (pulseCap*0.5); pulseMax=Math.floor (pulseCap*0.7);
} else if ('treeninguTyyp'===2){
    pulseMin=Math.ceil (pulseCap*0.7); pulseMax=Math.floor (pulseCap*0.8);
} else {
    pulseMin=Math.ceil (pulseCap*0.8); pulseMax=Math.floor (pulseCap*0.87);
}
//shows the result of the mathematics as a user intuitive message in the console
console.log (`Pulsisagedus peaks olema vahemikus ${pulseMin} kuni ${pulseMax}`) 