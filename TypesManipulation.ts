

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

/*
interface Role {
    name: string;

}

interface Permission{
    endDate: Date;
}

interface User {
    name: string;
    roles: Role[];
    permission: Permission;
}

const user: User = {
    name: 'Dima',
    roles: [],
    permission: {
        endDate: new Date()
    }
}

const nameUser = user['name'];
console.log(nameUser);

const roleName = 'roles';

type rolesType = User['roles'];
type rolesType2 = User[typeof roleName];


type roleType = User['roles'][number]


const roles = ['admin', 'user', 'VIPuser'] as const;
type roleTypes = typeof roles[number];

type dateType = User['permission']['endDate']
*/

// Conditional Type

//const a: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResponse<T extends 'success' | 'failed'> {
    code: number;
    data: T extends 'success' ? string : Error;
}

const suc: HTTPResponse<'success'> = {
    code: 200,
    data: 'done'
}

const err: HTTPResponse<'failed'> = {
    code: 404,
    data: new Error
}