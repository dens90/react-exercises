const Sum = ({ numbers = [1, 2, 3, 4] }) => {
  const result = numbers.reduce((a, b) => a + b);
  return <h1>{result}</h1>;
};

export default Sum;
