import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from "./searchable-layout.module.css";

// 내부 프로퍼트 타입은 ReactNode타입을 children 프로퍼티로 받음
export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  // 값을 넣을 곳
  const [search, setSearch] = useState("");

  // as string 타입 추론으로 인해 오류가 발생하므로 타입을 지정해 오류 해결
  const q = router.query.q as string;

  // 쿼리값이 있는지 확인해 쿼리값이 있으면 검색이 실행되도록
  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  // 잆력값을 실시간으로 저장하는 이벤트
  // React.ChangeEvent<HTMLInputElement> 리액트의 인풋에서 발생하는 change 이벤트임을 표시
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // 버튼 클릭시 검색 페이지로 이동 및 겜색 이벤트 실행
  const onSubmit = () => {
    // 값이 없거나 쿼리 값과 검색값이 동일하면 실행되지 않고 리턴되도록
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  // React.KeyboardEvent<HTMLInputElement> 리액트의 인풋에서 발생하는 Keyboard 이벤트임을 표시
  // 엔터 입력시 검색 실행
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          value={search}
          onKeyDown={onKeyDown}
          onChange={onChangeSearch}
          placeholder="검색어를 입력하세요 ..."
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
