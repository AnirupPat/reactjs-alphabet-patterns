const Pattern3 = () => {
    const n = 5;
    let string = "";
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        string += String.fromCharCode(65 + count);
        count += 1;
      }
      string += "\n";
    }
    console.log(string);
    return <div>{string}</div>;
  };
  
  export default Pattern3;
  