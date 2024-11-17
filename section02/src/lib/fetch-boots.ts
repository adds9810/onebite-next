import { BookData } from "@/types";

// Promise<BookData[]> 비동기래 책 데이터 반환
export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = `https://onebite-books-server-iota-two.vercel.app/book`;
  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
