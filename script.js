import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const john = {
  name: 'John',
  age: 30,
  social: {
    twitter: '@john',
    facebook: 'john.doe',
    instagram: {
      name: 'john',
      age: 30,
      social: {
        twitter: '@john',
        facebook: 'john.doe',
      },
    },
  },
  hobbies: ['swimming', 'playing video games'],
};

const david = cloneDeep(john);
console.log(`🚀  john =>`, john);
console.log(`🚀  david =>`, david);
