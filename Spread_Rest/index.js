// Задание 1. Создай функцию, которая принимает произвольное количество чисел и возвращает их среднее значение;
function average(...numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    const quantity = numbers.length;
    return sum / quantity
}

const numbers = [1, 2, 3, 4, 5];

console.log(average(...numbers)); // 3


// Задание 2. Создай функцию, которая принимает объект с информацией о пользователе (имя, возраст, страна)
//  и возвращает строку с этой информацией, используя деструктуризацию;

function getUserInfo({name, age, country}) {
    return `Имя: ${name}, Возраст: ${age}, Страна: ${country}`
};
const user = { 
    name: 'Mary',
    age: 21,
    country: 'Russia',
};
console.log(getUserInfo(user)); // Имя: Mary, Возраст: 21, Страна: Russia


// Задание 3. Создай объект с вложенными объектами и массивами. 
// Используй деструктуризацию, чтобы извлечь несколько значений на разных уровнях вложенности;

const userInfo = {
    userCountry: 'USA',
    userCity: 'New York',
    personalInfo: {
        userName: 'Marshall',
        userAge: 24,
        adress: { 
            street: 'Main St',
            house: 10,
        },
    },
    emailInfo: {
        hasEmail: true,
        email: 'gmail.com',
    },
    hobbies: ['sports', 'music', 'reading'],
    friends: [
        {name: 'Emma', age: 25, hobby: ['music', 'sports']},
        {name: 'Lucas', age: 23, hobby: ['music', 'reading']}  
    ],
};

const {
    userCountry,
    userCity,
    personalInfo: {
        userName,
        userAge,
        adress: { street, house }
    },
    emailInfo: { hasEmail, email },
    hobbies: [hobby1, hobby2, hobby3],
    friends: [
        { name: friend1Name, age: friend1Age, hobby: [friend1Hobby1, friend1Hobby2] },
        { name: friend2Name, age: friend2Age, hobby: [friend2Hobby1, friend2Hobby2] }
    ]
} = userInfo;

console.log(userName, userAge, email);  //Marshall 24 gmail.com
console.log(hobby1, friend1Name); // sports Emma 


// Задание 4. Используй оператор `spread` для создания нового массива, который включает все элементы исходного массива 
// и добавляет несколько новых элементов в начале и в конце;

const array = [1, 2, 3, 4, 5];
const newArray = [7, 10, ...array, 121, 60];
console.log(newArray) // [ 7, 10,   1,  2, 3, 4,  5, 121, 60 ]


// Задание 5. Используй оператор `rest` для создания функции, которая принимает объект с параметрами и 
// возвращает новый объект без одного указанного параметра.

function removeParametr (object, propertyToRemove) {
    const {[propertyToRemove]: removed, ...rest} = object;
    return rest;
}

const oldObject = {
    name: 'Anna',
    age: 16,
    country: 'USA',
    hasAcar: false,
};

const newObject = removeParametr(oldObject, 'age');
console.log(newObject); // { name: 'Anna', country: 'USA', hasAcar: false }