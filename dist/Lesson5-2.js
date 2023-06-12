"use strict";
class Users {
    constructor(userList) {
        this.userList = [];
        this.add = (newUser) => {
            this.userList.push(newUser);
        };
        this.remove = (id) => {
            var _a;
            const res = (_a = this.userList.find(item => item.id === id)) !== null && _a !== void 0 ? _a : null;
            console.log('res: ', res);
            if (res) {
                console.log(`Пользователь с id = ${id} найден`);
                const index = this.userList.findIndex(item => item.id === id);
                console.log('Индекс в массиве: ', index);
                this.userList.splice(index, 1);
                return true;
            }
            else {
                console.log(`Пользователь с id = ${id} не найден`);
                return false;
            }
        };
        this.get = (id) => {
            var _a;
            const res = (_a = this.userList.find(item => item.id === id)) !== null && _a !== void 0 ? _a : null;
            return res;
        };
        this.sorted = (descending) => {
            if (descending) {
                const compareDescending = (a, b) => (a.surname < b.surname) ? 1 : -1;
                this.userList.sort(compareDescending);
            }
            else {
                const compareAscending = (a, b) => (a.surname > b.surname) ? 1 : -1;
                this.userList.sort(compareAscending);
            }
            return this.userList;
        };
        this.userList = userList;
    }
}
class Students extends Users {
    constructor(userList) {
        super(userList);
        this.userList = userList;
    }
}
class Employees extends Users {
}
const studentsArr = new Students([]);
const student1 = {
    id: 234,
    firstname: 'Илья',
    surname: 'Ильин',
    age: 22,
    year: 1,
    specialty: 'CSS',
};
const student2 = {
    id: 234,
    firstname: 'Семен',
    surname: 'Семенов',
    age: 22,
    year: 1,
    specialty: 'CSS',
};
const student3 = {
    id: 567,
    firstname: 'Петр',
    surname: 'Петров',
    age: 22,
    year: 1,
    specialty: 'TS',
};
const student4 = {
    id: 190,
    firstname: 'Григорий',
    surname: 'Гришин',
    age: 22,
    year: 1,
    specialty: 'HTML',
};
const student5 = {
    id: 123,
    firstname: 'Антон',
    surname: 'Антонов',
    age: 22,
    year: 1,
    specialty: 'JS',
};
studentsArr.add(student1);
studentsArr.add(student2);
studentsArr.add(student3);
studentsArr.add(student4);
studentsArr.add(student5);
console.log('Студенты А-Я: ', studentsArr.sorted());
console.log('Студенты Я-А', studentsArr.sorted(true));
const employeesArr = new Employees([]);
