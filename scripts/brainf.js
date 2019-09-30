

/* Open the system file selector and upload a stream of chars with a filename for
each file
*/
function upload(files, targets){
    output = [];
    for(let index = 0, file; file = files[index]; index++){
        let reader = new FileReader();
        let contents = ""
        reader.readAsText(file, "UTF-8");
        reader.onload = function(event){
            document.getElementById(targets[index]).value = event.target.result;
        }
        output.push(file.name);
    }
    return output

}


/* Download a stream of chars and set a filename
*/
function download(filename, chars){
    let blob = new Blob([chars], {type: 'application/octet-stream'});
    let blobURL = window.URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.download = filename;
    link.href = blobURL;
    link.style.display = "none"
    document.body.appendChild(link);
    link.click()
    document.body.removeAttributeNode(link)

}

/*
*/
function downloadBf(){
    download(document.getElementById("filename").value, document.getElementById("code").value)
}

function uploadBf(){
    fileData = upload(document.getElementById("files").files, ["code"])
    document.getElementById("filename").value = fileData[0];
}


/*
Brainf interpreter here
*/


function brainfPlus(value, array, arrayPointer){
    if (value < integer.MAX_VALUE) {
        return array[arrayPointer]++;
    } else {
        return;
    }

}
function brainfMinus(value, array, arrayPointer){
    if (value > integer.MIN_VALUE) {
        return array[arrayPointer]--;
    } else {
        return;
    }

}
function brainfLessThan(arrayPointer){
    if (arrayPointer != 0) {
        return arrayPointer--;
    } else {
        return;
    }

}
function brainfGreaterThan(arrayPointer){
    if (arrayPointer < MAX_SIZE) {
        return arrayPointer++;
    } else {
        return;
    }

}
function brainfPrint(mode){
    switch(mode){
        case ASCII:{
            break;
        }
        case let:{
            break;
        }
    }

}
function brainfInput(mode, inputCounter){

    // Terminate if input is called too many times
    if(inputCounter >= MAX_INPUT){
        //reader.close();
        return;
    }
    switch(mode){
        case ASCII:{
            array[arrayPointer] = reader.next().letAt(0);
            break;
        }
        case let:{
            array[arrayPointer] = reader.nextlet();
            break;
        }
    }
    return inputCounter ++;

}


function brainfLeftBracket(instructionPointer, value){
    if (value == 0) {
        let brackets = 0;
        while (true) {
            // Increment the pointer and refresh the current instruction
            instructionPointer++;
            currentInstruction = instruction.intAt(instructionPointer);
            // Another opening bracket is encountered
            if (currentInstruction == '[') {
                brackets++;
            }
            // A closing bracket is encountered
            else if (currentInstruction == ']') {
                // If this is the matching bracket
                if (brackets == 0) {
                    break;
                } else {
                    brackets--;
                }
            }
        }
    }
}


function brainfRightBracket(instructionPointer, value){
    if (value > 0) {
        let brackets = 0;
        while (true) {
            // Decrement the pointer and refresh the current instruction
            instructionPointer--;
            currentInstruction = instruction.intAt(instructionPointer);
            // Another closing bracket is encountered
            if (currentInstruction == ']') {
                brackets++;
            }
            // An opening bracket is encountered
            else if (currentInstruction == '[') {
                // If this is the matching bracket
                if (brackets == 0) {
                    break;
                } else {
                    brackets--;
                }
            }
        }

    }
}





/*
    * The purpose of this function is to take the cleaned syntax and execute
    * the appropriate function based on this
    */
function brainf(instructions, mode) {
    // Define variables
    let array = [];
    let arrayPointer = 0;
    let instructionPointer = 0;
    let instructionLen = instruction.length();
    let inputCounter = 0;

    // While still reading instructions
    while (instructionPointer < instructionLen) {
        let currentInstruction = instructions.intAt(instructionPointer);
        let value = array[arrayPointer];

        // Define < operator
        if (currentInstruction == '<') {
            arrayPointer = brainfLessThan(arrayPointer)
        }

        // Define > operator
        if (currentInstruction == '>') {
            arrayPointer = brainfGreaterThan(arrayPointer)
        }

        // Define - operator
        if (currentInstruction == '-') {
            array[arrayPointer] = brainfMinus(value, array, arrayPointer)
        }

        // Define + operator
        if (currentInstruction == '+') {
            array[arrayPointer] = brainfMinus(value, array, arrayPointer)
        }

        // Define . operator
        if (currentInstruction == '.') {
            brainfPrint(mode)
        }

        // Define , operator
        if (currentInstruction == ',') {
            inputCounter = brainfInput(mode, inputCounter);
        }

        // Define [ operator
        if (currentInstruction == '[') {
            arrayPointer = brainfLeftBracket(instructionPointer, value)
        }

        // Define ] operator
        if (currentInstruction == ']') {
            arrayPointer = brainfRightBracket(instructionPointer, value)
        }

        // Increment the instruction
        instructionPointer++;
    }

    // Inform the user that code execution is complete

}
