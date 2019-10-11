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
	return assertEquals(1, brainfGreaterThan(0));
}

/**
 * @return {boolean} testResult
 */
function test_brainfGreaterThan_MAX() {
	return assertEquals(MAX_SIZE, brainfGreaterThan(MAX_SIZE));
}

/**
 * @return {boolean} testResult
 */
function test_brainfPrint() {
	return assertTargetEquals("A", function() {
		brainfPrint("ASCII", "test_brainf_output", [65], 0);
	}, "test_brainf_output");
}

/**
 * @return {boolean} testResult
 */
function test_brainfInput() {
	return fail("Cannot test this");
}

/**
 * @return {boolean} testResult
 */
function test_brainfLeftBracket() {
	return assertEquals(1, brainfLeftBracket("[]", 0, [0], 0));
}

/**
 * @return {boolean} testResult
 */
function test_brainfLeftBracket_2deep() {
	return assertEquals(3, brainfLeftBracket("[[]]", 0, [0], 0));
}

/**
 * @return {boolean} testResult
 */
function test_brainfLeftBracket_notMatching() {
	return assertEquals(1, brainfLeftBracket("[", 0, [0], 0));
}

/**
 * @return {boolean} testResult
 */
function test_brainfRightBracket() {
	return assertEquals(0, brainfRightBracket("[]", 1, [1], 0));
}

/**
 * @return {boolean} testResult
 */
function test_brainfRightBracket_2deep() {
	return assertEquals(0, brainfRightBracket("[[]]", 3, [1], 0));
}

/**
 * @return {boolean} testResult
 */
function test_brainfRightBracket_notMatching() {
	return assertEquals(-1, brainfRightBracket("]", 0, [1], 0));
}

/**
 * @return {boolean} testResult
 */
function test_brainf_subtract() {
	return assertTargetEquals("2, ", function() {
		brainf("+++++>+++[-<->]<.", "INT", "test_brainf_output");
	}, "test_brainf_output");
}

/**
 * @return {boolean} testResult
 */
function test_brainf_mult() {
	return assertTargetEquals("15, ", function() {
		brainf("+++++[->+++<]>.", "INT", "test_brainf_output");
	}, "test_brainf_output");
}

/**
 * @return {boolean} testResult
 */
function test_brainf_helloWorld() {
	return assertTargetEquals("Hello World!\n", function() {
		// eslint-disable-next-line max-len
		brainf("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.",
			"ASCII", "test_brainf_output");
	}, "test_brainf_output");
}


const testTable = document.getElementById("test_brainf");
const tests = [test_brainfGreaterThan, test_brainfGreaterThan_MAX,
	test_brainfInput, test_brainfLeftBracket, test_brainfLeftBracket_2deep,
	test_brainfLeftBracket_notMatching, test_brainfLessThan,
	test_brainfLessThan_0, test_brainfMinus, test_brainfMinus_MININT,
	test_brainfPlus, test_brainfPlus_MAXINT, test_brainfPrint,
	test_brainfRightBracket, test_brainfRightBracket_2deep,
	test_brainfRightBracket_notMatching, test_brainf_subtract,
	test_brainf_helloWorld, test_brainf_mult];
iterateTests(tests, testTable);
