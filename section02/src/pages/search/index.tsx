// import books from "@/mock/book.json";
import BookItem from "../component/book-item";
import { ReactNode } from "react";
import SearchableLayout from "../component/searchable-layout";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-boots";

// GetServerSidePropsContext context 내용을 쉽게 확인할 수 있음
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // 컴포넌트 보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 함수
  // 데이터 한번에 받기
  const q = context.query.q;
  const books = await fetchBooks(q as string);
  return {
    props: { books },
  };
};

export default function Page({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
