const Pattern4 = () => {
  const n = 5;
  let string = "";
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      string += String.fromCharCode(65 + j);
    }
    string += "\n";
  }
  console.log(string);
  return <div>{string}</div>;
};

export default Pattern4;
