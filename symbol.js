// library land
// const uid= Symbol('uid');
const uid = Symbol();

console.log(uid);

const user = {
    // id: 'p1',
    [uid]: 'p1',
    name: 'Max',
    age: 30,
    [Symbol.toStringTag]: 'User',
}

user[uid] = 'p3';

//app land => Using the library
user.id = 'p2'; // this should not be possible

console.log(user);
console.log(Symbol('uid') === Symbol('uid'));
console.log(user.toString());
