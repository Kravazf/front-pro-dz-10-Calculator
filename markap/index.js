// За допомогою PROMPT запитайте користувача, що він хоче зробити (+ - / *). Запитайте, поки він не 
// дасть правильну відповідь.
// Запитує, скільки операндів він хоче використати. Це має бути ЧИСЛО більше 1 і менше 7. Запитуйте,
//  поки він не дасть правильну відповідь.
// Запит кожного операнда в користувача. Це має бути ЧИСЛО. Запитайте, поки він не дасть правильну
//  відповідь.
// За допомогою ALERT або console.log відобразити остаточний результат дії (+ - / *).

// debugger
do {
  operation = prompt('Яку операцію ви хочете виконати? (+ - / *)');
} while (operation !== '+' && operation !== '-' && operation !== '/' && operation !== '*');

do {
  numOperands = parseInt(prompt('Скільки операндів ви хочете використовувати? (2-6)'));
} while (isNaN(numOperands) || numOperands < 2 || numOperands > 6);

num = 0;
result = 0;

do {
    num++

    do {
        operand = parseInt(prompt('Введіть операнд:'));
    } while (isNaN(operand));


    switch (operation) {
        case '+':
            result += operand;
            break;
        case '-':
            result = num ===1 ? operand : result - operand;
            break;
        case '*':
            result = num ===1 ? operand : result * operand;
            break;
        case '/':
            result = num ===1 ? operand : result / operand;
            break;                  
    }

} while (num < numOperands);

alert(result);
