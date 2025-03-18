
let counter = 0;
let counter2=0

// Function to add numbers to the counter
document.getElementById('counter1').onclick=function(){
  counter++;
  document.getElementById('counter1').textContent = counter;
};

// Function to subtract numbers from the counter
// document.getElementById('decrease').onclick=function(){
//     counter--;
//     document.getElementById('counter1').textContent = counter;
//   };
  



  // Function to add numbers to the counter
document.getElementById('counter2').onclick=function(){
    counter2++;
    document.getElementById('counter2').textContent = counter2;
  };
  
//   // Function to subtract numbers from the counter
//   document.getElementById('decrease1').onclick=function(){
//       counter2--;
//       document.getElementById('counter2').textContent = counter2;
//     };
    
  // Function to reset the counter
    document.getElementById('reset1').onclick=function(){
      counter2=0;
      counter=0;
      document.getElementById('counter2').textContent = counter2;
      document.getElementById('counter1').textContent = counter;
      
    };