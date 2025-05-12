/*  ЗАДАНИЕ 1 
Объяви переменные и присвой им значения разных типов. 
Используй оператор typeof, чтобы вывести в консоль типы этих переменных; */

const variableNumber = 52;
console.log(typeof variableNumber);


const variableString = 'Bombardiro Crocodillo';
console.log(typeof variableString)


const variableBoolean = true;
console.log(typeof variableBoolean);


let variableUndifined;
console.log(typeof variableUndifined);


const variableNull = null;
console.log(typeof variableNull);


const variableArray = [8, 800, 55, 3, 555];
console.log(typeof variableArray);


const variableObject = {
    name: 'Esspresso Seniora',
    sister: 'Ballerina Capuchina',
    loveDarkStyle: true,
    age: 20
}
console.log(typeof variableObject);


const variableSymbol = Symbol('Trallalela Trallala');
console.log(typeof variableSymbol);


/*  ЗАДАНИЕ 2
Изучи разницу между хранением данных по ссылке и по значению более детально. 
Напиши своими словами, как ты это понял.
 Приведи примеры, которые показывают эту разницу. */
 

/* Хранение по значению
Используется у примитивных типов данных в JavaScript (number, string, boolean, null, undefined, symbol, bigint)
Суть: Создается полная копия данных. Если изменить копию, оригинал не поменяется.

Пример: */

let firstNumber = 5;
let secondNumber = firstNumber; 
secondNumber = 10;    

console.log(firstNumber); // 5 (оригинал не изменился)
console.log(secondNumber); // 10

/* 2. Хранение по ссылке
Используется при работе с object, array, function 
Суть: Передается ссылка на определенное место в памяти которое занимает обьект.
Изменения по ссылке меняют оригинал.

Пример: */

let userName1 = { name: "Alice" };
let userName2 = userName1; // Копируется ссылка, а не объект!
userName2.name = "Bob"; // Меняем данные по ссылке

console.log(userName1.name); // "Bob" (оригинал изменился!)
console.log(userName2.name);