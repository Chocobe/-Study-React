import React from "react";

import "./CounterTemplate.css";

export type CounterTemplateProps = {
  title: string;
  count: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

function CounterTemplate(props: CounterTemplateProps) {
  const {
    title,
    count,
    onDecrease,
    onIncrease,
  } = props;

  return (
    <div className="CounterTemplate">
      <h2 className="CounterTemplate-title">
        {`${title}: ${count}`}
      </h2>

      <div className="CounterTemplate-actions">
        <button onClick={onDecrease}>Decrease</button>
        <button onClick={onIncrease}>Increase</button>
      </div>
    </div>
  );
}

export default CounterTemplate;