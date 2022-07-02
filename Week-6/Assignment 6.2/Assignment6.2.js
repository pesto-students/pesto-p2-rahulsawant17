var spiralOrder = function(matrix) {
    let startCol=0,startRow=0,endCol=matrix[0].length,endRow=matrix.length
    console.log(startCol,startRow,endCol,endRow)
    let res=[];
    while(startCol<endCol && startRow<endRow){
        for(let i=startCol;i<endCol;i++){
            res.push(matrix[startRow][i])
        }

        startRow+=1
        for(let i=startRow;i<endRow;i++){

                res.push(matrix[i][endCol-1])
        }
        endCol-=1
            if (!(startCol<endCol && startRow<endRow)){
                break}
        for(let i=endCol-1;i>startCol-1;i--){
                res.push(matrix[endRow-1][i])}
            endRow-=1

        for(let i=endRow;i>startRow;i--){
                res.push(matrix[i-1][startCol])}
            startCol+=1
    }
    return res

};

let matrix1 =[[ 1, 2, 3 ],
              [ 4, 5, 6 ],
              [ 7, 8, 9 ] ]
console.log(spiralOrder(matrix1))

let matrix2 =[[1,2,3,4],
              [5,6,7,8],
              [9,10,11,12]]
console.log(spiralOrder(matrix2))

let matrix3 =[[1,2,3,4],
              [5,6,7,8],
              [9,10,11,12],
              [13,14,15,16]]
console.log(spiralOrder(matrix3))