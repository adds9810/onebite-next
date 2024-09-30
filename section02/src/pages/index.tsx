// CSS Module
import SearchableLayout from "./component/searchable-layout";
import style from "./index.module.css";
import { ReactNode, useEffect } from "react";
// import books from "@/mock/book.json";
import BookItem from "./component/book-item";
import { InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-boots";
import fetchRandomBooks from "@/lib/fecth-random.books";

// getServerSideProps 약속된 메서드를 추가하면 해당 패이지는 ssr로 실행됨
// 딱 한번만 서버측에서 실행됨
export const getServerSideProps = async () => {
  // 컴포넌트 보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 함수
  // 데이터 한번에 받기
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);
  return {
    props: { allBooks, recoBooks },
  };
};

// any 치트키 타입
// InferGetServerSidePropsType getServerSideProps의 타입을 추론해줌
export default function Home({
  allBooks,
  recoBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(allBooks);
  useEffect(() => {
    console.log(window);
  });
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
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
