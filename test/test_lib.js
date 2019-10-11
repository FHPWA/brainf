/**
 * Iterates through an array of tests and adds rows to an table elementId
 * @param {function[]} tests
 * @param {elementId} testTable
 */
function iterateTests(tests, testTable) { // eslint-disable-line no-unused-vars
	// Hidden Output Generation
	hiddenOutput = document.createElement("input");
	hiddenOutput.type = "hidden";
	hiddenOutput.id = testTable.id + "_output";

	document.body.appendChild(hiddenOutput);


	// Table Generation
	const headRow = testTable.insertRow();
	const headings = ["Test", "Result"];
	for (let index = 0; index < 2; index++) {
		const head = document.createElement("th");
		head.innerText = headings[index];
		headRow.appendChild(head);
	}
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
 * Builds an assertion message based on bool, expected, actual, relation
 * @param {boolean} bool
 * @param {string} expected
 * @param {string} actual
 * @param {string} relation
 * @return {string} errorMessage
 */
function assertionMessage(bool, expected, actual, relation) {
	if (bool) {
		return [true, "OK"];
	} else {
		if (relation.substring(0, 3) === "not") {
			return [false, "Assertion Error! " + expected + relation.substring(3) +
			" to " + actual];
		} else {
			return [false, "Assertion Error! " + expected + " not " + relation +
			actual];
		}
	}
}

/**
 *
 * @param {{}} expected
 * @param {{}} actual
 * @return {boolean} result
 */
function doAssertEquals(expected, actual) {
	return expected === actual;
}
/**
 *
 * @param {{}} expected
 * @param {function} method
 * @param {elementId} target
 * @return {boolean} result
 */
function doAssertTargetEquals(expected, method, target) {
	method();
	return expected === document.getElementById(target).value;
}
/**
 *
 * @param {boolean} actual
 * @return {boolean} result
 */
function doAssertTrue(actual) {
	return actual;
}

/**
 * Asserts method returns an error
 * @param {function} method
 * @return {boolean} result
 */
function doAssertError(method) {
	try {
		method();
	} catch (error) {
		return true;
	}
	return false;
}

/**
 * Asserts that expected equals actual
 * @param {{}} expected
 * @param {{}} actual
 * @return {arr[]} boolean, string
 */
function assertEquals(expected, actual) { // eslint-disable-line no-unused-vars
	return (assertionMessage(doAssertEquals(expected, actual), expected,
		actual, "equal to"));
}

/**
 * Asserts that expected does not equal actual
 * @param {{}} expected
 * @param {{}} actual
 * @return {arr[]} boolean, string
 */
function assertNotEquals(expected, // eslint-disable-line no-unused-vars
	actual) {
	return (assertionMessage(!doAssertEquals(expected, actual), expected,
		actual, "not equal to"));
}


/**
 * Asserts that a variable is true or that a statement evaluates to true
 * @param {boolean} actual
 * @return {arr[]} boolean, string
 */
function assertTrue(actual) { // eslint-disable-line no-unused-vars
	return (assertionMessage(doAssertTrue(actual), "true", actual,
		"equal to"));
}

/**
 * Asserts that a variable is true or that a statement evaluates to true
 * @param {boolean} actual
 * @return {arr[]} boolean, string
 */
function assertFalse(actual) { // eslint-disable-line no-unused-vars
	return (assertionMessage(!doAssertTrue(actual), "true", actual,
		"not equal to"));
}

/**
 * Asserts method returns an error
 * @param {function} method
 * @return {arr[]} boolean, string
 */
function assertError(method) { // eslint-disable-line no-unused-vars
	return (assertionMessage(doAssertError(method), "error", actual,
		"produce an"));
}

/**
 * Asserts method doesn't return an error
 * @param {function} method
 * @return {arr[]} boolean, string
 */
function assertNotError(method) { // eslint-disable-line no-unused-vars
	return (assertionMessage(!doAssertError(method), "error", actual,
		"not produce an"));
}

/**
 *
 * @param {{}} expected
 * @param {function} method
 * @param {elementId} target
 * @return {boolean} result
 */
function assertTargetEquals(expected, // eslint-disable-line no-unused-vars
	method, target) {
	return (assertionMessage(doAssertTargetEquals(expected, method, target),
		expected, method, "yielded by "));
}

/**
 *
 * @param {{}} expected
 * @param {function} method
 * @param {elementId} target
 * @return {boolean} result
 */
function assertNotTargetEquals(expected, // eslint-disable-line no-unused-vars
	method, target) {
	return (!assertionMessage(doAssertTargetEquals(expected, method, target),
		expected, method, "not yielded by "));
}

/**
 * @param {string} message
 * @return {arr[]} boolean, string
 */
function fail(message) { // eslint-disable-line no-unused-vars
	return [false, message || "Fail"];
}

/**
 * Does nothing (my methods sometimes call showToast so add a sink for it to
 * prevent breaking)
 * @param {string} text
 * @return {void}
 */
function showToast(text) { // eslint-disable-line no-unused-vars
	return;
}
