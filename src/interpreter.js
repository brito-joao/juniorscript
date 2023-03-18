export function mainInterpreter(rawCode){
    let output={
        "log":""
    };
    let syntax=["Escrever","="];
    let variables=[];
    const chars = rawCode.split('');

    //this array is filtered by line and inside each line, "words";
    let wordArray=lineToWords(lineSplitter(chars));
    try{
        syntaxCheck(wordArray,syntax,output,variables);
    }
    catch(e){
        output=e;
    }
    
    console.log(output,"OUT");
    //loop through lines to identify the words

    return output.log;
}
function syntaxCheck(array,syntaxArray,output,variables){
    
    array.forEach((line,index1)=>{
        //compare like this until I think of something better
        line.forEach((word,index2)=>{
            
            //for the escrever
            if(word==syntaxArray[0]){
                console.log(index2,"index2");
                //make output equal to all things until the end
                //make function that returns the rest of the line plus the \n at the end

                //only show message if is with - infront, to show string and stop at the end point.
                if(line[index2+1]=="-"){
                    output.log+=escreverWriter(line,word,index1,index2+2);
                }
                variables.forEach((variable,varIndex)=>{
                    
                    if(line[index2+1]==variable.name){
                        //remove this consolelog
                        console.log(line[index2+1],line,variables,word, "the end");
                        output.log+= "\n"+variable.value;
                    }
                });

                
                
                
            }

            //For the variable creation,

            //the goal is to read the "=" sign and then read back the var name
            //when you create a variable store the var like an object with the name and the value in the same object, genius move;)


            //the = variable creater
            if(word==syntaxArray[1]){
                //check if there is a variable that has the same name
                //create a for loop to check all the variables
                let newVariable;
                //make loop if there has 1 or more variables
                
                if(variables.length>=1){variables.forEach((variable,index)=>{
                    if(line[index2-1]==variable.name){
                        console.log(variables.length>=1,"vars");
                        newVariable=variableAllocator(variable,index2,line);
                    }
                });

                }else{(newVariable=variableCreator(line,index2),variables.push(newVariable))};
                
                
                //only if the variable is new 
            

            }
        })
        
        
        
    })
    console.log(output,"outp");
}

function variableAllocator(variable,index,line){
    //change obje<ct to the new value in the line 
    console.log(variable,index,line, "hello people");
    variable.value=line[index+1];
    return variable;
}

function variableCreator(line,index2){

    
    let variableName=line[index2-1];
    let variableValue=line[index2+1];
    let variableType=line[index2+2];
    let arrayTypeVariable=["int","float","string", "var"];
    if(variableType==arrayTypeVariable[0]){
        variableValue=parseInt(variableValue);
    }
    if(variableType==arrayTypeVariable[1]){
        variableValue=parseFloat(variableValue);
    }
    if(variableType==arrayTypeVariable[3]){
        //make a loop to find var name to assign the value
        
    }
    
    return {
        "name":variableName,
        "value":variableValue,
    }


}

//future idea: add way to stop the string 
function escreverWriter(line,word,index1,index2){
    let wordsToEnd=line.length-index2;
    let lineOut="";
    
    for(var i=0;i<wordsToEnd;i++){
        lineOut+=line[index2+i]+" ";
    }
    
    return "\n"+lineOut;
}
//this will return an array with the lines all divided by \n
function lineSplitter(charArray){
    let linesArray=[[]];
    let lineCounter=0;
    charArray.forEach((char) => {
        if(char=="\n"){
            lineCounter+=1;
            linesArray.push([]);
        }else{
            linesArray[lineCounter].push(char);
        }
    });
    return linesArray;

}
//this will return a filtered line array with words
function lineToWords(lineSplittedArray){
    let lines=[];
    let wordArray=[""];
    let lineCounter=0;
    let wordCounter=0;
    lineSplittedArray.forEach((line)=>{
        lines.push([""]);
        wordCounter=0;
        line.forEach((char)=>{

            if(char== " "){
                wordCounter+=1;
                lines[lineCounter].push("");
            }else{
                lines[lineCounter][wordCounter]+=char;
            };
        });
        lineCounter+=1;
        
        
    });
    return  lines;
}