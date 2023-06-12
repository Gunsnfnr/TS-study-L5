export interface User {
  id: number,
  firstname: string,
  surname: string,
  age: number,
}

export abstract class Users<U extends User> {
  userList: U[] = [];

  add = (newUser: U): void => {
    this.userList.push(newUser);
  }

  remove = (id: number): boolean => {
    const res = this.userList.find(item => item.id === id) ?? null;
    console.log('res: ', res);
    if (res) {
      console.log(`Пользователь с id = ${id} найден`);
      const index:number = this.userList.findIndex(item => item.id === id);
      console.log('Индекс в массиве: ', index);
      this.userList.splice(index, 1);
      return true;
    } else {
      console.log(`Пользователь с id = ${id} не найден`);
      return false;
    }
  }

  get = (id: number):U | null => {
    const res = this.userList.find(item => item.id === id) ?? null;
    return res;
  }

  sorted = (descending?: boolean):U[] => {
    if (descending) {
      const compareDescending = (a: U, b:U) => (a.surname < b.surname) ? 1 : -1;
        this.userList.sort(compareDescending);
      } else {
        const compareAscending = (a: U, b:U) => (a.surname > b.surname) ? 1 : -1;
          this.userList.sort(compareAscending);
      }
      return this.userList;
    }

  constructor(userList: U[]) {
    this.userList = userList;
  }
}

