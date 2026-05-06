# 웹사이트 분석 로그: ntk01.com (뉴토끼)

## 1. 대상 정보
- **URL**: `https://ntk01.com/novel/35255`
- **성격**: 웹소설/웹툰 공유 플랫폼
- **분석 일자**: 2026-05-04

## 2. 기술 스택 및 특징
- **프레임워크**: Next.js (App Router)
- **렌더링 방식**: SSR (Server-Side Rendering) + Hydration
- **데이터 전달**: `self.__next_f.push` 패턴을 통해 HTML 내 스크립트 형태로 JSON 데이터 주입
- **보안/차단**: Cloudflare 사용. 표준 HTTP 봇 요청 시 `403 Forbidden` 반환 (User-Agent 및 챌린지 검사)

## 3. 데이터 구조 분석
- **주요 데이터**: 작품 ID, 작가, 에피소드 리스트, 댓글, 평점 등
- **추출 포인트**: HTML 소스 내 `self.__next_f.push` 호출 부분에 직렬화된 데이터 포함됨
- **특이사항**: `/api/` 엔드포인트가 존재하나, 초기 렌더링 데이터는 HTML에 내장되어 내려옴

## 4. 데이터 수집 전략 (향후 진행 방향)
- **우회 방법**:
    - 단순 `WebFetch` 불가 $\rightarrow$ 브라우저 세션 덤프 또는 헤더 위조 필요
    - HTML 내 `__next_f` 스크립트 태그 추출 후 정규식/JSON 파싱으로 데이터 확보
- **API 확인**:
    - 개발자 도구 Network 탭 $\rightarrow$ `Fetch/XHR` 필터링 $\rightarrow$ `/api/` 경로 요청 분석
    - 요청 헤더(Cookie, User-Agent) 및 응답 JSON 구조 매핑

## 5. 세션 복구 가이드
- **상태**: 사이트 구조 및 데이터 전달 방식 파악 완료.
- **다음 단계**: 실제 데이터 추출을 위한 파서 구현 또는 특정 API 엔드포인트의 요청/응답 규격 정의.
- **주의**: Cloudflare 차단으로 인해 단순 크롤러 사용 불가. 브라우저 환경 모사 필수.
