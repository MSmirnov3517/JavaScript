
alert('первая задача');
var a = 1, b = 1, c, d;
c = ++a; alert(c + '  т.к. ++ перед переменной, реализация строчки такая -> a = a + 1 -> c = a');
d = b++; alert(d + '  т.к. ++ после переменной, то b = a -> b = b + 1');
c = (2 + ++a); alert(c + '  т.к. a = a + 1 -> c = 2 + a');
d = (2 + b++); alert(d + '  т.к. d = 2 + b -> b = b + 1');
alert(a + '  т.к. a увеличивали на 1 два раза, в 1 и 3 строчках');
alert(b + '  т.к. b увеличивали на 1 два раза, в 2 и 4 строчках');



alert('вторая задача');
var a = 2;
var x = 1 + (a *= 2);
alert(x + 'здесь порядрок приоритета такой -> a = a * 2 -> x = 1 + a  ');

alert('третья задача');
var a = +prompt('Введите первое число ');
var b = +prompt('Введите второе число ');
if (a >= 0 && b >= 0)
    alert(a - b);
else if (a < 0 && b < 0)
    alert(a * b);
else
    alert(a + b);

alert('Четвертая задача');
var a = +prompt('введите число от 1 до 15');
switch (a) {
    case 1:
        alert('1')
    case 2:
        alert('2')
    case 3:
        alert('3')
    case 4:
        alert('4')
    case 5:
        alert('5')
    case 6:
        alert('6')
    case 7:
        alert('7')
    case 8:
        alert('8')
    case 9:
        alert('9')
    case 10:
        alert('10')
    case 11:
        alert('11')
    case 12:
        alert('12')
    case 13:
        alert('13')
    case 14:
        alert('14')
    case 15:
        alert('15')
}

//задача 5

var a = 2;
var b = 3;

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

function multiplication(a, b) {
    return a + b;
}
