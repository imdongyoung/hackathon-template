---
description: 아이디어로 specs/common.md와 역할별 spec 작성
argument-hint: <아이디어>
---

아이디어: $ARGUMENTS

이 아이디어로 해커톤 spec을 작성한다.

- `specs/common.template.md` 형식으로 `specs/common.md`를, `specs/role.template.md` 형식으로 `specs/role-a.md` ~ `specs/role-d.md`를 만든다.
- 역할: A 기반·통합 / B 상태·로직(API, DB, AI) / C 핵심 화면 / D 주변 화면→제출물. 공용 파일(`types/`, `lib/config.ts`, `app/layout.tsx`, `app/globals.css`, `package.json`)은 A만 수정한다.
- **코드는 작성하지 않는다.** spec 문서만 만든다. (계약 타입·시그니처는 문서 안 코드 블록으로만)
- 모호한 점은 질문하지 말고 합리적으로 정한 뒤 `common.md` 맨 위 "가정 목록"에 적는다.
- 범위는 4명이 4시간(14:10 구현 시작 → 16:15 기능 동결) 안에 끝낼 수 있게 줄인다. 넘치는 것은 "시간 남으면"으로 보낸다.
- 계약(types)과 API 명세는 필드 이름·타입·단위(원, 초, %, 0~1 등)까지 정확히 적어 두 역할이 다르게 해석할 여지를 없앤다.
- 각 역할 파일의 "수정 가능" 범위는 서로 겹치지 않게 한다.
- 실패하기 쉬운 부분(AI 응답 형식, 외부 API 오류, 빈 데이터 등)을 짚고, 실패 시 기본 응답을 명시한다.
- 구현 순서의 단계마다 ✅ 확인 방법과 "15분 막히면 대안"을 적는다. 15:00에 첫 전체 연결이 되도록 초기 단계는 목업 데이터로 연결한다.

끝나면 만든 파일과 가정 목록을 짧게 정리한다.
