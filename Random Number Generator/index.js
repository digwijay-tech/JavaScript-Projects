
// Random Number Generator
const min =1;
const max = 100;

document.getElementById('generatebtn').onclick= function(){
 document.getElementById('display').textContent = Math.floor( Math.random()*(max-min))+min;
}


document.getElementById('reset').onclick= function(){
    document.getElementById('display').textContent = 0;
   }
   