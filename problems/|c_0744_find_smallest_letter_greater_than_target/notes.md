given:
- an array `letters` that contains of characters sorted in `non-decreasing order` and a character `target`.
- at least two different characters in `letters`
return:
- the smallest character in `letters` that is lexicographically greater than `target`
- if no such character exists, return the first character. basically if all characters are smaller than `target`

notes:
we need to convert the characters to number via something like 'charcode'

let start = 0;
let end = `letters` length;
let targetCode = charCode(target);
let answer = -1;
while (start < end):
    variant: start <= i < end;
    where i is index of the smallest character in letters greater than target

    mid = ...
    midValue = charCode(letters[mid]);
    if charCode === targetCode:
        move right since we want a number greater than targetCode
        start = mid + 1;
    if charCode < targetCode:
        move right
        start = mid+1;
    if charCode > targetCode:
        move left; we might be at the best location tho
        end = mid;
        answer= mid;
start === end
return answer;