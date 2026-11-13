// 공용 설정. 임계값·모델명·제한값 같은 숫자/상수는 여기에 모은다. (A만 수정)

/** /api/health 에서 등록 여부를 점검할 환경 변수 이름 */
export const ENV_KEYS = [
  "SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
  "ANTHROPIC_API_KEY",
  "CLAUDE_MODEL",
  "TEST_MESSAGE",
] as const;

export type EnvKey = (typeof ENV_KEYS)[number];
