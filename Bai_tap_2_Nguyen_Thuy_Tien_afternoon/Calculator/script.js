let display = document.getElementById('display');
let expression = '';

function appendNumber(num) {
    expression += num;
    display.innerText = expression;
}

function appendOperator(op) {
    if (expression === '' && op !== '-') return;
    const lastChar = expression[expression.length - 1];
    if ('+-*/'.includes(lastChar)) {
        expression = expression.slice(0, -1); // tránh 2 toán tử liên tiếp
    }
    expression += op;
    display.innerText = expression;
}

function clearDisplay() {
    expression = '';
    display.innerText = '0';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    display.innerText = expression || '0';
}

function calculate() {
    try {
        const result = eval(expression);
        display.innerText = result;
        expression = result.toString();
    } catch {
        display.innerText = 'Lỗi';
        expression = '';
    }
}