function checkInclusion(s1: string, s2: string): boolean {
  if (s2.length < s1.length) {
    return false;
  }
  const counter: Record<string, number> = {};
  for (const n of s1) {
    counter[n] = (counter[n] ?? 0) + 1
  }
  let i = 0; let j = 0;

  while (j < s2.length) {
    const end = s2.charAt(j);
    if (counter[end] === undefined) {
      while (i < j) {
        counter[s2.charAt(i)] += 1;
        i += 1;
      }
      i = j + 1;
    }
    else if (counter[end] === 0) {
      while (i < j && counter[end] === 0) {
        counter[s2.charAt(i)] += 1;
        i += 1;
      }
      counter[end] -= 1;
    }
    else {
      counter[end] -= 1;
    }
    j += 1;
    if (j - i === s1.length) {
      return true
    }
  }

  return false;
};

