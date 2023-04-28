function threeSum(nums: number[]): number[][] {
  const sorted = nums.sort((a, b) => a - b);
  if (sorted[0] > 0) {
    return [];
  }
  const answers: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    const iValue = sorted[i];
    if (iValue > 0) {
      //since i will be the smallest value, if it is positive, then we wont be able to find another two that will work
      break;
    }
    if (i > 0 && sorted[i - 1] === iValue) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const jValue = sorted[j];
      const ij = iValue + jValue;
      if (ij > 0) {
        break;
      }
      if (j - 1 > i && sorted[j - 1] === jValue) {
        j += 1;
        continue;
      }
      const kValue = sorted[k];
      const ijk = ij + kValue;
      if (ijk === 0) {
        answers.push([iValue, jValue, kValue]);
        k -= 1;
        j += 1;
      }
      else if (ijk > 0) {
        k -= 1;
      }
      else {
        j += 1;
      }

    }
  }
  return answers;
};
