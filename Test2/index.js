let inputAge = document.getElementById('input') ;
let submitBtn = document.getElementById('submitbtn');



submitBtn.onclick = function(){
    if(inputAge.value >= 18){
        window.alert('You are eligible to enter the site');
    }else if(inputAge.value < 0){
        window.alert('Please enter a valid age');
    }else{
        window.alert('You are not eligible to enter the site');
    }
}