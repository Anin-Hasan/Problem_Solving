let s = "   fly me   to   the moon  ";

let lengthOfLastWord = (s) => {
  const t = s.split(" ").filter((n) => n !== "");
  console.log(t[t.length - 1].length);
};
lengthOfLastWord(s);
