"use strict";
// Key of
/*

interface IUser {
    name: string;
    age: number;
}

type KeyOfUser = keyof IUser;

const key: KeyOfUser = 'age';

function getValue<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}

const user: IUser = {
    name: 'Dima',
    age: 20
};

const userName = getValue(user, 'name');
console.log(userName);

*/
// Type of
let strOrNum = 5;
if (Math.random() > 0.5) {
    strOrNum = 5;
}
else {
    strOrNum = 'str';
}
let str2OrNum;
const user = {
    name: 'Dima'
};
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
