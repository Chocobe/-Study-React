// useState() 가 실행 된 횟수 === state 배열 index(key) 값
let currentStateKey = 0;
const states = [];

const useState = initState => {
  const key = currentStateKey;

  if (states.length === key) {
    states.push(initState);
  }

  const state = states[key];
  
  const setState = newState => {
    if (newState === state) return;
    
    states[key] = newState;
    render();
  };

  currentStateKey += 1;
  console.log(`key: ${key}, ${state}`);
  
  return [state, setState];
}

const Counter = () => {
  const [count, setCount] = useState(1);

  window.increment = () => setCount(count + 1);
  window.nochange = () => setCount(1);

  return `
    <div>
      <strong>count: ${count}</strong>
      <button onClick="nochange()">증가</button>
    </div>
  `;
};

const Cat = () => {
  const [cat, setCat] = useState("고양이");

  window.meow = () => setCat(cat + " 야옹!");

  return `
    <div>
      <strong>${cat}</strong>
      <button onClick="meow()">고양이 울음소리</button>
    </div>
  `;
};

let renderCount = 0;

const render = () => {
  const $app = document.querySelector("#app");

  renderCount++;

  $app.innerHTML = `
    <div>
      <div>Render Count: ${renderCount}</div>
      ${Counter()}
      ${Cat()}
    </div>
  `;

  // currentStateKey 초기화
  currentStateKey = 0;
};

render();