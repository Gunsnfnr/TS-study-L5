import { User, Users } from './Lesson5-Users.js';

interface Employee extends User {
  post: string;
}

class Employees extends Users<Employee>{
  userList: Employee[];
  constructor(userList: Employee[]) {
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
}
const employee2 = {
  id: 444,
  firstname: 'Василий',
  surname: 'Васильев',
  age: 29,
  post: 'Программист',
}

employeesArr.add(employee1);
employeesArr.add(employee2);
console.log('Сотрудники: ', employeesArr.userList);
