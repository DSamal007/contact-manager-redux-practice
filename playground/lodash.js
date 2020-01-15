// const _ = require('lodash')
const pick = require('lodash/pick')
const person = {
    name: 'mani', 
    city: 'bangalore', 
    age: 24, 
    profession: 'developer'
}

const obj = _.pick(person, ['name','city'])
console.log(obj)

console.log(pick(person, ['name']))
