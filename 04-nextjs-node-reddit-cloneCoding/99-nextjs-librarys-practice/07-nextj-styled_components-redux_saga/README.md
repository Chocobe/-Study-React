# 구현 순서

1. 프로젝트 생성
2. `tsconfig.json` 에 `alias` 설정
   * `HelloWorld.tsx` 컴포넌트 생성 및 `alias` 동작 확인
3. `styled-components` 설치
   * `HelloWorld.tsx` 에 `styled-components` 적용 및 동작 확인
   * `GlobalStyle.ts` 구현
   * `styled-components` 의 `styled.d.ts` 및 `theme.ts` 만들기
4. `SSR` 방식으로 `styled-components` 설정
   * `_document.tsx` 생성 및 `getInitialProps()` 재정의 하기
   * `_document.tsx` 에 `render()` 재정의 (안해도 되긴 함)
5. `layouts` 구현
   * `LayoutHeader.tsx` 구현
     * `<Link />` 로 `Home` 링크 추가
   * `LayoutMenu.tsx` 구현
     * `entities.ts` 만들기 - `type MenuItem`
     * `constant.ts` 만들기 - `const menuItems`
     * `onMounted()` 로 `globalWidth` 초기화 메서드 넘겨주기
   * `LayoutMenuItem.tsx` 만들기
6. `./presenters/NewsCategory/NewsCategoryPresenter.tsx` 페이지 컴포넌트 만들기 (`Presenter Component`)
7. `store.ts` 구현 및 설치
   * `./hooks/useAppSelector.ts` 만들기
   * `./hooks/useAppDispatch.ts` 만들기
8. `newsSlice.ts` 구현
9. `./network` 구성하기
   * `urlList.ts` 만들기
   * `restClient.ts` 만들기
   * `apiManager.ts` 만들기
10. `newsSaga.ts` 구현
11. `rootSaga.ts` 구현
   * `store.ts` 에 `sagaMiddleware` 설치
12.  `./pages/news/[category].tsx` 페이지 컴포넌트 만들기
   * `router.query` 를 사용하여, `newsSaga` 호출하기