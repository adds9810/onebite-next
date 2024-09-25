import { ReactNode } from "react";
import Link from "next/link";
import style from "./global-layout.module.css";

// 내부 프로퍼트 타입은 ReactNode타입을 children 프로퍼티로 받음
export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>📚 ONEBITE BOOKS</Link>
      </header>
      <main>{/* <Component {...pageProps} /> */ children}</main>
      <footer className={style.footer}>제작 @adds</footer>
    </div>
  );
}
