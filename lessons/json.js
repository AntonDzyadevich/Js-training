let user = {
  name: 'John',
  age: 30,
  

  toString() {
  return `{name: ${this.name}, age: ${this.age}}`;
}
};

let student = {
  name: 'John',
  age: '30',
  isAdmin: false,
  courses: ['html', 'CSS', 'js'],
  wife: null
}

let json = JSON.stringify(student);

let user2 = {
  sayHi() {
  console.log('HI!');
  },
  [Symbol("id")]:123,
  something: undefined
};











  
  
