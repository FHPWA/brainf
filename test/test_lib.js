/**
 *
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
		img.src = testResult + ".svg";
		tableTestResult.appendChild(img);
		const resultText = document.createElement("p");
		resultText.innerText = testResult;
		tableTestResult.appendChild(resultText);
		tableTestResult.className = testResult;
	}
}
