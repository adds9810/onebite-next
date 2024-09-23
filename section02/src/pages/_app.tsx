import "@/styles/globals.css";
import type { AppProps } from "next/app";

// App : 리액트 앱 컴포넌트(루트 컴포넌트)와 동일, 모든 페이지의 부모 역할을 함
// Component : 페이지 역할
// pageProps : Component한테 전달될 페이지의 Props들을 모두 객체로 보관한 것
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>header</header>
      <Component {...pageProps} />
    </>
  );
}
