function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;

  let minHeight = Math.min(height[left], height[right]);
  let maxArea = minHeight * (right - left)

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] > minHeight) {
        minHeight = height[left];
        const area = minHeight * (right - left);
        if (area > maxArea) {
          maxArea = area;
        }
      }
      left += 1;
    } else {
      if (height[right] > minHeight) {
        minHeight = height[right];
        const area = minHeight * (right - left);
        if (area > maxArea) {
          maxArea = area;
        }
      }
      right -= 1;
    }
  }
  return maxArea;
};

