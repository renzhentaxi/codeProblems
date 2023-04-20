function findMin(nums: number[]): number {
    let start = 0;
    let end = nums.length;
    let answer = -1;
    if (nums[0] <= nums[nums.length - 1]) {
        return nums[0];
    }

    while (start < end) {
        const mid = Math.floor((start + end) / 2);
        const midValue = nums[mid];
        if (midValue >= nums[0]) {
            start = mid + 1;
        }
        else {
            answer = midValue;
            end = mid;
        }
    }
    return answer;
};

