# React 스터디 저장소 입니다.

* 강의: [한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8)

* 강의 출처: 인프런 - 이정환 강사님



<br /><hr /><br />



# 01. ReactJs 기초

## 01-01. React 를 사용하는 이유

1. Component 기반으로 개발할 수 있습니다.
     * Component 기반이 아니라면, 서로 다른 페이지에 사용한 동일한 요소들, ``<header />``, ``<footer />`` 등을 각 페이지마다 동일한 코드를 작성해 주어야 합니다.
     * Component 기반으로 만들게 되면, 이러한 동일한 요소들을 개별 Component 로 만들고, 필요에 따라 조립하는 방식으로 사용할 수 있게 됩니다.

2. ``명령형 프로그래밍`` 이 아닌, ``선언형 프로그래밍`` 으로 개발할 수 있습니다.
     * ``JQuery`` 처럼 명령형 프로그램으로 개발하게 되면, 코드를 파악하기 어려워 집니다. 그래서 ``React`` 를 사용하여, ``선언형 프로그래밍`` 으로 개발을 하여, 코드의 의미전달을 좀 더 좋게 만들 수 있습니다.

3. ``React`` 는 ``Virtual DOM`` 을 사용하기 때문에, ``Rendering`` 과정을 효율적으로 할 수 있습니다.
     * ``DOM`` 을 변경하게 되면, 변경되는 요소 1개당 1번의 ``Rendering 전체`` 과정을 거치지만, ``Virtual DOM`` 을 사용하면, 변경되는 요소들을 ``Virtual DOM`` 에서만 적용해 본 후, 실제 ``DOM`` 과 달라지는 점을 ``일괄 Rendering`` 하기 때문에 성능을 향상시켜 줍니다.



<br /><hr /><br />



## 01-02. React 프로젝트 생성하기

* React 의 ``Bolier Plate`` 명령어는 다음과 같습니다.

```bash
npx create-react-app 프로젝트명
```

<br />

React 에서는 ``js`` 파일에 작성한 함수가 ``HTML`` 요소를 반환하도록 Component 를 개발 합니다.

만약 ``document`` 객체를 사용하여 요소들을 개발한다면, 매우 장황한 코드를 작성하게 됩니다.

```javascript
// js 만을 사용한 Component 개발 예시

function renderHeader() {
  const $h1 = document.createElement("h1");
  $h1.innerHTML = "안녕하세요. 헤더 컴포넌트 입니다.";

  const $header = document.createElement("header");
  $header.append($h1);

  return $header;
}
```

<br />

이러한 작성법을 좀 더 쉽게 만들 수 있는 방법으로 ``JSX (Javascript XML)`` 을 사용하는 것입니다.

``JSX`` 파일은 ``.jsx`` 확장자를 가지며, ``Babel`` 에서 ``transpile`` 해줍니다.

만약, ``.js`` 파일 내부에서도 ``JSX`` 문법을 사용할 수 있도록 해주는 ``Babel Plugin`` 을 설치되어 있다면 ``.js`` 파일에서도 ``JSX`` 문법을 사용할 수 있습니다.

    * Babel Plugin: ``@babel/plugin-transform-react-jsx``

```javascript
// .js 에서 JSX 문법 사용 예시

function renderHeader() {
  const title = "안녕하세요. 헤더 컴포넌트 입니다.";

  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
```