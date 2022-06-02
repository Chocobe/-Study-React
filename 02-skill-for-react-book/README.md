# 리액트를 다루는 기술

``React`` 에 대해 좀 더 자세히 알기위한 스터디 입니다.



<br /><hr /><br />



# 01. React Lifecycle

``React`` 의 ``Lifecycle`` 은 총 9가지가 있습니다.

1. ``constructor()``
    * ``Class Component`` 의 ``생성자`` 입니다.
    * 컴포넌트를 처음 생성할 때 호출합니다.
    * 호출 생명주기: ``마운트 생명주기``

2. ``getDerivedStateFromProps(nextProps, prevState)``
    * 부모 컴포넌트로 부터 받은 ``Props`` 를 자신의 ``State`` 에 넣습니다.
    * 인수가 헷갈릴 수 있습니다.
      * ``nextProps``: 새로 받는 Props
      * ``prevState``: 이전 State
    * 호출 생명주기: ``마운트 생명주기``, ``업데이트 생명주기``

3. ``render()``
    * 컴포넌트를 화면에 그립니다.
    * 호출 생명주기: ``마운트 생명주기``, ``업데이트 생명주기``, ``forceUpdate()`` 호출 시

4. ``componentDidMount()``
    * 컴포넌트가 ``마운트 완료`` 된 시점에 호출합니다.
    * 호출 생명주기: ``마운트 생명주기``

5. ``shouldComponentUpdate(nextProps, nextState)``
    * ``boolean`` 을 반환하는 메서드로, ``false`` 를 반환하는 경우에는 ``업데이트 종료`` 가 됩니다.
    * ``true`` 반환: 업데이트 실행
    * ``false`` 반환: 업데이트 종료
    * 호출 생명주기: ``업데이트 생명주기``

6. ``getSnapshotBeforeUpdate(prevProps, prevState, snapshot)``
    * ``render()`` 메서드의 결과물이 브라우저에 실제로 반영되기 진적에 호출합니다.
    * 호출 생명주기: ``업데이트 생명주기``

7. ``componentDidUpdate()``
    * 컴포넌트의 업데이트가 완료된 직 후 호출합니다.
    * 호출 생명주기: ``업데이트 생명주기``

8. ``componentWillUnmount()``
    * 컴포넌트를 ``DOM`` 에서 제거하기 직전에 호출합니다.
    * 호출 생명주기: ``언마운트 생명주기``

9. ``componentDidCatch(error, info)``
    * 자식 컴포넌트의 ``렌더링 도중`` 에러가 발생하면 호출됩니다.
    * 자신의 ``렌더링 도중`` 발생하는 에러에는 호출되지 않습니다.



<br /><hr /><br />



# 01-01. Mount Lifecycle

1. ``constructor()``
2. ``getDerivedStateFromProps()``
3. ``render()``
4. ``componentDidMount()``



<br /><hr /><br />



# 01-02. Update Lifecycle

1. ``getDerivedStateFromProps()``
2. ``shouldComponentUpdate(nextProps, nextState)``
3. ``render()``
  * ``forceUpdate()`` 호출 시, 시작점
4. ``getSnapshotBeforeUpdate(prevProps, prevState, snapshot)``
5. ``componentDidUpdate()``



<br /><hr /><br />



# 01-03. Unmount Lifecycle

1. ``componentWillUnmount()``



<br /><hr /><br />



# 01-04. 자식컴포넌트의 ``render()`` 에서 에러 발생 시

1. ``componentDidCatch(error, info)``



<br /><hr /><br />



