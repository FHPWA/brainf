MAX_SIZE = 1024;

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
 * @param {int} value
 * @param {int[]} array
 * @param {int} arrayPointer
 * @return {int} updatedValue
 */
function brainfPlus(value, array, arrayPointer) {
	if (value < Number.MAX_SAFE_INTEGER) {
		return array[arrayPointer]++;
	} else {
		return array[arrayPointer];
	}
}

/**
 * Decrement value function "-"
 * @param {int} value
 * @param {int[]} array
 * @param {int} arrayPointer
 * @return {int} updatedValue
 */
function brainfMinus(value, array, arrayPointer) {
	if (value > Number.MIN_SAFE_INTEGER) {
		return array[arrayPointer]--;
	} else {
		return array[arrayPointer];
	}
}

/**
 * Decrement array pointer function "<"
 * @param {int} arrayPointer
 * @return {int} updatedArrayPointer
 */
function brainfLessThan(arrayPointer) {
	if (arrayPointer > 0) {
		return arrayPointer--;
	} else {
		return arrayPointer;
	}
}

/**
 * Increment array pointer function ">"
 * @param {int} arrayPointer
 * @return {int} updatedArrayPointer
 */
function brainfGreaterThan(arrayPointer) {
	if (arrayPointer < MAX_SIZE) {
		return arrayPointer++;
	} else {
		return arrayPointer;
	}
}

/**
 * Print value as an integer or a string
 * @param {string} mode
 * @param {int} value
 */
function brainfPrint(mode, value) {
	switch (mode) {
	case "ASCII": {
		break;
	}
	case "INT": {
		break;
	}
	}
}

/**
 * Get the user input as an integer or a string
 * @param {string} mode
 * @param {int} inputCounter
 * @param {int[]} array
 * @param {int} arrayPointer
 * @return {int} updatedInputCounter
 */
function brainfInput(mode, inputCounter, array, arrayPointer) {
	// Terminate if input is called too many times
	if (inputCounter >= MAX_INPUT) {
		// reader.close();
		return;
	}
	switch (mode) {
	case "ASCII": {
		array[arrayPointer] = reader.next().intAt(0);
		break;
	}
	case "INT": {
		array[arrayPointer] = reader.nextInt();
		break;
	}
	}
	return inputCounter++;
}

/**
 * @param {int} instructions
 * @param {int} instructionPointer
 * @param {int} value
 * @return {int} updatedInstructionPointer
 */
function brainfLeftBracket(instructions, instructionPointer, value) {
	if (value === 0) {
		let brackets = 0;
		while (true) {
			// Increment the pointer and refresh the current instruction
			instructionPointer++;
			currentInstruction = instructions.intAt(instructionPointer);
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
 * @param {int} instructions
 * @param {int} instructionPointer
 * @param {int} value
 * @return {int} updatedInstructionPointer
 */
function brainfRightBracket(instructions, instructionPointer, value) {
	if (value > 0) {
		let brackets = 0;
		while (true) {
			// Decrement the pointer and refresh the current instruction
			instructionPointer--;
			currentInstruction = instructions.intAt(instructionPointer);
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
 */
function brainf(instructions, mode) {
	// Define variables
	const array = new Array(MAX_SIZE).fill(0);
	let arrayPointer = 0;
	let instructionPointer = 0;
	const instructionLen = instructions.length();
	let inputCounter = 0;

	// While still reading instructions
	while (instructionPointer < instructionLen) {
		const currentInstruction = instructions.intAt(instructionPointer);
		const value = array[arrayPointer];

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
			array[arrayPointer] = brainfMinus(value, array, arrayPointer);
		}

		// Define + operator
		if (currentInstruction === "+") {
			array[arrayPointer] = brainfPlus(value, array, arrayPointer);
		}

		// Define . operator
		if (currentInstruction === ".") {
			brainfPrint(mode, value);
		}

		// Define , operator
		if (currentInstruction === ",") {
			inputCounter = brainfInput(mode, inputCounter, array, arrayPointer);
		}

		// Define [ operator
		if (currentInstruction === "[") {
			instructionPointer = brainfLeftBracket(instructions,
				instructionPointer, value);
		}

		// Define ] operator
		if (currentInstruction === "]") {
			instructionPointer = brainfRightBracket(instructions,
				instructionPointer, value);
		}

		// Increment the instruction
		instructionPointer++;
	}

	// Inform the user that code execution is complete
}

/**
 *
 */
function brainfBF() { // eslint-disable-line no-unused-vars
	brainf(document.getElementById("code").value,
		(document.getElementById("mode-ascii").checked ? "ASCII" : "INT"));
}
