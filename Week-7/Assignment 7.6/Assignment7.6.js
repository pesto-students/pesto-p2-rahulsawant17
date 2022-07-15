class Queue{
    constructor(){
      this.stack1=[];
      this.stack2=[];
    }
    enqueue(data){

      while(this.stack1.length!=0){
        this.stack2.push(this.stack1[this.stack1.length-1])
        this.stack1.pop()
      }
      this.stack1.push(data)
      while(this.stack2.length!=0){
        this.stack1.push(this.stack2[this.stack2.length-1])
        this.stack2.pop()
      }
    }
    dequeue(){
      if (this.stack1.length==0){
        console.log(-1)
      }
      else{
        console.log(this.stack1[this.stack1.length-1])
        this.stack1.pop()
      }
    }
  }

  function queueImplement(inputArr){

  let q=new Queue();

  let counter=0
  while(counter<inputArr.length){
    if(inputArr[counter]==1){
      counter+=1
      q.enqueue(inputArr[counter])
    }else{
      q.dequeue()
    }
    counter+=1
  }

  }
  console.log('Output 1')
  // Input:5 -> 1 2 1 3 2 1 4 2 Output:2 3
  inputArr=[1,2,1,3,2,1,4,2]
  queueImplement(inputArr)
  console.log('Output 2')
  // Input:4=>1 2 2 2 1 4 Output:2 -1
  inputArr1=[1,2,2,2,1,4]
  queueImplement(inputArr1)
