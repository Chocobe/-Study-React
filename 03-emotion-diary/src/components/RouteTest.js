import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>HOME</Link> |
      <Link to={"/diary"}>DIARY</Link> |
      <Link to={"/new"}>NEW</Link> |
      <Link to={"/edit"}>EDIT</Link>
    </>
  );
};

export default RouteTest;