function twoSum(numbers: number[], target: number): number[] {
    let start =0;
    let end = numbers.length-1;
    while (start < end)
    {
        let low = numbers[start];
        let high = numbers[end];
        let sum = low + high;
        if(sum === target)
        {
            return [start+1, end+1];
        }
        if (sum < target)
        {
            start +=1;
        }
        else {
            end -=1;
        }
    }
    return [-1,-1]
};