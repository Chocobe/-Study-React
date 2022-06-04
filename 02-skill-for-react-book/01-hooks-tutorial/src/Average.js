import {
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";

const getAverage = list => {
  console.log("평균값 계산중...");

  if (list.length === 0) return 0;

  return list.reduce((total, value) => +value + total, 0) / list.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [num, setNum] = useState("");

  const $input = useRef(null);

  const onChange = useCallback(({ target: { value } }) => setNum(value), []);
  const onInsert = useCallback(() => {
    const newList = list.concat(+num);
    setList(newList);
    setNum("");
    $input.current.focus();
  }, [list, num]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input ref={$input} value={num} onChange={onChange} />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>

      <div>
        <b>평균값: </b>{avg}
      </div>
    </div>
  );
};

export default Average;