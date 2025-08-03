const cardFormatting = (str: string) => {
  let formatStr = "";
  let nospacestr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      continue;
    } else {
      nospacestr += str[i];
    }
  }

  let length = 0;
  for (let i = 0; i < nospacestr.length; i += 1) {
    length++;
    formatStr += nospacestr[i];
    if (length == 4) {
      if (i !== nospacestr.length - 1) {
        formatStr += " ";
        length = 0;
      }
    }
  }

  return formatStr;
};
export default cardFormatting;
