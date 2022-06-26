# useState 구현하기

* ``React`` 의 ``useState`` 는 어떻게 ``state`` 를 유지할 수 있는지 이해하기 위한 정리 입니다.



<br /><hr /><br />



# useState() 의 반환값

* 반환값: ``[state, setState]``
* ``state``: 현재 상태값 - ``setState()`` 로 값을 변경하였을 때, ``state`` 도 변경된 값이 되도록 해야 합니다.
  * ``state`` 를 ``useState()`` 내부에서 관리하게 되면, ``state`` 값을 유지할 수 없계 됩니다.
  * 그러므로 ``useState()`` 외부 ``scope`` 에서 ``state`` 를 관리합니다.
  * ``useState()`` 로 만든 모든 ``state`` 는 외부에 위치한 ``state`` 에서 ``Array`` 형식으로 관리합니다.
  * ``useState()`` 를 호출한 순서가 ``state`` 키값이 됩니다.
  * ``setState()`` 를 호출하면, ``newState`` 를 적용한 후, ``render()`` 함수를 호출하여 ``re-rendering`` 합니다.