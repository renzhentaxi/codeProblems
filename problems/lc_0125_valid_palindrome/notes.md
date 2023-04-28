problem:
given a string `s`, return `true` if it is a palindrome or `false` otherwise.
a palindrome reads the same way forward and backward.
ignore casing and remove non alphanumeric characters

notes:
we can use two pointer approach. at each step 

if left is not alphanumeric, increment left; continue;
if right is not alphanumeric, decrement right; continue;

compare left with right (convert to lowercase), 
    if they are equal increment left and decrement right
    else return false
break loop when left > right
return true;

O(n);

we can also remove invalid characters and sort and reverse sort and compare

