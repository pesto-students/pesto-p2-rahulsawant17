class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


///////////////////////////////////////////////////

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

    createLoopatk(k) {
        let cur = this.head, dummy = null;
        k--
        while (cur.next !== null) {
            cur = cur.next
            if (--k == 0) {
                dummy = cur

            }
        }
        cur.next = dummy
    }

    detectLoop() {
        this.slow = this.fast = this.head

        while (this.fast && this.fast.next) {
            this.slow = this.slow.next
            this.fast = this.fast.next.next
            if (this.slow == this.fast) {
                return `${true} loop exists`
            }
        }
        return `${false} loop does not exists`
    }
}


l1 = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8])
l1.createLoopatk(5)
console.log(l1.detectLoop())