// Задание 1. Есть массив чисел. Преобразуй массив так, чтобы там были квадраты чисел. Пример: [2, 3] -> [4, 9];

// Вариант 1

const arrayWithNumbers = [6, 7, 8, 9, 10, 100];
arrayWithNumbers.forEach((number, index, arr) => {
    arr[index] = number ** 2;
});
console.log(arrayWithNumbers); // [36, 49, 64, 81, 100, 10000]

//Вариант 2

const numbersArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const squareNumbersArray = numbersArray.map(number => number ** 2);
console.log(squareNumbersArray) // [121, 144, 169, 196, 225, 256, 289, 324, 361, 400]


// Задание 2. Есть массив c повторяющимися элементами. Отфильтруй массив так, чтобы там остались только уникальные элементы. 
// Пример: [1, 2, 2, 3, 4, 5, 5, 5, 6] -> [1, 2, 3, 4, 5, 6];

const randomArray = [1, 2, 2, 3, 4, 5, 5, 5, 6];
const uniqueArray = [... new Set(randomArray)]; // через new Set() создаем новую уникальную коллекцию  значений и потом через ... превращаем ее в массив
console.log(uniqueArray); // [1, 2, 3, 4, 5, 6]


//Задание 3. Есть массив чисел, посчитай сумму его элементов. Пример: [1, 2, 3] -> 6. Подсказка: используй reduce;

const arrayRandom = [3, 7, 5, 10];
const sumOfNumbers = arrayRandom.reduce((total, num) => total + num, 0);
console.log(sumOfNumbers);


//Задание 4. Напиши программу, которая развернет массив, то есть все элементы будут в обратном порядке. Нельзя использовать reverse()!

const startArray = [1, 2, 3, 4, 5, 6];
const reverseArray = startArray.reduce((total, num) => [num, ...total], []);
console.log(reverseArray)



// Задание 5. Создай две переменных - две строки с использованием let и const. Попробуйте изменить значения всех этих переменных. 
// Создайте два массива с использованием let и const. Попробуйте изменить массивы (добавить и удалить элементы) и переопределить сами массивы. 
// Посмотри на результаты и объясни своими словами (да, опять🙂), что и почему так произошло.


// Пример со строкой и let 
let firstString = 'Hello, world !';
console.log(firstString);

firstString = 'Goodbye, world !';
console.log(firstString); // переопределили без проблем на новое значение со словом гудбай так как лэт позволяет переопределять переменные в одной области видимости 


// Пример со строкой и const
const secondString = 'Привет, Яндекс!';
console.log(secondString); // 'Привет, Яндекс!

/*const secondString = 'Пока, Яндекс!';
console.log(secondString);  SyntaxError: Identifier 'secondString' has already been declared конст не дает менять переменную в одной области видимости так как это константа */

// Пример со массивом и let

let firstArray = [1, 2, 3];
console.log(firstArray); // 1, 2, 3

firstArray.push(9);
console.log(firstArray); // 1, 2, 3, 9  все работает без проблем так как мы меняем содержимое массива

firstArray = ["Новый массив"];
console.log(firstArray) // let позволяет полностью переопределить переменную любого типа и позволяет присвоить новый массив


// Пример со массивом и const

const secondArray = [4, 5, 6];
console.log(secondArray); // 4, 5, 6

secondArray.shift(5);
console.log(secondArray); // 5, 6 можно менять содержимое массива так как мы не меняем переменную саму по себе а лишь ее содержимое хранящиеся по ссылке

/* secondArray = ["Обновленный массив"];
   console.log(secondArray)    ----->  TypeError: Assignment to constant variable. нельзя менять переменную она константа 
защищает от изменения ссылку в памяти, а не содержимое объекта, const лишь фиксирует, что переменная всегда будет ссылаться на этот массив, но не защищает его содержимое */
