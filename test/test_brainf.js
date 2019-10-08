/* eslint-disable camelcase */
/**
 * @return {boolean} testResult
 */
function test_brainfPlus() {
	return assertEquals(1, brainfPlus([0], 0));
}

/**
 * @return {boolean} testResult
 */
function test_brainfPlus_MAXINT() {
	return assertEquals(Number.MAX_SAFE_INTEGER,
		brainfPlus([Number.MAX_SAFE_INTEGER], 0));
}

/**
 * @return {boolean} testResult
 */
function test_brainfMinus() {
	return assertEquals(-1, brainfMinus([0], 0));
}

/**
 * @return {boolean} testResult
 */
function test_brainfMinus_MININT() {
	return assertEquals(Number.MIN_SAFE_INTEGER,
		brainfMinus([Number.MIN_SAFE_INTEGER], 0));
}

/**
 * @return {boolean} testResult
 */
function test_brainfLessThan() {
	return assertEquals(0, brainfLessThan(1));
}

/**
 * @return {boolean} testResult
 */
function test_brainfLessThan_0() {
	return assertEquals(0, brainfLessThan(0));
}

/**
 * @return {boolean} testResult
 */
function test_brainfGreaterThan() {
	return assertError();
}

/**
 * @return {boolean} testResult
 */
function test_brainfGreaterThan_MAX() {
	return assertError();
}

/**
 * @return {boolean} testResult
 */
function test_brainfPrint() {
	return assertError();
}

/**
 * @return {boolean} testResult
 */
function test_brainfInput() {
	return assertError();
}

/**
 * @return {boolean} testResult
 */
function test_brainfLeftBracket() {
	return assertError();
}

/**
 * @return {boolean} testResult
 */
function test_brainfLeftBracket_2deep() {
	return assertError();
}

/**
 * @return {boolean} testResult
 */
function test_brainfLeftBracket_notMatching() {
	return assertError();
}

/**
 * @return {boolean} testResult
 */
function test_brainfRightBracket() {
	return assertError();
}

/**
 * @return {boolean} testResult
 */
function test_brainfRightBracket_2deep() {
	return assertError();
}

/**
 * @return {boolean} testResult
 */
function test_brainfRightBracket_notMatching() {
	return assertError();
}

/**
 * @return {boolean} testResult
 */
function test_brainf_add() {
	return assertError();
}

/**
 * @return {boolean} testResult
 */
function test_brainf_mult() {
	return assertError();
}

/**
 * @return {boolean} testResult
 */
function test_brainf_helloWorld() {
	return assertError();
}


const testTable = document.getElementById("test_brainf");
const tests = [test_brainfGreaterThan, test_brainfGreaterThan_MAX,
	test_brainfInput, test_brainfLeftBracket, test_brainfLeftBracket_2deep,
	test_brainfLeftBracket_notMatching, test_brainfLessThan,
	test_brainfLessThan_0, test_brainfMinus, test_brainfMinus_MININT,
	test_brainfPlus, test_brainfPlus_MAXINT, test_brainfPrint,
	test_brainfRightBracket, test_brainfRightBracket_2deep,
	test_brainfRightBracket_notMatching, test_brainf_add,
	test_brainf_helloWorld, test_brainf_mult];
iterateTests(tests, testTable);
