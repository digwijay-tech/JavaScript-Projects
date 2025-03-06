
let counter = 0;

// Function to add numbers to the counter
document.getElementById('increase').onclick=function(){
  counter++;
  document.getElementById('counter').textContent = counter;
};

// Function to subtract numbers from the counter
document.getElementById('decrease').onclick=function(){
    counter--;
    document.getElementById('counter').textContent = counter;
  };
  
// Function to reset the counter
  document.getElementById('reset').onclick=function(){
    counter=0;
    document.getElementById('counter').textContent = counter;
    
  };