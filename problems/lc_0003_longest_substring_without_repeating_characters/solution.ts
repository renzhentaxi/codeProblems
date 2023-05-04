function lengthOfLongestSubstring(s: string): number {
  let i = 0;
  let j = 0;
  let lookup: Record<string, number> = {};
  let maxSoFar = 0;

  while (j < s.length) {
    const lastSeenAt = lookup[s[j]] ?? -1;
    lookup[s[j]] = j;
    if (lastSeenAt >= i) {
      maxSoFar = Math.max(maxSoFar, j - i);
      i = lastSeenAt + 1;
    }
    j += 1;
  }

  maxSoFar = Math.max(maxSoFar, j - i);

  return maxSoFar;
};
