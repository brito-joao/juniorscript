import { mainInterpreter } from "./interpreter";


export function loadEditor(){
    console.log("loaded the editor");
    const body=document.querySelector("body");


    //create the text area for the coding ;)
    const textbox=document.createElement("textarea");
    textbox.spellcheck="false";
    textbox.setAttribute('class', 'textbox');
    textbox.setAttribute('rows', '10');
    textbox.setAttribute('cols', '50');
    textbox.value="Escrever - olá mundo";

    //create the run button
    const runButton=document.createElement("button");
    runButton.setAttribute("class","runButton");
    runButton.innerText="Run";
    runButton.addEventListener("click", ()=>{
        //here run the compiler 
        let rawCode=textbox.value;
        console.log(rawCode);
        let consoleOutput=mainInterpreter(rawCode);
        consoleElement.innerText=consoleOutput;
    })


    //create the console where the code runs
    const consoleElement=document.createElement("p");
    consoleElement.innerText="Aqui É onde as respostas irão aparecer ;)";
    consoleElement.setAttribute("class", "console");



    //create project name header
    const header=document.createElement("p");
    header.innerText="JuniorScript Uma língua para todos!";
    header.setAttribute("class","title");
    //add the elements to the screen 
    body.appendChild(header);
    body.appendChild(textbox);
    body.appendChild(runButton);
    body.appendChild(consoleElement);
}