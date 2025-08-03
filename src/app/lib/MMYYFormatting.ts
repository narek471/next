const MMYYFormatting = (str: string) => {
  let formatStr = "";
  let baseStr = "";
  let i = 0;
  console.log(str[str.length - 1]);
  if (str[0] == "0" || str[1] == "0") {
    baseStr = "";
  } else if (
    (str.length == 1 && +str[0] != 1 && str[str.length - 1] != " ") ||
    Number(str[0] + str[1]) > 12
  ) {
    baseStr += `0${str[0]}`;
    i = 1;
  }
  while (i < str.length) {
    if (str[i] != "/" && str[i] != " ") {
      baseStr += str[i];
    }
    i++;
  }
  for (let i = 0; i < baseStr.length; i++) {
    if (i == 2) {
      formatStr += " / ";
    }
    formatStr += baseStr[i];
  }
  return formatStr;
};
export default MMYYFormatting;
