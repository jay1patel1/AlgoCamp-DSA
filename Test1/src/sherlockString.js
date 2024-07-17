function isValid(s) {
  let charFreq = {};
  for (let i = 0; i < s.length; i++) {
    charFreq[s[i]] = (charFreq[s[i]] || 0) + 1;
  }

  let freqCount = {};
  for (let key in charFreq) {
    let freq = charFreq[key];
    freqCount[freq] = (freqCount[freq] || 0) + 1;
  }

  let uniqueFreqs = Object.keys(freqCount).map(Number);
  if (uniqueFreqs.length === 1) {
    return "YES";
  }

  if (uniqueFreqs.length === 2) {
    let [freq1, freq2] = uniqueFreqs;
    let [count1, count2] = [freqCount[freq1], freqCount[freq2]];

    if ((freq1 === 1 && count1 === 1) || (freq2 === 1 && count2 === 1)) {
      return "YES";
    }
    if (Math.abs(freq1 - freq2) === 1) {
      if ((freq1 > freq2 && count1 === 1) || (freq2 > freq1 && count2 === 1)) {
        return "YES";
      }
    }
  }

  return "NO";
}

console.log(isValid("aabbcd"));
console.log(isValid("aabbd"));
console.log(isValid("abcdefghhgfedecba"));
console.log(isValid("aabbccddeefghi"));
console.log(isValid("aabbccc"));
