import React, {
  useState,
  useEffect,
} from "react";

const Counter = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Counter Update - counter: ${count}`);
  });
  
  return <div>count: {count}</div>;
});

const areEqual = (prevProps, nextProps) => {
  return Object.entries(nextProps).every(([propKey, propValue]) => {
    if (typeof propValue !== "object") return propValue === prevProps[propKey];

    return Object.entries(propValue).every(([key, value]) => {
      return value === prevProps[propKey][key];
    });
  });
};

const ObjCounter = React.memo(({ obj }) => {
  return <div>{obj.count}</div>;
}, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });
  
  return (
    <div style={{
      margin: 50,
      padding: 50,
      border: "1px solid #ff1493",
    }}>
      <div>
        <h2>Count A</h2>
        <Counter count={count} />
        <button onClick={() => setCount(count)}>count 증가</button>
      </div>

      <div>
        <h2>Count B</h2>
        <ObjCounter obj={obj} />
        <button onClick={() => setObj({
          count: obj.count,
        })}>
          obj.count 증가
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;