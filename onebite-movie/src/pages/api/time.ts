// next-api type 임포트
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 현재 시간 보관
  const date = new Date();
  // 응답값으로 시간 json 값으로 저장
  res.json({ time: date.toLocaleDateString() });
}
