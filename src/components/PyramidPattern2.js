const PyramidPattern2 = () => {
    const n = 5;
    let string = "";
    let c = 0;
    for(let i = 1; i <= n; i++) {
        for(let j = i; j < n; j++) {
            string += ' ';
        }
        for(let k = 0; k < i*2-1; k++) {
            string += String.fromCharCode(65+c);
            c += 1;
        }
        string += '\n';
    }
    console.log(string);
    return <div>{string}</div>;
  };
  
  export default PyramidPattern2;
  