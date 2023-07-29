

// Key of

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