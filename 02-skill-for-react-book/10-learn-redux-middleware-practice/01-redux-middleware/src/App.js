import React, {
  useState,
} from "react";
import Store from "./modules/Store";

import Category from "@/components/Category";
import NewsListContainer from "@/containers/NewsListContainer";

import "@/App.scss";

const App = () => {
  const [category, setCategory] = useState("news");
  const [number, setNumber] = useState("1");
  
  return (
    <Store>
      <div className="App">
        <Category 
          number={number}
          setNumber={setNumber}
          category={category}
          onChangeCategory={category => setCategory(category)}
        />

        <hr className="my-20" />
        
        <NewsListContainer
          number={number}
          category={category}
        />
      </div>
    </Store>
  );
};

export default App;