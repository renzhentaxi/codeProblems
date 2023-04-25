function splitArray(nums: number[], k: number): number {
    let max = Number.NEGATIVE_INFINITY;
    let sum = 0;
    for(const n of nums)
    {
        if (n>max)
        {
            max = n;
        }
        sum += max;
    }
    let start = max;
    let end = sum;

    while (start < end)
    {
        const mid = Math.floor((start+end)/2);
        if (cond (nums, k,mid))
        {
            end = mid;
        } else 
        {
            start=mid+1;
        }
    }
    return start;
};

function cond(nums: number[], k:number, mid:number): boolean
{
    //can we split nums into k array such that the max is less than mid?
    let currentSum =0;
    let split=1;
    for(let i =0;i < nums.length; i++)
    {   
        currentSum+=nums[i];
        if(currentSum > mid)
        {
            currentSum=0;
            split+=1;
        }
    }
    return split <= k;
}