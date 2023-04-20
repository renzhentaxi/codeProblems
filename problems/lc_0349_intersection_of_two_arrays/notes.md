given:
- two integer arrays `nums1` and `nums2`
- array con contain duplicates
- array is not sorted

return:
- return an array of their intersection
- can be any order
- unique results only

notes:
sort both array
create a placeholder array

let s1,s2 be the start of the array for nums1 and nums2
let e1,e2 be the end...

ideally at each step of the algorithm we will be shrinking s1-e1, and s2-e2
we know we are done once we reached the s1 > e1 or s2 > e2;

if arr[s1] === arr[s2]
{
    array.push(arr[s2])
    s1+=1;
    s2+=1;
}
if(arr[s1] > arr[s2])
{
    s2 +=1;
}
if (arr[s2] > arr[s1])
{
    s1 +=1;
}

binary:
we can probably do a binary to find the index for the smallest value >= s2
tho this might be less efficent on some arrays 

note:
this problem can be solved using a set at expense of more space