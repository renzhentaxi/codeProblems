const CHARCODE = {
  '0': '0'.charCodeAt(0),
  '9': '9'.charCodeAt(0),
  'a': 'a'.charCodeAt(0),
  'z': 'z'.charCodeAt(0),
  'A': 'A'.charCodeAt(0),
  'Z': 'Z'.charCodeAt(0),
}
const LETTER_DELTA = CHARCODE['a'] - CHARCODE['A'];
function toLowercase(charcode: number) {
  if (CHARCODE['A'] <= charcode && charcode <= CHARCODE['Z']) {
    return charcode + LETTER_DELTA;
  }
  return charcode;
}

function isAlphaNumeric(charcode: number) {
  if (CHARCODE['0'] <= charcode && charcode <= CHARCODE['9']) {
    return true
  }
  if (CHARCODE['a'] <= charcode && charcode <= CHARCODE['z']) {
    return true;
  }
  if (CHARCODE['A'] <= charcode && charcode <= CHARCODE['Z']) {
    return true;
  }
  return false;
}

function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const leftCode = s.charCodeAt(left);
    if (!isAlphaNumeric(leftCode)) {
      left += 1;
      continue;
    }
    const rightCode = s.charCodeAt(right);
    if (!isAlphaNumeric(rightCode)) {
      right -= 1;
      continue;
    }
    if (toLowercase(leftCode) === toLowercase(rightCode)) {
      left += 1;
      right -= 1;
    } else {
      return false
    }
  }
  return true;
};
