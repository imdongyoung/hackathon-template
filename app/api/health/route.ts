import "server-only";
import { connection } from "next/server";
import { ENV_KEYS, type EnvKey } from "@/lib/config";
import type { HealthResponse } from "@/types";

// 환경 변수 값은 절대 응답에 넣지 않는다. 등록 여부(true/false)만 반환.
// 예외: TEST_MESSAGE는 배포 확인용으로 값을 message에 담는다.
export async function GET() {
  await connection(); // 빌드 시 프리렌더 방지, 요청 시점의 env를 읽는다

  const env = Object.fromEntries(
    ENV_KEYS.map((key) => [key, Boolean(process.env[key]?.trim())]),
  ) as Record<EnvKey, boolean>;

  const body: HealthResponse = {
    status: "ok",
    env,
    message: process.env.TEST_MESSAGE ?? null,
  };

  return Response.json(body);
}
