console.log("Hey I am a Dark world");

const input=document.getElementById('ip');

const button=document.getElementById('btn');
const head=document.getElementById('h');
const clock=document.getElementById('clk');
function clocks()
{
let date=new Date();
let time=date.toLocaleTimeString();
clock.innerText=time;
}
// clocks();
setInterval(clocks,1000);



// console.log(`${txt}`);

button.onclick=()=>
{
    let text=input.value;
    console.log(text);
  head.innerHTML=`<h2> Welcome to color world ${text}</h2>`;
      
    let element=document.body;
    element.classList.toggle("dark");

}


