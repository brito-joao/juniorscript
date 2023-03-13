export function mainInterpreter(rawCode){
    const chars = rawCode.split('');
    console.log(chars);

    let lineCharsArray=lineSplitter(chars);
    lineToWords(lineCharsArray);
    //loop through lines to identify the words


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