//1.Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.
function minus(x = 0) {
    return function (y = 0) {
        return x - y;
    }
}
// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)
 function multiplyMaker (multiplyMaker = 1) {
    let result = multiplierFirst;
    return function (multiplierSecond = 1) {
        result *= multiplierSecond;
        return result;
    }
 }  
// 3. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень.
// Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
// Также можно вызывать методы цепочкой: модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
const calcModule = (function () {
    let x;
    function setValue(val = 0) {
        x = typeof val === 'number' ? val : 'Передайте число';
        return this;
    }
    function addValue(val) {
        x += val;
        return this;
    }
    function multiplyValue(val) {
        x *= val;
        return this;
    }
    function subtractValue(val) {
        x -= val;
        return this;
    }
    function divideValue(val) {
        x /= val;
        return this;
    }
    function involuteValue(val) {
        x = Math.pow(x, val);
        return this;
    }
    function getValue() {
        x = +x.toFixed(2);
        return x;
    }

    return {
        setValue,
        addValue,
        multiplyValue,
        subtractValue,
        divideValue,
        involuteValue,
        getValue
    }
})();
console.log(calcModule.setValue(2).addValue(5).multiplyValue(2).subtractValue(4).divideValue(2).involuteValue(3).getValue());
// 4. Дан объект:
// const person = { name: 'Denis', age: 30, lastGet: '', lastUpdate: '' };
// Сделать так что-бы при получении или изменении свойства name в свойствах lastGet и lastUpdate сохранялась дата последнего получения или последнего обновления соответсвенно.
const person = { 
    name: 'Denis', 
    age: 30, 
    lastGet: '', 
    lastUpdate: '' 
};

// 5. Дан объект:
// const product = { brand: 'Apple', model: 'iPhone 7', price: '$300' };
// сделать геттер который будет возвращать brand и model в виде строки "Apple iPhone 7" ****а также сделать сеттер в который будет передаваться строка например "Samsung S8 Gold" и в объекте в поле brand будет записано "Samsung" а в поле model будет записано "S8 Gold"
const product = { 
    brand: 'Apple',
    model: 'iPhone 7', 
    price: '$300' 
};

// 6. Организовать функцию getInfo, которая принимает объект вида**{ name: ..., info: { employees: [...], partners: [ … ] } }**и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
// const organisation = { name: 'Google', info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] } }; // getInfo(organisation); → Name: Google Partners: Microsoft Facebook
const organisation = { 
    name: 'Google', 
    info: { 
        employees: ['Vlad', 'Olga'], 
        partners: ['Microsoft', 'Facebook', 'Xing'] 
    } 
};
const organisationGoogle = {
    name: 'Google',
    info: {
        employees: ['Vlad', 'Olga'],
        partners: ['Microsoft', 'Facebook', 'Xing']
    }
};
const organisationCompany = {
    info: {
        employees: ['Olga', 'Vlad'],
        partners: ['Xing']
    }
};
const getInfo = ({ name = 'UNKNOWN', info: { partners : [a,b]} }) => ({name, partners : [a,b]})
    