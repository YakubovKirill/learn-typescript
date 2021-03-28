const name: string = 'Kirill'
console.log(name)

const isLiggedIn: boolean = false
console.log(isLiggedIn)

let age: number | string = 12
console.log(age)
age = '23'
console.log(age)

const weigth: number = 85.2
console.log(weigth)

const numArr: number[] = [1, 2, 3, 4, 5, 6]
const numArr2: Array<number> = [1, 2, 3, 4, 5, 6]

const tuple: [string, number] = ['Kirill', 23]

let anyVar: any = 21
console.log(anyVar)
anyVar = 'wer'
console.log(anyVar)

function print(name: string):boolean {
    return (name === '') ? false: true
}

console.log(print('kirill'))
console.log(print(''))

function printVoid(name: string): void {
    console.log(name)
}

printVoid('Ivan')

// Never
const throwErr = (message: string): never => {
    throw new Error(message)
}

// Self types
type Login = [username: string, id: number, isAdmin: boolean]
const log: Login = ['Kirill', 23, true]



export {name}