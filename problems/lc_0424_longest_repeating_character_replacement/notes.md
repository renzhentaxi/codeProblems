problem:
given a string `s` and an integer `k`.
choose any character of the string and change it to any other uppercase English character.
You can perform this up to `k` times.

return the length of the longest substring containing the same letter you can get after performing the operations.

notes:
`k` is basically wildcards.
pick i and j, such that i < j and 0 < i and j <= length;

from [i, j], we can count each occurence of each letter.
the length of the array is j-i, for the substring to contain the same character, the substring needs to have a letter that shows up 
j-i-k times.
if there isnt one, then we know that i,j is not the possible and we can increase i by 1
if there is one, then we can increase j by 1

the problem then becomes:
* maintain a count table of each letter.
* at every iteration, check if i,j is valid
* if i,j is valid, increment j
* if i,j is invalid, increment i

check if i,j is valid:
    the pair i,j is valid if:
    j-i-k <= max (counts of letters inside [i,j])
    since only uppercase letters are considered.
    this would have a max of:
    26 iteration
meaning the big o would be linear (26 * n => n)
space would be constant (26)


algorithm:
let i =0;
let j = 0;
let countTable = map();

i,j = [i,j] exclusive
while j < length:
    const spaceToFill = j-i-k;
    const maxCount = max(countTable);
    if(maxCount>= spaceToFill):
        countTable[[j]] += 1;
        j+=1;
    else:
        maxSoFar = max(maxSoFar, j-i-1);
        countTable[[i]] -=1;
        i+=1;
maxSoFar = max(maxSoFar, j-1);

