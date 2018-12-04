// Return the middle character of a string. If the string has an even number length, return the middle two characters
function getMiddle(s) {
  let half = s.length / 2;
  return s.length % 2 === 0 ? s[half - 1] + s[half] : s[Math.floor(half)];
}



