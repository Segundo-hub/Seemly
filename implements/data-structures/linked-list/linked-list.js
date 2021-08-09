class Node {
   constructor(name, lastName, age, next) {
      this.name = name
      this.lastName = lastName
      this.age = age
      this.next = next
   }
}

class LinkedList {
   constructor() {
      this.node = new Node()
   }
}

console.log('Hola')