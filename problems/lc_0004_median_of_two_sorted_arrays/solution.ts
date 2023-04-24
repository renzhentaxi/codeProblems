function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let x = Math.floor((nums1.length + nums2.length) / 2);
    let smaller = nums1;
    let bigger = nums2;
    if(nums2.length < nums1.length)
    {
        smaller = nums2;
        bigger=nums1;
    }
    let start = 0;
    let end = smaller.length;

    while (start<= end)
    {
        let smallMid = Math.floor((start + end)/2);
        let bigMid = x - smallMid;

        let smallLeft = smallMid -1 >= 0 ? smaller[smallMid-1] : Number.NEGATIVE_INFINITY;
        let smallRight = smallMid < smaller.length ? smaller[smallMid] : Number.POSITIVE_INFINITY;
        let bigLeft = bigMid -1 >= 0 ? bigger[bigMid-1] : Number.NEGATIVE_INFINITY;
        let bigRight = bigMid < bigger.length ? bigger[bigMid] : Number.POSITIVE_INFINITY;
        if(smallLeft > bigRight)
        {
            end = smallMid-1;
        } else if(bigLeft > smallRight)
        {
            start=smallMid+1;
        } else 
        {
            const isEven = ((nums1.length +nums2.length)%2===0);
            if (isEven)
            {
                const m1 = Math.max(smallLeft, bigLeft);
                const m2= Math.min(smallRight, bigRight);
                return  (m1+m2)/2;
            }
            return Math.min(smallRight,bigRight);
        }
    }

    return -1;
};

type Testcase = [number[], number[], number]
function runTest(testcases: Testcase[]) {
    for (const [nums1, nums2, expected] of testcases) {
        const actual = findMedianSortedArrays(nums1, nums2);
        console.log('...')
        const actualReversed = findMedianSortedArrays(nums2, nums1);
        if (actual === actualReversed && actual === expected) {
            continue;
        }
        console.log({ nums1, nums2, actual, actualReversed, expected })
    }
}
runTest([
    // [[1,3,5], [2,4], 3],
    // [[], [1], 1],
    // [[1,3,5], [], 3],
    [[],[0], 0],
    // [[1, 3, 5], [2, 4, 6], 3.5],
    // [[6], [1,2,3,4,5],3.5]
])
// findMedianSortedArrays([1, 5], [2,4]);
// findMedianSortedArrays([1,3,5], [2,4,6]);
// findMedianSortedArrays([1,2,3],[5,6]);
// findMedianSortedArrays([1,2],[3,5,6]);