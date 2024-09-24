import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

// App : 리액트 앱 컴포넌트(루트 컴포넌트)와 동일, 모든 페이지의 부모 역할을 함
// Component : 페이지 역할
// pageProps : Component한테 전달될 페이지의 Props들을 모두 객체로 보관한 것
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onclickButton = () => {
    router.push("/test");
    // router 주로사용 메서드
    // replace
    // back 뒤로가기
  };
  useEffect(() => {
    router.prefetch("/test"); // 프리패칭하고자 하는 경로 입력
  }, []); // 마운트 되었을 때 한번만 실행할 예정이므로 빈 객체를 둠
  return (
    <>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"} prefetch={false}>
          search
        </Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
        <div>
          <button onClick={onclickButton}>/test 페이지로 이동</button>
        </div>
      </header>

      <Component {...pageProps} />
    </>
  );
}
