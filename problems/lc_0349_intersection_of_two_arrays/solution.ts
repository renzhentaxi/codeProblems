//linear
function intersection(nums1: number[], nums2: number[]): number[] {
    let s1=0; 
    let s2 =0;
    let dups:number[] = [];
    nums1=nums1.sort((a,b)=> a-b);
    nums2=nums2.sort((a,b)=> a-b);
    while (s1 < nums1.length && s2 < nums2.length)
    {
        if(nums1[s1]=== nums2[s2])
        {  
            if(dups.length === 0 || nums1[s1]!== dups[dups.length-1])
            {
                dups.push(nums1[s1]);
            }
            s1+=1;
            s2+=1;
        } else if (nums1[s1] > nums2[s2])
        {
            s2 +=1;
        } else {
            s1 +=1;
        }
    }

    return dups;
};