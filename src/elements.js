import { mainInterpreter } from "./interpreter";


export function loadEditor(){
    console.log("loaded the editor");
    const body=document.querySelector("body");


    //create the text area for the coding ;)
    const textbox=document.createElement("textarea");
    textbox.setAttribute('class', 'textbox');
    textbox.setAttribute('rows', '10');
    textbox.setAttribute('cols', '50');
    body.appendChild(textbox);

    //create the run button
    const runButton=document.createElement("button");
    runButton.setAttribute("class","runButton");
    runButton.innerText="Run";
    runButton.addEventListener("click", ()=>{
        //here run the compiler 
        let rawCode=textbox.value;
        console.log(rawCode);
        mainInterpreter(rawCode);
        consoleElement.innerText=rawCode+" error";
    })


    //create the console where the code runs
    const consoleElement=document.createElement("p");
    consoleElement.setAttribute("class", "console");


    //add the elements to the screen 
    body.appendChild(runButton);
    body.appendChild(consoleElement);
}