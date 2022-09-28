# NextJS 와 styled-components 연동

`styled-components` 는 `CSS-inJS` 라이브러리 입니다.

`.js` 파일 내부에 `CSS` 를 작성할 수 있게 되며, `React` 에서 많이 사용한다고 합니다.

일반 `React` 프로젝트에서는 `styled-components` 를 설치만 하면 사용할 수 있지만, `NextJS` 에서는 `SSR (Server Side Rendering)` 특징을 갖기 때문에, 추가 설정이 필요 합니다.



<br />><hr /><br />



# 00. 설정 요소들

`NextJS` 프로젝트는 `SSR (Server Side Rendering)` 로 페이지를 렌더링 합니다.

`Server` 는 사용자가 요청한 `URL` 에 해당하는 `Page Component` 를 `Rendering` 한 후, `Client` 로 응답하게 되는데, `Rendering` 시점에서는 `styled-components` 로 작성된 코드는 읽지 못하는 상태 입니다.

그래서 `Server` 에서의 `Rendering` 시점에서도 `styled-components` 를 인식할 수 있도록 `Document` 자체에 `styled-components` 를 설정해 주어야 합니다.


<br /><br />


이러한 이유로, `NextJS` 프로젝트에 다음과 같은 설정을 합니다.
* `styled-components` 설치
* `next.config.js` 설정
* `/pages/_document.tsx` 커스터마이징
    * `SSR` 의 `Rendering` 에서도 `styled-components` 를 인식하기 위함
* `/pages/_app.tsx` 커스터마이징
    * `styled-components` 의 `Theme` 를 커스터마이징할 경우에 필요



<br /><hr /><br />



# 01. `styled-components` 설치

```bash
yarn add styled-components

# Typescript 사용 시, 필요합니다.
yarn add -D @types/styled-components
```



<br /><hr /><br />



# 02. `next.config.js` 설정

`styled-components` 를 사용하기 위해서는 `next.config.js` 에 `compiler` 를 등록해 주어야 합니다.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // styled-components 사용을 위해 추가한 설정
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
```

<br />

위 코드와 같이 `compiler` 속성의 `styledComponents: true` 를 추가해 줍니다.



<br /><hr /><br />



# 03. `/pages/_document.tsx` 커스터마이징

`NextJS` 버전에 따라, `_document.tsx` 가 생성되지 않기도 합니다.

만약 `/pages/_document.tsx` 가 없다면, 파일을 생성한 후, 아래의 코드를 붙여넣기 합니다.

```javascript
import Document, { 
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="google" content="notranslate" />
          <meta charSet="utf-8" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

<br />

`static async getInitialProps(ctx: Document.Context)` 함수에 의해, `Server` 단에서 `Rendering` 하는 시점에서도 `styled-components` 를 인식할 수 있게 됩니다.

<br />

그리고 `render()` 함수는 웹 사이트의 `<head />` 와 `<body>` 를 작성합니다.



<br /><hr /><br />



# 04. `/pages/_app.tsx` 커스터마이징

`/pages/_app.tsx` 컴포넌트는 `NextJS` 프로젝트의 모든 페이지가 공통으로 가지는 `부모 컴포넌트` 입니다.

일반적으로는 프로젝트의 `공통 레이아웃` 을 만들 때 사용합니다.

만약, `styled-components` 의 `theme` 를 `사용` 또는 `커스터마이징` 하고자 한다면, 여기서 적용할 수 있습니다.

```typescript
import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'

// styled-components 의 theme 커스터마이징 객체
const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
```



<br /><hr /><br />



이상, `NextJS` 프로젝트에서 `styled-components` 를 사용하기 위한 설정 방법 입니다.