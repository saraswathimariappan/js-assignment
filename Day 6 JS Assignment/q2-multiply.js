console.log("Hey I am a multipication");


const button=document.getElementById('btn');

button.onclick=()=>{
    const ipt=document.getElementById('ip');
    const table=document.querySelector('#tb');
    const text=ipt.value;
    console.log(text);
    for(i=1;i<11;i++)
{
    let total=text*i;
    console.log(`${text}*${i}=${total}`);
   
    table.innerHTML+=`<tr>${text} * ${i} = ${total}</tr>`   
  
}

}


// let number=+prompt("enter");
// let total;



