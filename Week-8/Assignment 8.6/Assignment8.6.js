function allPathsSourceTarget(graph) {
    let ans = [];
    let queue = [[0]];
    console.log(queue)
    while (queue.length) {
        let updatedQueue = [];
        while (queue.length) {
            let cur = queue.shift();
            let parentNodes = [...graph[cur[cur.length - 1]]];
            while (parentNodes.length) {
                let nextNode = parentNodes.pop();
                let newIteraton = [...cur, nextNode];
                if (nextNode == graph.length - 1) {
                    ans.push(newIteraton);
                }
                else {
                    updatedQueue.push(newIteraton);
                }
            }
        }
        queue = updatedQueue;
    }
    return ans;
};

//   console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]))