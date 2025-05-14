// Задание 1. Напиши программу, которая проверяет число и выводит сообщение, является ли оно положительным, отрицательным или нулем;

const checkingNumber = Number(prompt('Введите число'));

if (checkingNumber > 0) {
    alert(`Число ${checkingNumber} - Положительное`);
} else if (checkingNumber < 0) {
    alert(`Число ${checkingNumber} - Отрицательное`);
} else {
    alert('Это число - Ноль');
}


/*  Задание 2.  Напиши программу, которая запрашивает у пользователя его рост и вес,
 на основании этих данных вычисляет ИМТ, и выводит сообщение о том, в каком диапазоне находится его ИМТ; 

P.S.  ИМТ Категории:
< 16	Выраженный дефицит
16–18.5	Недостаточный вес
18.5–24.9	Норма
25–29.9	Избыточный вес
30–34.9	Ожирение I степени
35–39.9	Ожирение II степени
≥ 40	Ожирение III степени */

const userHeight = Number(prompt('Введите ваш рост')) / 100;
const userWeight = Number(prompt('Введите ваш вес'));

const BMI = (userWeight / (userHeight ** 2)).toFixed(1); 

if (BMI < 16) {
    alert(`Ваш ИМТ равен ${BMI} - У вас Выраженный Дефицит веса`);
} else if (BMI >= 16 && BMI < 18.5) {
    alert(`Ваш ИМТ равен ${BMI} - У вас Недостаточный вес`);
} else if (BMI >= 18.5 && BMI < 25) {
    alert(`Ваш ИМТ равен ${BMI} - У вас Нормальный вес`);
} else if (BMI >= 25 && BMI < 30) {
    alert(`Ваш ИМТ равен ${BMI} - У вас Избыточный вес`);
} else if (BMI >= 30 && BMI < 35) {
    alert(`Ваш ИМТ равен ${BMI} - У вас Ожирение I степени`);
} else if (BMI >= 35 && BMI < 40) {
    alert(`Ваш ИМТ равен ${BMI} - У вас Ожирение II степени`);
} else {
    alert(`Ваш ИМТ равен ${BMI} - У вас Ожирение III степени`);
}


//  Задание 3. Используй оператор switch, чтобы вывести название месяца на основе введенного пользователем числа (1-12);

const month = 5;
let monthName;

switch(month) {
    case 1:
        monthName = "Январь";
        break;
    case 2:
        monthName = "Февраль";
        break;
    case 3:
        monthName = "Март";
        break;
    case 4:
        monthName = "Апрель";
        break;
    case 5:         
        monthName = "Май";
        break;
    case 6:
        monthName = "Июнь";
        break;
    case 7:
        monthName = "Июль";
        break;
    case 8:
        monthName = "Август";
        break;
    case 9:
        monthName = "Сентябрь";
        break;
    case 10:
        monthName = "Октябрь";
        break;
    case 11:
        monthName = "Ноябрь";
        break;
    case 12:
        monthName = "Декабрь";
        break;
    default:
        monthName = "Нет такого месяца";
        break;
}

console.log(monthName); 


/* Задание 4. Программа, которая определяет ранг игрока в Dota 2 на основе его MMR (Matchmaking Rating).
 Ранги:
 1. Herald (0 - 999 MMR)
 2. Guardian (1000 - 1999 MMR)
 3. Crusader (2000 - 2999 MMR)
 4. Archon (3000 - 3999 MMR)
 5. Legend (4000 - 4999 MMR)
 6. Ancient (5000 - 5999 MMR)
 7. Divine / Immortal (6000+ MMR) */

const userMMR = Number(prompt('Введите ваш MMR в Dota 2'));
let userRank;
switch(true) {
    case (userMMR > 0 && userMMR <= 999):
        userRank = alert(`Ваш MMR = ${userMMR}! Поздравляем ваш ранг Herald - Самый Начальный ранг! Наверное вы новичок ) `);
        break;
    case (userMMR >= 1000 && userMMR <= 1999):
        userRank = alert(`Ваш MMR = ${userMMR}! Поздравляем ваш ранг Guardian - Вы уже немного ориентируетесь в игре, но ещё учитесь базовой механике) `);
        break;
     case (userMMR >= 2000 && userMMR <= 2999):
        userRank = alert(`Ваш MMR = ${userMMR}! Поздравляем ваш ранг Crusader — Это Средний уровень! Вы знаете роли, начинаете лучше чувствовать макроигру ) `);
        break;
     case (userMMR >= 3000 && userMMR <= 3999):
        userRank = alert(`Ваш MMR = ${userMMR}! Поздравляем ваш ранг Archon - Это Уверенные "середняки"! У вас уже есть понимание командной игры и стратегий )`);
        break;
     case (userMMR >= 4000 && userMMR <= 4999):
        userRank = alert(`Ваш MMR = ${userMMR}! Поздравляем ваш ранг Legend - Вы Продвинутый игрок! Вы хорошо чувствуюете тайминги, сборки, часто играете на одной-двух ролях )`);
        break;
     case (userMMR >= 5000 && userMMR <= 5999):
        userRank = alert(`Ваш MMR = ${userMMR}! Поздравляем ваш ранг Ancient - Вы Очень сильный игрок! Часто играете в пачках. Хорошо понимаете мету, драфт и контрпики )`);
        break;
     case (userMMR > 6000):
        userRank = alert(`Ваш MMR = ${userMMR}! Поздравляем ваш ранг  Divine / Immortal Это уже уровень полупро или профессиональных игроков.`);
        break;
    default:
        userRank = alert('Ваш ранк не известен');
}



