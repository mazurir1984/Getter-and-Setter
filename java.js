'use strict';

/*Реализовать класс RangeValidator. Обьекты, созданные им должны обладать следующими свойcтвами:
from(число) 5
to(число) 50

Реализовать геттеры и сеттеры для обоих свойств.
Реализовать getter range, который будет возвращать массив, состоящий из границ диапазона from и to.
Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает это же число, если оно входит в диапазон. И кинет ошибку, если не входит.


Bonus tasks:
Создать проверки которые убедятся, что число во from меньше числа to и наоборот.
Создать проверки, которые помогут избежать попадание неправильных типов данных в from и to.*/


//У меня толком ничего не получилось. Я знаю. Для меня тема сложная. Отправляю то, что есть((

class RangeValidator {
    #from;
    #to;
    #range;
    constructor(from = 5, to = 50, range) {
        this.#from = from;
        this.#to = to;
        this.#range = range;
    }

    get from() {
        return this.#from;
    }

    set from(number1) {
        if (typeof number1 !== 'number' || isNaN(number1)) {
            throw new TypeError('Must be number');
        }
        
        if (number1 < 5) {
            throw new RangeError('This number is less than the permissible');
        }

        this.#from = number1;
    }

    get to() {
        return this.#to;
    }

    set to(number2) {
        if (typeof number2 !== 'number' || isNaN(number2)) {
            throw new TypeError('Must be number');
        }
        
        if (number2 > 50) {
            throw new RangeError('This number is greater than the permissible');
        }

        this.#to = number2;
    }

    get range() {
        /*if (number1 >= this.#from && number2 <= this.#to) {
        return renge.renge([]);
        }
        throw new RangeError('This number is not in the range');*/
        const arr = [];
        for(let i = this.#from; i <= this.#to; i++) {
            return arr.indexOf();
        }
    }

    validate(num) {
        if(num >= this.#from && num <= this.#to) {
            return num;
        } 
        throw new RangeError('This number is not in the range from to');
    }
}

const rengeValid1 = new RangeValidator(40);