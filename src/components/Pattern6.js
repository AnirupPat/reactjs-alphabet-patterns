const Pattern6 = () => {
    const n = 5;
    let string = "";
    for (let i = 0; i < n; i++) {
      for (let j = n; j > i; j--) {
        string += String.fromCharCode(65 + j - 1 - i);
      }
      string += "\n";
    }
    console.log(string);
    return <div>{string}</div>;
  };
  
  export default Pattern6;
  