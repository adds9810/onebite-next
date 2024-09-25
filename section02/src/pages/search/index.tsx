import books from "@/mock/book.json";
import BookItem from "../component/book-item";
import { ReactNode } from "react";
import SearchableLayout from "../component/searchable-layout";

export default function Page() {
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
