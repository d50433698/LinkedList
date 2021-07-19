class Node {
  constructor(dataPortion, nextNode = null) {
    this.dataPortion = dataPortion;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    var firstNode = null;
    this.size = 0;
  }

  addFirst(item) {
    var newNode = new Node(item);
    newNode.nextNode = this.firstNode;
    this.firstNode = newNode;
    this.size++;
  }

  addLast(item) {
    var newNode = new Node(item);
    var tailNode;

    if (this.firstNode == null) {
      this.firstNode = newNode;
    } else {
      tailNode = this.firstNode;

      while (tailNode.nextNode) {
        tailNode = tailNode.nextNode;
      }
      tailNode.nextNode = newNode;
    }
    this.size++;
  }

  indexOf(item) {
    var count = 0;
    var tailNode = this.firstNode;
    while (tailNode.dataPortion !== item) {
      tailNode = tailNode.nextNode;
      if (tailNode == null) {
        return -1;
      }
      count++;
    }
    return count;
  }

  contains(item) {
    var tailNode = this.firstNode;
    while (tailNode.dataPortion !== item) {
      tailNode = tailNode.nextNode;
      if (tailNode == null) {
        return false;
      }
    }
    return true;
  }

  removeFirst() {
    if (this.firstNode != null) {
      this.firstNode = this.firstNode.nextNode;
      this.size--;
    }
  }

  removeLast() {
    var tailNode;

    if (this.firstNode != null) {
      tailNode = this.firstNode;

      while (tailNode.nextNode != null) {
        tailNode = tailNode.nextNode;
        if (tailNode.nextNode.nextNode == null) {
          tailNode.nextNode = null;
        }
      }
    }
    this.size--;
  }

  sizeOfEntries() {
    return this.size;
  }

  toList() {
    var item = [];
    while (this.firstNode != null) {
      item.push(this.firstNode.dataPortion);
      this.firstNode = this.firstNode.nextNode;
    }
    return item;
  }

  reverse() {
    var previousNode = null;
    while (this.firstNode != null) {
      var nextNode = this.firstNode.nextNode;
      this.firstNode.nextNode = previousNode;
      previousNode = this.firstNode;
      this.firstNode = nextNode;
    }
    this.firstNode = previousNode;
  }
}

//const ll = new LinkedList();
//ll.addFirst(100);
//ll.addFirst(200);
//ll.addFirst(300);
//ll.addFirst(400);
//ll.addLast(500);
//ll.removeFirst();
//ll.reverse();
//ll.removeLast();
//contains = ll.contains(600);
//contains = ll.indexOf(500);
//console.log(contains);
//console.log(ll);
