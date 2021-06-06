const HourGlassPattern = () => {
    const n = 5;
    let string = "";
    let c = 0;
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j < i; j++) {
            string += ' ';
        }
        for(let k = 0; k < n*2-i*2+1; k++) {
            string += String.fromCharCode(65+c);
            c += 1;
        }
        c = 0;
        string += '\n';
    }

    c = 0;
    for(let i = 2; i <= n; i++) {
        for(let j = i; j < n; j++) {
            string += ' ';
        }
        for(let k = 0; k < i*2-1; k++) {
            string += String.fromCharCode(65+c);
            c += 1;
        }
        c = 0;
        string += '\n';
    }

    

    console.log(string);
    return <div>{string}</div>;
  };
  
  export default HourGlassPattern;
  