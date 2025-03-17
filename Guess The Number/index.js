let max = 100;
let min = 1;
let attempts= 0;
attempts= Number(attempts);
let isRunning = true;
const answer = Math.floor(Math.random() * (max - min) + min);
console.log(answer);
while (isRunning) {
  let guess = window.prompt("guess the number between 1 and 100").valueOf();
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Enter a valid number");
  } else if (guess > max) {
    window.alert("The number is above the limit");
  } else if (guess < min) {
    window.alert("The number is Below  the limit");
  } else if (guess !== answer) {
    attempts++;
    window.alert("Our guess is wrong try again");
  }else{
    document.getElementById('text').textContent=`you won in ${attempts} attempts`;
    isRunning = false;
  }

  
}
