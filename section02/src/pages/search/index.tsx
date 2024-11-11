// import books from "@/mock/book.json";
import BookItem from "../component/book-item";
import { ReactNode, useEffect, useState } from "react";
import SearchableLayout from "../component/searchable-layout";
// import {
//   GetServerSidePropsContext,
//   GetStaticPropsContext,
//   InferGetServerSidePropsType,
// } from "next";
import fetchBooks from "@/lib/fetch-boots";
import { useRouter } from "next/router";
import { BookData } from "@/types";

// GetServerSidePropsContext context 내용을 쉽게 확인할 수 있음
// export const getStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   // 컴포넌트 보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 함수
//   // 데이터 한번에 받기
//   const q = context.query.q;
//   const books = await fetchBooks(q as string);
//   return {
//     props: { books },
//   };
// };

export default function Page() {
  //   books,
  // }: InferGetServerSidePropsType<typeof getStaticProps>) {

  const [books, setBooks] = useState<BookData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      // 검색 결과를 불러오는 로직
      fetchSearchResult();
    }
  }, [q]);
  return (
    <div>
      <div>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
