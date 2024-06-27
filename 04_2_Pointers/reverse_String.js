var reverseString = function(s) {
    let a = 0;
    let b = s.length - 1;

    while (a < b) {
        let temp = s[a];
        s[a] = s[b];
        s[b] = temp;
        a++;
        b--;
    }
};

reverseString(["h","e","l","l","o"]);