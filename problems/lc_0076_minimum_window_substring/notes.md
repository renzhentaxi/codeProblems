problem:
given two strings `s` and `t` of lengths `m` and `n`. 
return the minimum window substring of `s` such that every character in `t` is included (incldues duplicates) in the window.

If no such substring exists, return `''`;
notes:

let the window be represented by i,j such that `s[i,j]` contains all character used by `t`.

for this window to work, `s[i]` must be included in `t`;
which means the possible values for i is all the index in `s` such that `s[i] in t`.
we know j must be at least `i+length of t`.

brute force:
    loop over `t` to create a set containing its characters.
    let minWindowSize=length of s +1;

    loop over `s`:
        if `s[i]` in set:
            loop j from [i, end of array or j+minWindowSize]:
            if we found all the characters:
                update minWindowSize.
                note: we dont need to compare because we will only loop less than or equal to minWindowSize.
            else:
                if ended because end of array: return minWindowSize
    
    this has a big o of n^2

sliding approach:
    loop over `t` to create a set containing its characters.
    let i = 0;
    let j = 1;
    let minWidth = size of s + 1 (aka impossible);
    let minString = '';
    
    let matches = 26;

    while j < length of s +1:
       counter[s[j]]+= 1;
       if (counter[s[j]] === tCounter):
            matches +=1;
       if(counter[s[j]-1] === counter):
            matches -=1;
        if matches === 26:
            if (j-i < minWidth):
                minWidth= j-i;
                minString=[i,j];
                while i<j:
                    counter[s[i]]-=1;
                    i++;
                    ...
        j+=1;
    if(matches === 26)
        ...
    return minString;
linear 
s
