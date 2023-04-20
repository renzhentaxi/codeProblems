function nextGreatestLetter(letters: string[], target: string): string {
    let start = 0;
    let end = letters.length;
    const targetCode = target.charCodeAt(0);
    let answer = 0;
    while (start < end) {
        const mid = Math.floor((start + end) / 2);
        const midCode = letters[mid].charCodeAt(0);

        if (midCode > targetCode) {
            answer = mid;
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return letters[answer]
};