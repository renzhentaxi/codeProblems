function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let area = 0;
  while (left < right) {
    const leftValue = height[left];
    const rightValue = height[right];
    if (leftValue <= rightValue) {
      const minvalue = leftValue;
      left += 1;
      while (left < right) {
        const currentleftvalue = height[left];
        if (minvalue < currentleftvalue) {
          break;
        }
        area += minvalue - currentleftvalue;
        left += 1;
      }
    } else {
      const minvalue = rightValue;
      right -= 1;
      while (left < right) {
        const currentRightValue = height[right];
        if (minvalue < currentRightValue) {
          break;
        }
        area += minvalue - currentRightValue;
        right -= 1;

      }
    }
  }
  return area;
};
