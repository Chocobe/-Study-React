const OddEvenResult = ({ count }) => {
  console.log(`count: ${count}`);
  
  const result = count % 2 === 0 ? "짝수" : "홀수";
  
  return (
    <>
      🐫 {result}
    </>
  );
};

export default OddEvenResult;