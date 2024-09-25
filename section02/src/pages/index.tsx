// CSS Module
import SearchableLayout from "./component/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import books from "@/mock/book.json";
import BookItem from "./component/book-item";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

// Home 페이지로 진입하면 검색화면을 감싼 화면이 출력되도록 실행
// page[에 페이지를 받아와서 검색 레이아웃이 적용된 화면으로 리턴해줌
// ReactNode 타입(리액트 컴포넌트) 추가
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
