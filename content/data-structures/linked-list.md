---
title: Lista enlazada
description: Una lista enlazada es una estructura de datos que conecta los datos llamados Nodos a travez de referencias o punteros
---

## Que es la Lista enlazada

## Implementacion en JavaScript

```js
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
         while (current.next && size < index) {
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
```

## Implementacion en C

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node{
   char name[20];
   int age;
} Node;

typedef struct List{
   struct Node* head;
} List;

Node* createNode(char* name, int* age){
   Node* node = (*Node)malloc(sizeof(Node));
   strcpy(node->name, name, 20);
   node->age = age;
   if(node->age == NULL){
      return;
   }
   return Node;
}

```
