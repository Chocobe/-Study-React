import {
  useRef,
  useState,
  useCallback,
} from "react";

import produce from "immer";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({
    name: "",
    username: "",
  });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;

  //   setForm(
  //     produce(form, draft => {
  //       draft[name] = value;
  //     })
  //   );
  // }, [form]);

  const onChange = useCallback(e => {
    const { name, value } = e.target;

    setForm(
      produce(draft => {
        draft[name] = value;
      })
    );
  }, []);

  // const onSubmit = useCallback(e => {
  //   e.preventDefault();

  //   const { username, name } = form;

  //   const info = {
  //     id: nextId.current,
  //     name,
  //     username,
  //   };

  //   nextId.current++;

  //   setData(
  //     produce(data, draft => {
  //       draft.array.push(info);
  //     })
  //   );

  //   setForm({
  //     name: "",
  //     username: "",
  //   });
  // }, [form, data]);

  const onSubmit = useCallback(e => {
    e.preventDefault();

    const { name, username } = form;

    const info = {
      id: nextId.current,
      name,
      username,
    };

    setData(
      produce(draft => {
        draft.array.push(info);
      })
    );

    setForm({
      name: "",
      username: "",
    });

    nextId.current++;
  }, [form])

  const onRemove = useCallback(id => {
    setData(
      produce(data, draft => {
        draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
      })
    );
  }, [data]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          value={form.name}
          placeholder="이름"
          onChange={onChange}
        />

        <input
          name="username"
          value={form.username}
          plceholder="아이디"
          onChange={onChange}
        />

        <button type="submit">제출</button>
      </form>

      <div>
        <ul>
          {
            data.array.map(info => (
              <li 
                key={info.id}
                onClick={() => onRemove(info.id)}
              >
                {info.username} ({info.name})
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default App;