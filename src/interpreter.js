export function mainInterpreter(rawCode){
    let output={
        "log":""
    };
    let syntax=["escrever"];
    const chars = rawCode.split('');

    console.log(chars);


    //this array is filtered by line and inside each line, "words";
    let wordArray=lineToWords(lineSplitter(chars));
    syntaxCheck(wordArray,syntax,output);
    console.log(output,"OUT");
    //loop through lines to identify the words

    return output.log;
}
function syntaxCheck(array,syntaxArray,output){
    
    array.forEach((line,index1)=>{
        //compare like this until I think of something better
        line.forEach((word,index2)=>{
            
            if(word==syntaxArray[0]){
                //make output equal to all things until the end
                //make function that returns the rest of the line plus the \n at the end
                output.log+=escreverWriter(line,word,index1,index2,array);
                
            } 
        })
        
        
        
    })
    console.log(output,"outp");
}

function escreverWriter(line,word,index1,index2,array){
    let wordsToEnd=line.length-index2+1;
    let lineOut="";
    for(var i=0;i<wordsToEnd;i++){
        
        lineOut+=array[index1][index2+wordsToEnd];
    }
    console.log(lineOut,array,index1,index2,"lineout");
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