problem:
given two strings `s1` and `s2`, return true if `s2` contains a permutation of `s1`.

notes:
sliding window:
if answer exists, it has to be in range of [0, length s2];
let i such that [i, i+ length s1] = the first occurrence of permutation of s1 in s2
is s2 is less than s1, then return false

let j = length of s1;
add elements from [i, i+j] to counter;
compare with s1 if match then return true;

while j < length of s2:
    remove[i] from the set,
    add [j] to the set;
    if match:
        return true;
    i +=1;
    j +=1;
return false;

performance is j * cost of comparing set.

note: we can move more than one index if the new element is not in the s1.

if at any point the set is negative that means too many of the correct element, move 1
if at any point we encounter a letter thats not in s1, move the entire array to after it.

if we use two pointers:
start at i = 0 and j = 0;
while j < length; 
    if counts[j] > 0, 
        counts[j] -1;
    if counts[j] === 0;
        set i j+1;
        move i to j (not including j)
            each step increment the count[i];
    j+=1;
    if(j-i === length of the array):
        return true;
invariant:
    the i,j will always only contain the right answer(e.g. it will not contain duplicate letters or letters that doesnt exist)
return false;

