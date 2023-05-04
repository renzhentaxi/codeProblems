problem: Given a string `s`, find the length of the longest substring without repeating characters.

notes:
start from left, maintain a set to keep track of existence of each characters in the substring.
where substring has a length of 1 initially
we dont need a set, we need a lookup table.

let i = 0;
let j = 1;
let lookup = map();
let maxSoFar = 0;
while j < length:
    lastIndex = lookup[j] ?? -1;
    if (lastIndex >= i)
       maxSoFar = max(maxSoFar, j-i);
       i = lastIndex +1;
    j+=1;
maxSoFar= max(maxSoFar, j-i);
return maxSoFar;

