"use strict"; //тут активируем современный режим поддержки функций и комманд

// let name = prompt('Как тебя зовут', 'введи имя');
// alert(`Тебя зовут ${name}`);    

// let bool = confirm('Ты никита?');
// alert(`${bool}`);

// alert(4 ** (1/3))

// let c = 3
// alert(++c) 4


// let a = prompt('Кто убил Пушкина?', '')

// if (a == "Дантес" ^ a == "дантес"){
//     alert("Правильно!");}
// else{
//     alert("Неверно")
// }

// let age = prompt('Возраст?', 18);

// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';

// alert( message );


// let i = 0
// while (i < 3)
// {
//     alert(1 + i)
//     ++i
// }


// let sum = 0
// while (true)
// {
//     let a = prompt('Введите число', 'Тут писать')
//     if (!a) break;

//     sum += Number(a)
// }
// alert(`Сумма введенных чисел: ${sum}\n`)
let i = 0
const element = document.querySelector('#in1')

function myFunc()
{
    ++i
}

function infoI()
{
    element.value = i
}
