# Redux Toolkit

* 강좌:
  * [01-redux-toolkit](https://www.youtube.com/watch?v=yjuwpf7VH74&feature=youtu.be)
  * [02-redux-toolkit](https://www.youtube.com/watch?v=9wrHxqI6zuM)
  * [03-redux-toolkit]()
  * [04-redux-toolkit]()

* 강사: 생활코딩 님



<br /><hr /><br />



# 01. Redux Toolkit 사용 배경

``Redux`` 를 사용하여 ``store`` 를 만들기 위해서는 아래와 같은 요소들을 만들어야 합니다.

1. Action Type
2. Action Object Factory
3. Reducer

<br />

``store`` 에 필요한 각 요소들을 각각 만들고 ``store`` 로 취합 및 사용에는 반복적인 작업량이 많습니다.

``Redux Toolkit`` 은 이러한 반복적인 작업들을 최소화 시킬 수 있도록 하여, 생산성을 높여 줍니다.

<br />

``Redux Toolkit`` 을 사용하려면, 기존에 설치했던 ``redux`` 와 ``react-redux`` 라이브러리가 함꼐 설치 되어 있어야 합니다.

그리고 ``Redux Toolkit`` 을 설치해 줍니다.

```bash
$ yarn add @reduxjs/toolkit
```



<br /><hr /><br />



# 02. ``Redux Toolkit`` 으로 ``Store`` 만들기

``Redux`` 는 복수의 ``reducer`` 들을 하나로 통합하여 ``rootReducer()`` 로 ``store`` 를 만들었습니다.

``reducer`` 를 이루는 구성요소는 다음과 같습니다.

* ``Action Type``
* ``Action Object Factory``
* ``initialState``
* ``reducer Function``

<br />

``Redux Toolkit`` 에서는 이렇게 분리된 4개 요소를 하나로 묶어서, ``slice`` 라고 부릅니다.

그래서 복수의 ``reducer`` 를 만들다면, 복수의 ``slice`` 를 만들게 됩니다.

```javascript
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  // 구성요소
});

export slice;
```

<br />

이렇게 만들어진 ``slice`` 들은 ``@reduxjs/toolkit`` 에서 제공하는 ``configureStore()`` 를 사용하여 ``store`` 를 만듭니다.

```javascript
import { configureStore } from "@reduxjs/toolkit";
import slice01 from "./slice01";
import slice02 from "./slice02";
import slice03 from "./slice03";

const store = configureStore({
  reducer: {
    slice01: slice01.reducer,
    slice02: slice02.reducer,
    slice03: slice03.reducer,
  },
});

export default store;
```

<br />

마지막으로 ``store`` 를 전역에 등록하는 방법은 기존과 동일하게 ``react-redux`` 에서 제공하는 ``<Provider />`` 컴포넌트를 사용합니다.

```javascript
// App.js

import { Provider } from "react-redux";
import store from "./modules/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        ...
      </div>
    </Provider>
  );
};

export default App;
```



<br /><hr /><br />



# TODO: Counter 구현하기
# TODO: Counter 구현하기
# TODO: Counter 구현하기