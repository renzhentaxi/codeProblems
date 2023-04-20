function isPerfectSquare(num: number): boolean {
    if(num === 1)
    {
        return true;
    }
    if(num < 1)
    {
        return false;
    }
    let start = 2;
    let end = num;

    while (start < end)
    {
        const mid = Math.floor((start+end)/2);
        const midSquare = mid * mid;
        if(midSquare === num)
        {
            return true;
        }
        if (midSquare > num)
        {
            end = mid;
        }
        else {
            start = mid +1;
        }
    }
    return false;
};