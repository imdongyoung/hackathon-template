// 공용 계약(types). 변경 시 PR 템플릿의 "계약 변경" 항목에 체크한다. (A만 수정)

export type HealthResponse = {
  status: "ok";
  env: Record<string, boolean>;
  message: string | null;
};
