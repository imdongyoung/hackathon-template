---
description: 제출 전 점검 목록 출력
argument-hint: [배포 URL]
---

제출 전 점검을 하고 결과를 ✅/❌ 목록으로 출력한다. 배포 URL: $ARGUMENTS (없으면 로컬 기준)

1. `npm run lint` 통과
2. `npm run build` 통과
3. `/api/health`: `env`의 모든 값이 `true`인지, `message`가 기대한 `TEST_MESSAGE`인지 (URL이 있으면 배포 환경에서 호출)
4. AI 호출 실패 시 기본 응답: AI를 호출하는 코드마다 try/catch와 기본 응답이 있는지, 키가 없거나 응답 형식이 틀려도 화면이 깨지지 않는지
5. 로그인 없이 접근 가능: 심사위원이 시연 시나리오의 모든 화면을 로그인 없이 열 수 있는지

❌ 항목은 원인과 고칠 방법을 한 줄씩 적는다. 파일은 고치지 않는다.
