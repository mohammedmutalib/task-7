function findOverlap(word1, word2) {
    let overlap = 0;
    let maxOverlap = Math.min(word1.length, word2.length);
    for (let i = 1; i <= maxOverlap; i++) {
      if (word1.endsWith(word2.substr(0, i))) {
        overlap = i;
      }
    }
    return overlap;
  }
  function join(words) {
    let result = words[0];
    let minOverlap = Infinity;
    for (let i = 1; i < words.length; i++) {
      const overlap = findOverlap(result, words[i]);
      result += words[i].substr(overlap);
      minOverlap = Math.min(minOverlap, overlap);
    }
    return [result, minOverlap];
  }
  console.log(join(["oven", "envier", "erase", "serious"])); 
  console.log(join(["move", "over", "very"])); 
  console.log(join(["to", "ops", "psy", "syllable"]));
  console.log(join(["aaa", "bbb", "ccc", "ddd"])); 
  