const letters = 'qwertyuiopasdfghjlkzxcvbnm';

function initCounters(s: string, length: number) {
  const counter: Record<string, number> = {};

  for (let i = 0; i < length; i++) {
    counter[s.charAt(i)] = (counter[s.charAt(i)] ?? 0) + 1;
  }
  return counter;
}

function minWindow(s: string, t: string): string {
  if (s.length < t.length) {
    return '';
  }
  s = s.toLowerCase();
  t = t.toLowerCase();
  const tCounters: Record<string, number> = {}
  const sCounters: Record<string, number> = {};
  for (let i = 0; i < t.length; i++) {
    tCounters[t.charAt(i)] = (tCounters[t.charAt(i)] ?? 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    const tVal = s.charAt(i);
    if (tVal in tCounters) {
      sCounters[tVal] = (sCounters[tVal] ?? 0) + 1;
    }
  }

  let expectedMatch = Object.keys(tCounters).length;
  let matches = 0;

  for (const n of Object.keys(tCounters)) {
    if (tCounters[n] === sCounters[n]) { matches += 1 }
    sCounters[n] = sCounters[n] ?? 0;
  }
  if (matches === expectedMatch) {
    return s.slice(0, t.length);
  }

  let i = 0;
  let j = t.length;
  let minWidth = s.length + 1;
  let minString = '';

  while (j < s.length) {
    const jVal = s.charAt(j);

    if (jVal in tCounters) {
      sCounters[jVal] += 1;
      if (sCounters[jVal] >= tCounters[jVal] && sCounters[jVal] - 1 < tCounters[jVal]) {
        matches += 1;
      }
    }
    if (matches == expectedMatch) {
      if (j - i + 1 < minWidth) {
        minWidth = j - i + 1;
        minString = s.slice(i, j + 1);
      }

      const iVal = s.charAt(i);
      sCounters[iVal] -= 1;
      if (sCounters[iVal] < tCounters[iVal]) {
        matches -= 1;
      }
      i += 1;
      while (i < j) {
        if (tCounters[s.charAt(i)] > 0) {
          break;
        }
        i += 1;
      }
    }
    j += 1;
  }
  if (matches == expectedMatch) {
    if (j - i + 1 < minWidth) {
      minWidth = j - i + 1;
      minString = s.slice(i, j + 1);
    }
  }
  return minString;
};

console.log(minWindow('ADOBECODEBANC', 'ABC'))
