//Create a page with a blank label and a text area. 
//When someone types into the text area, change the 
//label to show what the person has typed.

// make a plan
// get the necessary elements in a reference;
let textArea = document.getElementById('textArea');
let label = document.getElementById('label');
let userInput = textArea.innerText;
//   listen for keydowns;
textArea.addEventListener('keydown', ()=>{
     label.innerText =userInput;
    console.log(`this is your output: ${userInput}`);
})