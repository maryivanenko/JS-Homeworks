// ЗАДАНИЕ 1. Проверь, содержится ли строка "fun" в строке "JavaScript is fun!";

const text = "JavaScript is fun!";
console.log(text.includes("fun")) // true 


// ЗАДАНИЕ 2. Попробуй написать условие, которое выполняется только в случае, если переменная имеет одно из falsy значений;
let variable;
if (!variable) {
    console.log(`Значение переменной - falsy`); // если variable — falsy, !variable даст true
} else {
    console.log('Это значение truthy');
}


// ЗАДАНИЕ 3. Напиши шаблонную строку, которая включает переменные firstName, lastName и occupation, и выводит сообщение вроде "Hello, my name is John Doe. I am a software developer.";

const firstName = 'Jhon';
const lastName = 'Doe';
const occupation = 'software developer';

const messege = `Hello, my name is ${firstName} ${lastName}. I am a ${occupation}`;
console.log(messege)


//ЗАДАНИЕ 4. Сравни null и undefined строго (===) и не строго (==), выведи результаты в консоль. Объясни своими словами, почему получились такие результаты 🙂

console.log(null == undefined); // Выведет true так как это оба falsy значения которые приводятся к false, не строгому равно тип данных не важен, важно значение, здесь оно одинаковое поэтому это истина

console.log(null === undefined); // Выведет false так как это разные типы данных



//ЗАДАНИЕ 5. Выведи в консоль результат выражения 1 + '1'. Да, этот удивительный JS... И снова попрошу тебя объяснить своими словами, что произошло🙂

console.log(1 + '1'); // Выведет в консоль 11 как строку

/* Почему так? 
Так как по умолчанию используеются строки в JS то при выполнении этого кода 1 превратится в строку,
а затем произойдет сложение двух строк "1" + "1" а это как раз будет "11" */
