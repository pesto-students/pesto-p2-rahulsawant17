
var validPath = function(n, edges, source, destination) {

    let graph = new Map();
    let visited = new Set();

    for(let [e1,e2] of edges){
      if(graph.has(e1)){
        graph.get(e1).push(e2);
      } else {
        graph.set(e1, [e2]);
      }

      if(graph.has(e2)){
        graph.get(e2).push(e1);
      } else {
        graph.set(e2, [e1]);
      }
    }
    function dfs(vertex){
      visited.add(vertex);
      let edgesV  = graph.get(vertex);
      if (edgesV && edgesV.length > 0){
        for (let e of edgesV){
          if(!visited.has(e)){
            dfs(e);
          }
        }
      }
    }

    dfs(source);

    return visited.has(destination);
  };
  // Example 1
// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
console.log(validPath(n, edges, source, destination))
// Example 2
// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// Output: false

//Time Complexity : O(V+E)