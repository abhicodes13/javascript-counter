
let counter = 0;

function count() {
    counter++;
   document.querySelector('h1').innerHTML= counter;
   if (counter % 10 === 0){
    alert(`Count is ${counter}`);
   }
 }

 let num = 100;

 function reduce(){
     num--;
     document.querySelector('h2').innerHTML = num;
 };