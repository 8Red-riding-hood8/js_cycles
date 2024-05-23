let min = 10, max = 20;
let values = new Array(10);
for(let i = 0; min <= max; i++){
    values[i] = min;
    min++;
}
document.write("Вивід на сторінку в один рядок через кому числа від 10 до 20 <br>");
document.write(values.join(","));

document.write("<br>Вивід квадратів чисел від 10 до 20<br>");
values.forEach(function (value, i, arr){
    values[i] = value*value;
    // console.log(`${i+1}: ${values[i]}`);
}
);
document.write(values.join(" "));

document.write("<br>Таблиця множення на 7<br>");
const table_value = 7;
for(let i = 1; i<= 10; i++){
     document.write(`${i}. ${table_value} * ${i} = ${table_value*i}<br>`);
}

document.write("Cума всіх цілих чисел від 1 до 15: ");
let sum = 0;
for(let i = 1; i<= 15; i++){
    sum += i;
}
document.write(sum + "<br>");

document.write("Добуток усіх цілих чисел від 15 до 35: ");
let product = 1;
for(let i = 15; i<= 35; i++){
    product *= i;
}
document.write(product + "<br>");

// В математиці існує формула для обрахунку
document.write("Середнє арифметичне всіх цілих чисел від 1 до 500: ");
let n = 500;
let average_value = (500*(500+1)/2)/500;
document.write(average_value + "<br>");
// Варіант через цикл
// let average_value = 0;
// let max_average_value = 500;
// for(let i = max_average_value; i >= 0; i--){
//     average_value +=i;
// }
// average_value= average_value/max_average_value;
//  document.write(average_value);

document.write("Сума лише парних чисел в діапазоні від 30 до 80: ");
min= 30, max = 80, sum = 0;
for(let i = min; i <= max; i++){
    if(i%2==0){
        sum += i;
    }
}
document.write(sum + "<br>");

values = values.splice();
document.write("Всі числа в діапазоні від 100 до 200 кратні 3 <br>");
for (let i = 100, j = 0; i <= 200; i++) {
    if (i % 3 === 0) {
        // console.log(i);
        values[j]=i;
        j++;
    }
}
document.write(values.join(" "));


let number = +prompt("Введіть число(всі дільники числа):", 1), count_match = 0;
sum = 0;
values = values.splice();
document.write("<br>Вивід на сторінку всі дільники числа "+ number + ":<br>");
for(let i = 1, j = 0; i <= number; i++){
    if(number%i==0){
        // console.log(i);
        values[j] = i;
        j++;
        if(i%2==0){
            count_match++;
            sum += i;
        }
    }
}
document.write(values.join(" ") + "<br>");

document.write("З них парних: " + count_match + "<br>");
document.write("Сума парних дільників: " + sum + "<br>");

document.write("Таблиця множення<br>");
value = 10;
for(let i = 1; i<= value; i++){
    document.write("Таблиця множення на "+ i + "<br>");
    for(let j = 1; j<= value; j++){
        document.write(`${j}. ${i} * ${j} = ${i*j} <br>`);
    }
}

document.write("Числа від 20 до 30 через пропуск, використовуючи крок 0,5 <br>");
min = 20, max = 30;
values = values.splice();
for(let i = 0; min<=max ; i++){
    values[i] = min;
    // console.log(values[i]);
    min += 0.5;
}
document.write(values.join(" ")+ "<br>");

document.write("Розрахунок вартості 10, 20, 30... 100 доларів<br>");
const dollar_value = 27;
values = values.splice();
max = 100;
min = 10;
for(let i = 0; min <= max; i++){
    values[i]= `${min * dollar_value}$`;
    // console.log(min);
    min += 10;
}
document.write(values.join(" ") + "<br>");

number = +prompt("Введіть число(вивід чисел від 1 до 100, квадрат яких не перевищує числа):", 1);
document.write(`Всі цілі числа від 1 до 100, квадрат яких не перевищує числа ${number}<br>`);
values = values.splice();
for(let i = 1; number >= i*i && i <= 100; i++){
    values[i-1] = i;
}
document.write(values.join(" ") + "<br>");

let prime_num = +prompt("Введіть число(перевірка чи просте число):", 1);
document.write("Просте число<br>");
for(let i = 2; i < prime_num ; i++){
    if(prime_num%i !== 0){
        document.write(`${prime_num} є простим числом<br>`);
    }else{
        document.write(`${prime_num} не просте число<br>`);
        break;
    }
}

number = +prompt("Введіть число(чи можливо отримати це число шляхом зведення числа 3 у деякий ступінь):", 1);
const num_str = number;
document.write(`Чи можна одержати число ${number} шляхом зведення числа 3 у деякий ступінь<br>`); // користувач сам задає значення
const num_base = 3;
for(let i = 0; number > 0; i++){
    if(number == 1){
        document.write(`${num_str} можна отримати це число шляхом зведення числа 3`);
        break;
    }
    if(number%num_base !== 0){
        document.write(`${num_str} не можна отримати це число шляхом зведення числа 3`);
        break;
    }
    number /= num_base;
    // console.log(number);
}