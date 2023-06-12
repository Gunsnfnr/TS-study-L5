"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
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
exports.Users = Users;
