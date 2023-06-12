"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Lesson5_2_Users_js_1 = require("./Lesson5-2-Users.js");
class Employees extends Lesson5_2_Users_js_1.Users {
    constructor(userList) {
        super(userList);
        this.userList = userList;
    }
}
const employeesArr = new Employees([]);
const employee1 = {
    id: 555,
    firstname: 'Иван',
    surname: 'Иванов',
    age: 28,
    post: 'Инженер',
};
const employee2 = {
    id: 444,
    firstname: 'Василий',
    surname: 'Васильев',
    age: 29,
    post: 'Программист',
};
employeesArr.add(employee1);
employeesArr.add(employee2);
console.log('Сотрудники: ', employeesArr.userList);
