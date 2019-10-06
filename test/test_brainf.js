/**
 * @return {boolean} testResult
 */
function test_brainfPlus() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainfPlus_MAXINT() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainfMinus() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainfMinus_MININT() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainfLessThan() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainfLessThan_0() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainfGreaterThan() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainfGreaterThan_MAX() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainfPrint() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainfInput() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainfLeftBracket() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainfLeftBracket_2deep() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainfLeftBracket_notMatching() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainfRightBracket() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainfRightBracket_2deep() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainfRightBracket_notMatching() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainf_add() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainf_mult() {
    return true;
}

/**
 * @return {boolean} testResult
 */
function test_brainf_helloWorld() {
    return false;
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
