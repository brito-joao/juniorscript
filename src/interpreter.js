export function mainInterpreter(rawCode){
    let output={
        "log":""
    };
    let syntax=["Escrever","="];
    let variables=[];
    const chars = rawCode.split('');

    console.log(chars);


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
                        output.log+= "\n"+variable.value;
                    }
                });

                
                
                
            }

            //For the variable creation,

            //the goal is to read the "=" sign and then read back the var name
            //when you create a variable store the var like an object with the name and the value in the same object, genius move;)


            //the = variable creater
            if(word==syntaxArray[1]){
                let newVariable=variableCreator(line,index2);
                variables.push(newVariable);

            }
        })
        
        
        
    })
    console.log(output,"outp");
}


function variableCreator(line,index2){
    let variableName=line[index2-1];
    let variableValue=line[index2+1];
    let variableType=line[index2+2];
    let arrayTypeVariable=["int","float","string"];
    if(variableType==arrayTypeVariable[0]){
        variableValue=parseInt(variableValue);
    }
    if(variableType==arrayTypeVariable[1]){
        variableValue=parseFloat(variableValue);
    }
    
    console.log(variableName," <= variable name",variableValue," the value");
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
        console.log(line,word,index1,index2,"lineout");
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
    console.log(linesArray);
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
                console.log(lines[lineCounter]);
                lines[lineCounter].push("");
            }else{
                console.log("lines",lines[lineCounter][wordCounter],char);
                lines[lineCounter][wordCounter]+=char;
            };
        });
        lineCounter+=1;
        
        
    });
    console.log(lines);
    return  lines;
}