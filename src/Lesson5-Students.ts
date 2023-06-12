import { User, Users } from './Lesson5-Users.js';

interface Student extends User {
  year: number; 
  specialty: string;
}

class Students extends Users<Student> {
  userList: Student[];
  constructor(userList: Student[]) {
    super(userList);
    this.userList = userList;
  }
}


const studentsArr = new Students([]);

const student1 = {
  id: 234,
  firstname: 'Илья',
  surname: 'Ильин',
  age: 22,
  year: 1,
  specialty: 'CSS',
}
const student2 = {
  id: 234,
  firstname: 'Семен',
  surname: 'Семенов',
  age: 22,
  year: 1,
  specialty: 'CSS',
}
const student3 = {
  id: 567,
  firstname: 'Петр',
  surname: 'Петров',
  age: 22,
  year: 1,
  specialty: 'TS',
}
const student4 = {
  id: 190,
  firstname: 'Григорий',
  surname: 'Гришин',
  age: 22,
  year: 1,
  specialty: 'HTML',
}
const student5 = {
  id: 123,
  firstname: 'Антон',
  surname: 'Антонов',
  age: 22,
  year: 1,
  specialty: 'JS',
}

studentsArr.add(student1);
studentsArr.add(student2);
studentsArr.add(student3);
studentsArr.add(student4);
studentsArr.add(student5);

console.log('Студенты: ', studentsArr.userList);
console.log('студент с id = 190 : ', studentsArr.get(190));

studentsArr.remove(567);

console.log('Студенты: ', studentsArr.userList);

console.log('Студенты А-Я: ', studentsArr.sorted());
console.log('Студенты Я-А', studentsArr.sorted(true));
