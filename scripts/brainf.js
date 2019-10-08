const MAX_SIZE = 1024;
const MAX_INPUT = 32;
const MAX_COMPLEXITY = 1024;
let calls = 0;
let inputCounter = 0;

/**
 *
 */
function downloadBf() { // eslint-disable-line no-unused-vars
	download(document.getElementById("filename").value,
		document.getElementById("code").value);
	return;
}

/**
 *
 */
function uploadBf() { // eslint-disable-line no-unused-vars
	fileData = upload(document.getElementById("files").files, ["code"]);
	document.getElementById("filename").value = fileData[0];
	return;
}


/*
Brainf interpreter here
*/


/**
 * Increment value function "+"
 * @param {int[]} array
 * @param {int} arrayPointer
 * @return {int} updatedValue
 */
function brainfPlus(array, arrayPointer) {
	calls++;
	if (array[arrayPointer] < Number.MAX_SAFE_INTEGER) {
		return ++array[arrayPointer];
	} else {
		return array[arrayPointer];
	}
}

/**
 * Decrement value function "-"
 * @param {int[]} array
 * @param {int} arrayPointer
 * @return {int} updatedValue
 */
function brainfMinus(array, arrayPointer) {
	calls++;
	if (array[arrayPointer] > Number.MIN_SAFE_INTEGER) {
		return --array[arrayPointer];
	} else {
		return array[arrayPointer];
	}
}

/**
 * Increment array pointer function ">"
 * @param {int} arrayPointer
 * @return {int} updatedArrayPointer
 */
function brainfGreaterThan(arrayPointer) {
	if (arrayPointer < MAX_SIZE) {
		return ++arrayPointer;
	} else {
		return arrayPointer;
	}
}

/**
 * Decrement array pointer function "<"
 * @param {int} arrayPointer
 * @return {int} updatedArrayPointer
 */
function brainfLessThan(arrayPointer) {
	calls++;
	if (arrayPointer > 0) {
		return --arrayPointer;
	} else {
		return arrayPointer;
	}
}

/**
 * Print value as an integer or a string
 * @param {string} mode
 * @param {string} target
 * @param {int[]} array
 * @param {int} arrayPointer
 * @return {void}
 */
function brainfPrint(mode, target, array, arrayPointer) {
	calls++;
	switch (mode) {
	case "ASCII": {
		document.getElementById(target).value +=
		String.fromCharCode(array[arrayPointer]);
		break;
	}
	case "INT": {
		document.getElementById(target).value += array[arrayPointer] + ", ";
		break;
	}
	}
	return;
}

/**
 * Get the user input as an integer or a string
 * @param {string} mode
 * @param {int[]} array
 * @param {int} arrayPointer
 * @return {int} updatedInputCounter
 */
function brainfInput(mode, array, arrayPointer) {
	calls++;
	inputCounter++;
	// Terminate if input is called too many times
	if (inputCounter >= MAX_INPUT) {
		showToast("Input called too many times");
		return -1;
	}
	const reader = window.prompt("Input ("+mode+"):", "");
	if (reader.length < 1) {
		showToast("Input required");
		return -1;
	}
	switch (mode) {
	case "ASCII": {
		array[arrayPointer] = reader.charCodeAt(0);
		break;
	}
	case "INT": {
		array[arrayPointer] = parseInt(reader, 10);
		break;
	}
	}
	return 0;
}

/**
 * if the byte at the data pointer is zero, then instead of moving the
 * instruction pointer forward to the next command, jump it forward to
 * the command after the matching ] command.
 * @param {int} instructions
 * @param {int} instructionPointer
 * @param {int[]} array
 * @param {int} arrayPointer
 * @return {int} updatedInstructionPointer
 */
function brainfLeftBracket(instructions, instructionPointer, array,
	arrayPointer) {
	calls++;
	if (array[arrayPointer] === 0) {
		let brackets = 0;
		while (instructionPointer < instructions.length) {
			// Increment the pointer and refresh the current instruction
			instructionPointer++;
			currentInstruction = instructions.charAt(instructionPointer);
			// Opening bracket or A closing bracket is encountered
			if (currentInstruction === "[") {
				brackets++;
			} else if (currentInstruction === "]") {
				// If this is the matching bracket
				if (brackets === 0) {
					break;
				} else {
					brackets--;
				}
			}
		}
	}
	return instructionPointer;
}

/**
 * if the byte at the data pointer is nonzero, then instead of moving the
 * instruction pointer forward to the next command, jump it back to the
 * command after the matching [ command.
 * @param {int} instructions
 * @param {int} instructionPointer
 * @param {int[]} array
 * @param {int} arrayPointer
 * @return {int} updatedInstructionPointer
 */
function brainfRightBracket(instructions, instructionPointer, array,
	arrayPointer) {
	calls++;
	if (array[arrayPointer] !== 0) {
		let brackets = 0;
		while (instructionPointer < 0) {
			// Decrement the pointer and refresh the current instruction
			instructionPointer--;
			currentInstruction = instructions.charAt(instructionPointer);
			// Closing bracket or an opening bracket is encountered
			if (currentInstruction === "]") {
				brackets++;
			} else if (currentInstruction === "[") {
				// If this is the matching bracket
				if (brackets === 0) {
					break;
				} else {
					brackets--;
				}
			}
		}
	}
	return instructionPointer;
}


/**
 * Run the brainf program
 * @param {string} instructions
 * @param {string} mode
 * @param {string} target
 */
function brainf(instructions, mode, target) {
	document.getElementById(target).value = "";
	calls = 0;
	inputCounter = 0;
	// Define variables
	const array = new Array(MAX_SIZE).fill(0);
	let arrayPointer = 0;
	let instructionPointer = 0;
	const instructionLen = instructions.length;

	// While still reading instructions
	while (instructionPointer < instructionLen) {
		const currentInstruction = instructions.charAt(instructionPointer);

		// Define < operator
		if (currentInstruction === "<") {
			arrayPointer = brainfLessThan(arrayPointer);
		}

		// Define > operator
		if (currentInstruction === ">") {
			arrayPointer = brainfGreaterThan(arrayPointer);
		}

		// Define - operator
		if (currentInstruction === "-") {
			array[arrayPointer] = brainfMinus(array, arrayPointer);
		}

		// Define + operator
		if (currentInstruction === "+") {
			array[arrayPointer] = brainfPlus(array, arrayPointer);
		}

		// Define . operator
		if (currentInstruction === ".") {
			brainfPrint(mode, target, array, arrayPointer);
		}

		// Define , operator
		if (currentInstruction === ",") {
			const exitCode = brainfInput(mode, array, arrayPointer);
			if (exitCode < 0) {
				return;
			}
		}

		// Define [ operator
		if (currentInstruction === "[") {
			instructionPointer = brainfLeftBracket(instructions,
				instructionPointer, array, arrayPointer);
		}

		// Define ] operator
		if (currentInstruction === "]") {
			instructionPointer = brainfRightBracket(instructions,
				instructionPointer, array, arrayPointer);
		}

		// Increment the instruction
		instructionPointer++;

		if (calls > MAX_COMPLEXITY) {
			showToast("Too many calls");
			return;
		}
	}
	// Inform the user that code execution is complete
	showToast("Code execution complete");
}

/**
 * Call brainf with page specific params
 */
function brainfBF() { // eslint-disable-line no-unused-vars
	brainf(document.getElementById("code").value,
		(document.getElementById("mode-ascii").checked ? "ASCII" : "INT"),
		"output");
}
