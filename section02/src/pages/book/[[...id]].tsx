import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  // id 라우터 안의 쿼리 id에 저장되기 때문에 가져옴
  // 복수의 id를 받을 경우 배열로 받음
  const { id } = router.query;
  return <h1>book {id}</h1>;
}
// 기본(?) - [id].tsx
// catch all segment(구간) - [...id].tsx : id가 여러개일 경우, 전부다 대응하게 하려면 ...id로 파일명을 수정해야 함
// optional catch all segment - [[...id]].tsx : id가 없을 경우도 대응하고 싶을 경우 []를 한번 더 감싼다
