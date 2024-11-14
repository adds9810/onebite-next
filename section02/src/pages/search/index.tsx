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
import Head from "next/head";

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
      <Head>
        <title>한입북스 - 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스 - 검색결과" />
        <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요"
        />
      </Head>
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
