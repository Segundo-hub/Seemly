class Node {
   constructor(people, next) {
      this.name = people.name
      this.age = people.age
      this.next = next
   }
}

class LinkedList {
   constructor() {
      this.head = null
      this.size = 0
   }
   insertBegin(data) {
      const newNode = new Node(data, null)
      if (!this.head) {
         this.head = newNode
      } else {
         let current = this.head
         while (current.next) {
            current = current.next
         }
         current.next = newNode
      }
      this.size++
   }
   insertIndex(index, data) {
      const newNode = new Node(data, null)
      if (!this.head) {
         this.head = newNode
      } else {
         let current = this.head
         while (current.next && this.size - 1 < index) {
            current = current.next
         }
         current.next = newNode
      }
      this.size++
   }
   insertEnd(data) {
      const newNode = new Node(data, null)
      if (!this.head) {
         this.head = newNode
      } else {
         let current = this.head
         while (current.next) {
            current = current.next
         }
         current.next = newNode
      }
      this.size++
   }
}

const programers = new LinkedList()
programers.insertBegin({ name: "Linus Torvalds", age: 51 })
programers.insertBegin({ name: "Richard Stallman", age: 68 })
programers.insertBegin({ name: "Guido van Rossum", age: 65 })

programers.insertIndex(2, { name: "Larry Wall", age: 66 })

console.log(programers)
