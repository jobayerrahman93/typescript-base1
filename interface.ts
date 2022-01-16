interface Player{
    name:string,
    age:number,
    salary:number
}

const ronaldo:Player={

    name:"ronaldo",
    age:35,
    salary:55000
}

console.log(ronaldo);




interface Employee{
    name:string,
    age:number,
    salary:number,
    hometown:string
}

interface Developer extends Employee{
    language:string,
    editor:string,
    wordSpeed:number

}

const abdul:Developer={
    name:'arafat',
    age:20,
    salary:80000,
    hometown:'bogura',
    language:'C++',
    editor:'vsCode',
    wordSpeed:60

}

console.log(abdul);