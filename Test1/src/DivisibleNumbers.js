function findSmallestDivisor(n) {
    let k = n;
    while (true) {
        if (k % n === 0 && isValid(k)) {
            return k.toString().length;
        }
        k++;
    }

    function isValid(k) {
        const kStr = k.toString();
        if (kStr.includes('0')) return false;

        let sum = 0;
        let product = 1;
        for (let digit of kStr) {
            const num = parseInt(digit);
            sum += num;
            product *= num;
        }
        return sum >= product;
    }
}

console.log(findSmallestDivisor(123));
console.log(findSmallestDivisor(1203));
console.log(findSmallestDivisor(9));