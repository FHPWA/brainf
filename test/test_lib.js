/**
 * Iterates through an array of tests and adds rows to an table elementId
 * @param {function[]} tests
 * @param {elementId} testTable
 */
function iterateTests(tests, testTable) { // eslint-disable-line no-unused-vars
	for (let index = 0; index < tests.length; index++) {
		const newRow = testTable.insertRow();
		newRow.insertCell().innerText = tests[index].name;
		const testResult = tests[index]();
		const tableTestResult = newRow.insertCell();
		const img = document.createElement("img");
		img.src = testResult[0] + ".svg";
		tableTestResult.appendChild(img);
		const resultText = document.createElement("p");
		resultText.innerText = testResult[1];
		tableTestResult.appendChild(resultText);
		tableTestResult.className = testResult[0];
	}
}

/**
 * Builds an assertion error message based on expected, actual, relation
 * @param {string} expected
 * @param {string} actual
 * @param {string} relation
 * @return {string} errorMessage
 */
function assertionErrorMessage(expected, actual, relation) {
	if (relation.substring(0, 3) === "not") {
		return "Assertion Error! " + expected + relation.substring(3) +
		" to " + actual;
	} else {
		return "Assertion Error! " + expected + " not " + relation + " to " +
		actual;
	}
}

/**
 * Asserts that expected equals actual
 * @param {obj} expected
 * @param {obj} actual
 * @return {arr[]} boolean, string
 */
function assertEquals(expected, actual) {
	if (expected === actual) {
		return [true, "OK"];
	} else {
		return [false, assertionErrorMessage(expected, actual, "equal")];
	}
}

/**
 * Asserts that expected does not equal actual
 * @param {obj} expected
 * @param {obj} actual
 * @return {arr[]} boolean, string
 */
function assertNotEquals(expected, actual) {
	if (expected !== actual) {
		return [true, "OK"];
	} else {
		return [false, assertionErrorMessage(expected, actual, "not equal")];
	}
}

/**
 * Alias for assertEquals
 * @param {obj} expected
 * @param {obj} actual
 * @return {arr[]} boolean, string
 */
function assertEqual(expected, actual) { // eslint-disable-line no-unused-vars
	return assertEquals(expected, actual);
}

/**
 * Alias for assertNotEquals
 * @param {obj} expected
 * @param {obj} actual
 * @return {arr[]} boolean, string
 */
function assertNotEqual(expected, // eslint-disable-line no-unused-vars
	actual) {
	return assertNotEquals(expected, actual);
}

/**
 * @return {arr[]} boolean, string
 */
function assertError() { // eslint-disable-line no-unused-vars
	return [false, "Assert Error"];
}
