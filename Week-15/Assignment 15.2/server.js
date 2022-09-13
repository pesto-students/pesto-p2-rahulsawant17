const fs = require('fs')
let parkArr = [null]
class MinHeap {

    constructor() {
        /* Initialing the array heap and adding a dummy element at index 0 */
        this.heap = [null]
    }

    getMin() {
        /* Accessing the min element at index 1 in the heap array */
        return this.heap[1]
    }

    insert(node) {

        /* Inserting the new node at the end of the heap array */
        this.heap.push(node)

        /* Finding the correct position for the new node */

        if (this.heap.length > 1) {
            let current = this.heap.length - 1

            /* Traversing up the parent node until the current node (current) is greater than the parent (current/2)*/
            while (current > 1 && this.heap[Math.floor(current / 2)] > this.heap[current]) {

                /* Swapping the two nodes by using the ES6 destructuring syntax*/
                [this.heap[Math.floor(current / 2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current / 2)]]
                current = Math.floor(current / 2)
            }
        }
    }

    remove() {
        /* Smallest element is at the index 1 in the heap array */
        let smallest = this.heap[1]

        /* When there are more than two elements in the array, we put the right most element at the first position
            and start comparing nodes with the child nodes
        */
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1]
            this.heap.splice(this.heap.length - 1)

            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return smallest
            }

            let current = 1
            let leftChildIndex = current * 2
            let rightChildIndex = current * 2 + 1

            while (this.heap[leftChildIndex] &&
                this.heap[rightChildIndex] &&
                (this.heap[current] > this.heap[leftChildIndex] ||
                    this.heap[current] > this.heap[rightChildIndex])) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
                    current = leftChildIndex
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
                    current = rightChildIndex
                }

                leftChildIndex = current * 2
                rightChildIndex = current * 2 + 1
            }
        }

        /* If there are only two elements in the array, we directly splice out the first element */

        else if (this.heap.length === 2) {
            this.heap.splice(1, 1)
        } else {
            return null
        }

        return smallest
    }
}

let parheap = new MinHeap()
const data = fs.readFileSync('input.txt', 'utf-8')
let queries = data.split('\r\n')
let num = 0

while (num < queries.length) {
    let query = queries[num]
    console.log(query)
    if (query.startsWith('create_parking_lot')) {
        let numq = query.split(' ')
        let n = numq[numq.length - 1]
        console.log(`Created a parking lot with ${n} slots`)
        let i = 1
        while (i <= n) {

            parheap.insert(i)
            i++
        }
    }
    else if (query.startsWith('park')) {
        let parkedNum = parheap.remove()
        // console.log(query)
        if (parkedNum == null) {
            console.log('Sorry, parking lot is full')
        }
        else {
            console.log(`Allocated slot number: ${parkedNum}`)
            let vehinfo = query.replace('park ', '').split(' ')
            parkArr[parkedNum] = { slotNo: parkedNum, regNo: vehinfo[0], color: vehinfo[1] }
        }

    }
    else if (query.startsWith('leave')) {

        let num = query.split(' ')
        let n = num[num.length - 1]
        parheap.insert(Number(n))
        console.log(`Slot number ${n} is free`)

    }
    else if (query.startsWith('status')) {
        for (let i of parkArr) {
            if (i != null) console.log(i)
        }
    }
    else if (query.startsWith('registration_numbers_for_cars_with_colour')) {
        let col = query.replace('registration_numbers_for_cars_with_colour ', '')
        let flg = true
        for (let i of parkArr) {
            if (i != null && i.color == col) {
                console.log(i.regNo)
                flg = false
            }
        }
        if (flg) console.log('Not found')

    }
    else if (query.startsWith('slot_numbers_for_cars_with_colour')) {
        let col = query.replace('slot_numbers_for_cars_with_colour ', '')
        let flg = true
        for (let i of parkArr) {
            if (i != null && i.color == col) {
                console.log(i.slotNo)
                flg = false
            }
        }
        if (flg) console.log('Not found')


    }
    else if (query.startsWith('slot_number_for_registration_number')) {
        let regno = query.replace('slot_number_for_registration_number ', '')
        let flg = true
        for (let i of parkArr) {
            if (i != null && i.regNo == regno) {
                console.log(i.slotNo)
                flg = false
            }
        }
        if (flg) console.log('Not found')

    }
    num++

}