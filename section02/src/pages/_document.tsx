import { Html, Head, Main, NextScript } from "next/document";

// Document :  모든 페이지에 공통적으로 적용이 되어야 하는 이 Next.js 앱의 HTML 코드를 설정하는 컴퍼넌트
// 기존의 리액트 앱에 index.html과 거의 비슷한 역할
// 메타태그 설정, 폰트 호출, 캐릭터섹 설정, 구글 애널리틱스 같은 서드 파티 스크립트를 넣는다거나 등등의 페이지 전체에 다 적용되는 HTML 태그를 관리하기 위해 사용
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
