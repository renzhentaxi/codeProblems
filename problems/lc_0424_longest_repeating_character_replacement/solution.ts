function characterReplacement(s: string, k: number): number {
  let i = 0;
  let j = 0;
  let count: Record<string, number> = {};
  count[s.charAt(0)] = 1;

  let maxSoFar = 0;
  while (j < s.length) {
    const spaceToFill = j - i - k;
    const maxCount = Math.max(...Object.values(count));
    if (maxCount >= spaceToFill) {
      count[s.charAt(j)] = (count[s.charAt[j]] ?? 0) + 1
      j += 1;
    }
    else {
      maxSoFar = Math.max(maxSoFar, j - i);
      count[s.charAt(i)] -= 1;
      i += 1;
    }
  }

  maxSoFar = Math.max(maxSoFar, j - i);
  return maxSoFar;
};
