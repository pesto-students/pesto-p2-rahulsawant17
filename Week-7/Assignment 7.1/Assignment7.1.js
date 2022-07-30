class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let head = null;

function singleLinkedList(arr) {


        head = new Node(arr[0])
        let cur = head;
        for (let i = 1; i < arr.length; i++) {
            cur.next = new Node(arr[i])
            cur = cur.next
        }

}

function traverseSLL() {
    let arr=new Array;
    let cur = head
    let i=0
    while (cur != null) {
        arr[i]=(cur.value)
        i+=1
        cur = cur.next
    }
    console.log(arr)
}

function reverseLL() {
    let prev = null; cur = head;    let after = cur.next;
    while (after != null) {
        cur.next = prev
        prev = cur
        cur = after
        after = after.next
    }
    cur.next = prev
    head = cur
}
console.log('Before reversing')
singleLinkedList([7, 3, 11, 21, 23, 4, 5])
traverseSLL()
console.log('After reversing')
reverseLL()
traverseSLL()