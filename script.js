//todo 009 A Brief Introduction to the Command Line

import { cloneDeep } from 'lodash';
const o1 = {
  name: 'John',
  age: 30,
  city: 'New York',
  sayHello: function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
  },
};
