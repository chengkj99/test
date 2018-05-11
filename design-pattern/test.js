import { clone } from 'lodash'
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
}


// const me = Object.create(person)
const me = clone(person)

me.name = 'kangjian'
console.log(me)
