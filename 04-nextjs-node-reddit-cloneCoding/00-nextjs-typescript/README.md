# Nextjs - Typescript 동적 라우팅 작업 흐름

1. 프로젝트 생성
	yarn create next-app --typescript

2. ./pages/index.tsx 수정
	Home 컴포넌트
	프로젝트의 메인 페이지 구조 만들기

	3. 블로그 데이터로 사용할 Markdown 파일 만들기

	3. getStaticProps() 를 만들고, Markdown 데이터 가져오기
		Home 컴포넌트에 넘겨줄 데이터를 가져오고 (async), Props 로 넘겨주기

	4. <Link href=""> 를 사용하여, 라우트 이동 기능 만들기
		Props 로 받은 블로그 데이터를 사용하여, 이동할 href 지정하기

5. ./pages 경로에 블로그 데이터에 대한 동적 라우팅 컴포넌트 만들기
	./pages/posts/[id].tsx

	6. getStaticPaths() 를 사용하여, 블로그 페이지들의 id 값 가져오기
		여기서 반환하는 객체는 getStaticProps(props) 에서 props 로 받게 된다.

	7. getStaticProps(props) 에서 props 로 받은 id 를 사용하여, id 에 해당하는 블로그 상세 데이터를 가져온다.
		[id].tsx 에서 Props 로 받게 된다.
