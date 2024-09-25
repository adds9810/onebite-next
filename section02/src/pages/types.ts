// interface 객체 타입을 정의하기 위한 타입스크립트의 문법
// interface로 빈 객체 타입을 BookData라는 이름의 타입으로 만들겠다 라고 정의
export interface BookData {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  author: string;
  publisher: string;
  coverImgUrl: string;
}
