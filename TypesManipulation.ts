

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

/*
let strOrNum: string | number = 5;

if(Math.random() > 0.5) {
    strOrNum = 5;
} else {
    strOrNum = 'str';
}


let str2OrNum: typeof strOrNum;

const user = {
    name: 'Dima'
}

type keyOfUser = keyof typeof user;

enum Direction {
    Up,
    Down,
    Left,
    Right
}

type D = keyof typeof Direction;
*/

// Indexed Access Types

interface Role {
    name: string;

}

interface User {
    name: string;
    roles: Role[];
}

const user: User = {
    name: 'Dima',
    roles: []
}

const nameUser = user['name'];
console.log(nameUser);

const roleName = 'roles';

type rolesType = User['roles'];
type rolesType2 = User[typeof roleName];


type roleType = User['roles'][number]


const roles = ['admin', 'user', 'VIPuser'] as const;
type roleTypes = typeof roles[number];







