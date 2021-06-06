const PyramidPattern = () => {
    const n = 5;
    let string = "";
    let c = 0;
    for(let i = 1; i <= n; i++) {
        for(let j = n; j > i; j--) {
            string += ' ';
        }
        for(let k = 0; k < i*2-1; k++) {
            string += String.fromCharCode(65 + c);
            c += 1;
        }
        c = 0;
        string += '\n';
    }
    console.log(string);
    return <div>{string}</div>;
  };
  
  export default PyramidPattern;
  