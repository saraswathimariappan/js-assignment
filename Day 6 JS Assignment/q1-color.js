console.log("Hey I am a color world");
let array=['purple','brown','goldenrod'];

colorindex=0;
function change()
{ 
  document.bgColor=array[colorindex];
  colorindex=(colorindex+1)%array.length;
}

function start(){
setInterval(change,2000);}
window.onload=start();




  

     
 

 