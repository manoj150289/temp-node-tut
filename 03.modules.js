// CommanJS, evry file is module (by default)
// Modules – Encapsulated Code (only share minimum)
const secret = 'SUPER SECRET'
const john = 'john'
const peter = 'peter'

const sayHi = (name) =>{
    console.log(`Hello there ${name}`)
}

sayHi('Manoj')
sayHi(john)
sayHi(peter)
