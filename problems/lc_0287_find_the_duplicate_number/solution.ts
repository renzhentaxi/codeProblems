function findDuplicate(nums: number[]): number {
    let start = 1;
    let end = nums.length - 1;

    while (start < end) {
        const mid = Math.floor((start + end) / 2);
        let count = 0;
        for (let x of nums) {
            if (x <= mid) {
                count += 1;
            }
        }
        if (count <= mid) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
};

/**
 * linked list, cycle, two pointer
 */
function findDuplicate2(nums: number[]): number {
    let fast = nums[0];
    let slow = nums[0];

    fast = nums[nums[fast]];
    slow = nums[slow];
    while (fast != slow)
    {
        fast= nums[nums[fast]];
        slow = nums[slow];
    }
    slow = nums[0];
    while (fast != slow)
    {
        fast = nums[fast];
        slow = nums[slow];
    }
    return slow;
};
