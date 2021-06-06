const Pattern2 = () => {
  const n = 5;
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      string += String.fromCharCode(65 + i);
    }
    string += "\n";
  }
  console.log(string);
  return <div>{string}</div>;
};

export default Pattern2;
