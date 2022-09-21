# Server

## 00. 라이브러리

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



## 01. package.json 의 scripts 설정

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



## 02. Database 관련 유틸 라이브러리

* `bcryptjs`: 비밀번호를 암호화 해서 Database 에 저장할 수 있게 됩니다.
* `class-validator`: `Client` 의 요청으로 받는 `JSON` 의 `Property` 가 유효한지 검사할 수 있습니다.
* `class-transformer`: `Class 객체` => `Plain 객체` 또는 반대로 변환해 줍니다.
    * `class` 내부의 `property` 에 `Annotation 형식` 으로 사용할 수 있습니다.
    * `@Expose`: `getter` 를 `Plain Object` 의 `property` 로 변환해 줍니다.
    * `@Exclude`: 변환한 `Plain Object` 의 `Property` 에서 제외시켜 줍니다.



<br /><hr /><br />



## 03. CORS 설정

`Server` 와 `Client` 가 다른 URL 을 갖는다면, `CORS` 설정을 해주어야 합니다.

이를 위해, `cors` 라이브러리를 사용합니다.

```bash
npm i cors
```



<br /><hr /><br />



## 04. 로그인 처리 시, `credential` 설정

로그인은 사용자의 인증 방법 입니다.

사용자가 누구인지 알아야, 해당 사용자 개인의 서비스를 제공해 줄 수 있습니다.

즉, 로그인은 사용자의 비공개 정보가 필요한 서비스에 필수 과정 입니다.


<br /><br />


인증이 필요한 서비스는 `Server` 입장에서, `누가 요청했는가?` 에 대한 정보를 받아야 한다는 것입니다.

이러한 인증 정보는 `Request Header` 의 `Authorization` 속성에 넘겨주는 `Token` 값이 됩니다.


<br /><br />


문제는 브라우저의 기본 설정인 `SOP (Same Origin Policy)` 에서는 `origin` 이 다르면, `Request Header` 에 아무런 `Cookie` 도 넘겨주지 않게 되는데, 이 `Cookie` 에는 인증을 위한 `Authorization` 도 포함되어 있습니다.

`origin` 이 달라도 `Request Header` 에 `Cookie` 를 넘겨주기 위해서는 `Server` 와 `Client` 에 `credentials` 설정을 해 주어야 합니다.


<br /><br />


설정은 다음과 같습니다.

```javascript
// Server (Back-End)
// ./src/server.js (서버 진입점 파일)

import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true, // 이 설정이 필요 합니다.
}));
```

<br />

```javascript
// Client (Front-End)
// ./src/api/auth.js

import axios from "axios";

export const login = async ({
  username,
  password,
}) => {
  try {
    const response = await axios.post("/auth/login", {
      username,
      password,
    }, {
      withCredentials: true, // 이 설정이 필요합니다.
    });

    // ... 생략 ...
  } catch (error) {
    // ... 생략 ...
  }
};
```


<br /><br />


`Server` 와 `Client` 가 서로 다른 도메인일 때, `credentials` 를 설정해야 하는 이유는 다음과 같습니다.

* `Client` 의 `Request 인증정보 (Authorization)` 는 `Header` 에 `Cookie` 로 전달합니다.
* `Request Origin` 이 다르기 때문에, `Request Header` 는 기본적으로 `Cookie` 를 담지 않습니다.
    * 브라우저는 `SOP (Same Origin Policy)` 를 기본 정책으로 사용하기 때문 입니다.
* `CORS (Cross origin Resource Sharing)` 에 대한 `origin` 을 설정해 주어도, `Request Header` 에 `Cookie` 는 전달되지 않습니다.
* `Request Header` 에 `Cookie` 를 담기 위해서는 `credentials` 설정을 해 주어야 합니다.


<br /><br />


만약 `Server` 의 `CORS` 설정에서 `origin: "*"` 로 설정했다면, 다르게 표현하면 `origin` 이 달라도 모든 `Request` 허용 `(와일드카드)` 로 설정했다면, `credentials` 설정은 `false` 로 해야 정상 동작 됩니다.


<br /><br />


정리하면 다음과 같습니다.

* 사용자의 비공개 정보를 사용하는 서비스는 `인증` 이 필요
* `인증` 을 위해서는 `Request Header Authorization` 에 `Token` 을 함께 보내야 함
* `Request Header` 는 `origin` 이 다르면, 아무런 `Cookie` 도 담지 않도록 기본설정 되어 있음
* `credentials` 설정을 해주면, `origin` 이 달라도 `Request Header` 에 `Cookie` 를 담게됨
* `Server` 는 `Request Header Authorization` 을 통해서, `Client (요청자)` 가 누구인지 알게됨



<br /><hr /><br />



## 05. 로그인 처리를 위한 라이브러리

* `jsonwebtoken`: `JWT` 생성 라이브러리 입니다.
* `dotenv`: `.env` 파일을 사용하기 위한 라이브러리 입니다.
    * `React` 나 `Vue` 에는 내부에 포함되어 있었습니다.
* `cookie`: `Cookie` 처리를 위한 라이브러리 입니다.
* `cookie-parser`: `Request` 객체의 `cookies` 속성을 `object` 로 변환해 줍니다.


<br /><br />


`Typescript` 를 사용한다면, `devDependencies` 에 `@types` 라이브러리도 추가해 줍니다.

* `@types/jsonwebtoken`
* `@types/cookie`
* `@types/cookie-parser`



<br /><hr /><br />



## 06. `dotenv` 설정

`Server` 프로젝트의 `root` 에 `.env` 파일을 만들어서 환경변수를 사용하고자 합니다.

이를 위해 `dotenv` 라이브러리를 사용하며, 설치는 다음과 같습니다.

```bash
npm i dotenv
```


<br /><br />


`dotenv` 라이브러리 설정은 `Server` 프로젝트의 `진입점 파일 (index.ts 또는 server.ts)` 에서 합니다.

```typescript
// server.ts

import express from "express";
import dotenv from "dotenv";

const app = express();

// dotenv 설정 입니다.
dotenv.config();
```


<br /><br />


위 설정을 하였다면, 프로젝트 `root 경로` 에 `.env` 파일을 작성하고, 프로젝트 전역에서 사용할 수 있게 됩니다.


```bash
# .env

BASE_URL=http://localhost:3000
```

<br /><br />


```typescript
// ./src/something.ts

const BASE_URL = process.env.BASE_URL;
console.log(BASE_URL); // http://localhost:3000
```



<br /><hr /><br />



## 07.