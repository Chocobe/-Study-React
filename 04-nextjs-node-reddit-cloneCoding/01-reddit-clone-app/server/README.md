# Server

## 라이브러리

* 프로덕션 라이브러리
  * `nodemon`: 서버 코드 변경 시, 자동으로 재시작 해줍니다.
  * `morgan`: 로그를 남기기 위한 `NodeJS` 미들웨어 라이브러리 입니다.
  * `exporess`: 서버 개발을 위한 `NodeJS` 프레임워크 입니다.

* 개발용 라이브러리
  * `ts-node`: `Typescript Compiler` 를 통하지 않고, `Typescript` 를 직접 실행시켜 줍니다.
  * `typescript`: 
  * `@types/node`: `NodeJS` 의 `Type` 정의 라이브러리 입니다.
  * `@types/exporess`: `Express` 프레임워크의 `Type` 정의 라이브러리 입니다.
  * `@types/morgan`: `Morgan` 라이브러리의 `Type` 정의 라이브러리 입니다.



<br /><hr /><br />



## package.json 의 scripts 설정

`server` 를 실행하기 위해, `ts-node` 와 `nodemon` 을 사용하게 됩니다.

두 라이브러리를 연동하여, `development` 서버를 실행하려면, `package.json` 의 `scripts` 를 설정해야 합니다.

```json
// package.json
{
  // ...

  "scripts": {
    "start": "ts-node ./src/server.ts",
    "dev": "nodemon --exec ts-node ./src/server.ts"
  }

  // ...
}
```



<br /><hr /><br />



## Database 관련 유틸 라이브러리

* `bcryptjs`: 비밀번호를 암호화 해서 Database 에 저장할 수 있게 됩니다.
* `class-validator`: `Client` 의 요청으로 받는 `JSON` 의 `Property` 가 유효한지 검사할 수 있습니다.
* `class-transformer`: `Class 객체` => `Plain 객체` 또는 반대로 변환해 줍니다.



<br /><hr /><br />



## CORS 설정

`Server` 와 `Client` 가 다른 URL 을 갖는다면, `CORS` 설정을 해주어야 합니다.

이를 위해, `cors` 라이브러리를 사용합니다.

```bash
npm i cors
```