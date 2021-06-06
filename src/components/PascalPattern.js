
const PascalPattern = () => {
    const n = 5;
    let string = "";
    for(let i = 1; i <= n; i++) {
        for(let j = 0; j < i; j++) {
            string += String.fromCharCode(65+j);
        }
        string += '\n';
    }

    for(let i = n-1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            string += String.fromCharCode(65+j);
        }
        string += '\n';
    }

    

    console.log(string);
    return <div>{string}</div>;
  };
  
  export default PascalPattern;
  