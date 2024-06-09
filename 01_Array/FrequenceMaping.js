function frequenceMaping (string) {
    let map = {};

    for (const char of string) {
        if (map[char]) {
            map[char] ++;
        } else {
            map[char] = 1;
        }
    }

    for (const char in map) {
        console.log(char + ": " + map[char]);
    }
}

frequenceMaping("JavaScript")
frequenceMaping("Jay")
frequenceMaping("planning")