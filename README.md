# 해커톤 템플릿

Next.js(App Router) + TypeScript + Tailwind 기반 해커톤용 템플릿입니다. 서비스 기능·화면은 포함하지 않습니다.

## 시작하기

```bash
git clone <저장소 URL>
cd <폴더명>
npm install
cp .env.example .env.local   # 값 채우기 (.env.local은 커밋되지 않음)
npm run dev
```

http://localhost:3000/api/health 에서 환경 변수 등록 여부를 확인할 수 있습니다.

## 브랜치 규칙

- `feature/*` → `develop` → `main` 순서로 PR을 통해서만 병합
- `main`, `develop`에 **직접 push 금지**
- PR을 올리면 CI(`build` job: `npm ci` → `npm run lint` → `npm run build`)가 실행됩니다. 통과해야 병합합니다.

## 환경 변수

| 이름 | 설명 |
| --- | --- |
| `SUPABASE_URL` | Supabase 프로젝트 URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase 서비스 롤 키 (서버 전용, 절대 클라이언트에 노출 금지) |
| `ANTHROPIC_API_KEY` | Claude API 키 (서버 전용) |
| `CLAUDE_MODEL` | 사용할 Claude 모델 ID |
| `TEST_MESSAGE` | 배포 확인용 문자열. `/api/health`의 `message`로 그대로 반환됨 |

`/api/health`는 값 없이 등록 여부(`true`/`false`)만 반환합니다. (`TEST_MESSAGE`만 예외)

## 역할

| 역할 | 담당 | 이름 |
| --- | --- | --- |
| A | 기반·통합 | |
| B | 상태·로직 (API, DB, AI) | |
| C | 핵심 화면 | |
| D | 주변 화면 → 제출물 | |

### 공용 파일 (A만 수정)

- `types/`
- `lib/config.ts`
- `app/layout.tsx`
- `app/globals.css`
- `package.json`

다른 역할이 공용 파일 수정이 필요하면 직접 고치지 말고 "통합 담당 요청 사항"으로 A에게 전달합니다.

## 당일 일정

| 시간 | 내용 |
| --- | --- |
| 13:30 | 킥오프 |
| 14:10 | 구현 시작 |
| 15:00 | 첫 전체 연결 |
| 16:15 | 기능 동결 |
| 16:40 | main merge |
| 17:15 | 제출 |
