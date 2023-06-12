"use strict";
{
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
        constructor(userList) {
            super(userList);
            this.userList = userList;
        }
    }
    const studentsArr = new Students([]);
    const student1 = {
        id: 123,
        firstname: 'Антон',
        surname: 'Антонов',
        age: 22,
        year: 1,
        specialty: 'JS',
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
        id: 234,
        firstname: 'Илья',
        surname: 'Ильин',
        age: 22,
        year: 1,
        specialty: 'CSS',
    };
    studentsArr.add(student1);
    studentsArr.add(student2);
    studentsArr.add(student3);
    studentsArr.add(student4);
    studentsArr.add(student5);
    console.log('Студенты: ', studentsArr.userList);
    console.log('студент с id = 190 : ', studentsArr.get(190));
    studentsArr.remove(567);
    console.log('Студенты: ', studentsArr.userList);
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
}
