import GlobalLayout from "./component/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

// getLayout 이라는 메서드는 작업자가 만든 메서드로 타입이 존재할거라고 안내 해줘야함
// NextPage next에서 제공하는 페이지 기본 컴포넌트 타입
type NextPageWithLayout = NextPage & {
  // 옵셔널 ? 추가해서 타입 선언
  // ReactNode 타입에러 방지를 위한 타임 추가
  getLayout?: (page: ReactNode) => ReactNode;
};

// App : 리액트 앱 컴포넌트(루트 컴포넌트)와 동일, 모든 페이지의 부모 역할을 함
// Component : 페이지 역할
// pageProps : Component한테 전달될 페이지의 Props들을 모두 객체로 보관한 것
export default function App({
  Component,
  pageProps,
}: AppProps & {
  // Component 타입 확장 - Component 타입은 getLayout을 포함한 NextPage임을 선언
  Component: NextPageWithLayout;
}) {
  // getLayout 함수가 있으면 실행, 없으면 페이지만 실행
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
