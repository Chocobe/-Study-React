const Container = ({ children }) => {
  console.log("children");
  console.log(children);
  
  return (
    <div style={{
      margin: "20px",
      padding: "20px",
      border: "1px solid #ff1493",
    }}>
      {children}
    </div>
  );
};

export default Container;