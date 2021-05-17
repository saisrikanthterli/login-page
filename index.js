const somedata=document.querySelector('#paraid1');
const forminput=document.querySelector('form');
const inputsearch1=document.querySelector('#input1')
const inputsearch2=document.querySelector('#input2')
//construvting data from rendering purpuss

forminput.addEventListener('submit',(event) => {
    event.preventDefault();
    const input1=inputsearch1.value;
    const input2=inputsearch2.value;
   
    
      
    inputsearch1.value='';
 })