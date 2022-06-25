class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(arr) {
    this.head = null;
    this.arr = arr
    this.singleLinkedList(arr)
  }

  singleLinkedList(arr) {


    this.head = new Node(arr[0])
    let cur = this.head;
    for (let i = 1; i < arr.length; i++) {
      cur.next = new Node(arr[i])
      cur = cur.next
    }

  }

  traverseSLL() {
    let arr = new Array;
    let cur = this.head
    let i = 0
    while (cur != null) {
      arr[i] = (cur.value)
      i += 1
      cur = cur.next
    }
    console.log(arr)
  }

  rotateKtimes(k) {
    console.log(`After Rotating ${k} times`)
    let cur = this.head;
    let next = cur.next;
    while (--k) {
      if (cur == null || next == null) {
        return
      }
      cur = cur.next
      next = next.next
    }
    cur.next = null
    let temp = next
    while (temp.next != null) {
      temp = temp.next
    }
    temp.next = this.head
    this.head = next

  }
}
// Example 2:Input:N = 8
// value[] = {1, 2, 3, 4, 5, 6, 7, 8} k = 4
// Output: 5 6 7 8 1 2 3 4
console.log('Before Rotating')
l1 = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8])
l1.traverseSLL()
l1.rotateKtimes(4)
l1.traverseSLL()

// Input:N = 5 value[] = {2, 4, 7, 8, 9}
// k = 3
// Output: 8 9 2 4 7
// Explanation:
// Rotate 1: 4 -> 7 -> 8 -> 9 -> 2
// Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
// Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

console.log('Before Rotating')
l2 = new LinkedList([2, 4, 7, 8, 9])
l2.traverseSLL()
l2.rotateKtimes(3)
l2.traverseSLL()