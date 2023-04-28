
function longestConsecutive2(nums: number[]): number {
  const exists = new Set(nums);
  let maxSoFar = 0;
  const seen = new Set();
  for (const n of nums) {
    if (seen.has(n)) {
      continue;
    }
    if (exists.has(n - 1)) {
      continue;
    }

    seen.add(n);
    let next = n + 1;
    while (exists.has(next)) {
      next = next + 1;
    }
    const count = next - n;
    if (count > maxSoFar) {
      maxSoFar = count;
    }
  }
  return maxSoFar
}

function longestConsecutive(nums: number[]): number {
  const exists = new Set(nums);
  let maxSoFar = 0;
  const seen = new Set();
  for (const n of nums) {
    if (seen.has(n)) {
      continue;
    }

    let count = 1;
    let prev = n - 1;
    while (exists.has(prev)) {
      count += 1;
      seen.add(prev);
      prev = prev - 1;
    }
    let next = n + 1;
    while (exists.has(next)) {
      count += 1;
      seen.add(next);
      next = next + 1;
    }

    if (count > maxSoFar) {
      maxSoFar = count;
    }
  }
  return maxSoFar
}
