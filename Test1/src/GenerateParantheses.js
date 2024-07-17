function solution(n) {
    // Write your code here
    let ans = [];

    function printP(add,openP,closeP) {
        if (add.length === n*2) {
            return ans.push(add);
        }

        if (openP < n) {
            printP(add+"(",openP+1,closeP);
        }

        if (closeP < openP) {
            printP(add+")",openP,closeP+1)
        }
    }

    printP("",0,0);

    return ans;
}

// Example usage:
console.log(solution(3));
console.log(solution(2));
console.log(solution(6));

