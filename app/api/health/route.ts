import "server-only";
import { connection } from "next/server";
import type { HealthResponse } from "@/types";

// 등록 여부를 점검할 환경 변수 이름
const ENV_KEYS = [
  "SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
  "ANTHROPIC_API_KEY",
  "CLAUDE_MODEL",
  "TEST_MESSAGE",
];

// 환경 변수 값은 절대 응답에 넣지 않는다. 등록 여부(true/false)만 반환.
// 예외: TEST_MESSAGE는 배포 확인용으로 값을 message에 담는다.
export async function GET() {
  await connection(); // 빌드 시 프리렌더 방지, 요청 시점의 env를 읽는다

  const env = Object.fromEntries(
    ENV_KEYS.map((key) => [key, Boolean(process.env[key]?.trim())]),
  );

  const body: HealthResponse = {
    status: "ok",
    env,
    message: process.env.TEST_MESSAGE ?? null,
  };

  return Response.json(body);
}
