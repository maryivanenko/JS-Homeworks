//1. Напиши код, который решает примеры с картинки выше. Результаты округлить;

// Пример1 
const number = 2;
result = number * number + number;
console.log(result) // 6

// Пример2
const number1 = 54;
const number2 = 16;
sin54 = Math.sin(number1);
cos16 = Math.cos(number2);
result = ((sin54 * cos16) ** 2).toFixed(2);
console.log(result) // 0.29

// Пример3

const numerator = 16 * Math.sqrt((13.2 * 71.90));
const denominator = 2.4 / 7 ** 4;
const firstTerm = numerator / denominator;

const secondTerm = 3 ** Math.sqrt(49);
summ = firstTerm + secondTerm;

multiplier = 2 ** 7;
result = summ * multiplier;
console.log(result.toFixed(2)) // 63399251.64

/*2. Есть несколько числовых переменных (задай их самостоятельно). 
С помощью арифметических операторов и операторов сравнения определи, четное это число или нет;*/

const firstNumber = 5;
const secondNumber = 4;
const thirdNumber = -2;
const fourthNumber = 0;

// Проверяем чётность
function parityCheck(number) {  

  if (number % 2 === 0) {
    return `Число ${number} - Чётное`;
  } 
  else {
    return `Число ${number} - Нечётное`;
  }
}

// Проверяем все числа
console.log(parityCheck(firstNumber));
console.log(parityCheck(secondNumber));
console.log(parityCheck(thirdNumber));
console.log(parityCheck(fourthNumber));



/*3. Напиши программу, которая проверяет, если переменная name пуста или не задана, 
то в консоль должно выводиться сообщение "Hello, Guest!". 
Если переменная name содержит значение, то программа должна вывести сообщение 
"Hello, [name]!", где [name] — это значение переменной. */

const name = 'Mary';

if (name === null || name === '')  {
    console.log("Hello, Guest!");
    }
else {
    console.log(`Hello, ${name}!`);
}


