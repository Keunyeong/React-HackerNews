# React Mini Project

## Title

> 해커뉴스 페이지에서 제공하는 api를 활용하여 리딩 페이지 만들기.

[해커뉴스](https://news.ycombinator.)

- svelte로 만든 예시

: ex) [스벨트로 만든 해커뉴스 리딩 페이지](https://hn.svelte.dev/top/1)

## UI/UX

- UI/UX 팀과의 협업.

- 디자인 시안을 보고 디자이너의 의도를 듣고 필요한 부분들 추가하고 불필요한 부분을 제거하기 위한 회의.

- 구현 가능한 부분과 불가능한 부분을 서로 질문하고 불가능한 부분을 대체하기위한 아이디어 회의.

## 작업 조건

- 개인 작업.(Front-End)

- Code sandbox 를 사용하여 작업.

- github 에 업로드.

### 최소 기능 요구사항

1. 각 주제와 페이지에 맞는 글 목록을 조회할 수 있다.
   유저가 선택한 주제에 맞춰 알맞은 페이지의 글 목록을 조회해서 보여줍니다.

2. 선택한 글의 내용과 코멘트 목록을 볼 수 있다.
   조회한 글 목록에서 글을 클릭하면 연결된 링크를 새로운 탭으로 열람해야 합니다.
   또한 코멘트 개수를 클릭하면 글에 연결된 코멘트 목록을 볼 수 있습니다.

3. 글을 작성한 유저의 정보를 볼 수 있다.
   조회한 글 목록에서 유저 이름을 클릭하면 유저의 정보를 볼 수 있습니다.

### 기술적 요구사항

1. 프로그래밍 언어 : JavaScript 필수 사용
   > => JavaScript 사용
2. UI 라이브러리 : React 필수 사용
   > => React 사용
3. 스타일링 : 별도의 제약은 없으며 필요시 원하는 도구를 선택 (CSS, CSS Modules, CSS in JS 등)
   > => CSS in JS 선택
4. 상태 관리 라이브러리 : 별도의 제약은 없으며 필요시 원하는 도구를 선택
   > => @reduxjs/toolkit 사용
5. 빌드 도구 : Create React App 또는 Next.js 2가지 중 1가지 선택
   > => CRA 선택
6. 라우트 : Next.js를 선택하지 않았다면 React Router 사용, 선택했다면 Next.js의 라우트 활용
   > => React Router 사용
7. 배포 (선택사항) : CodeSandbox에 있는 코드를 GitHub으로 export해서 Vercel 활용을 권장
   GitHub 계정으로 로그인 후 CodeSandbox에 있는 코드를 GitHub 저장소로 연동 가능
   > => 배포

## 작업 순서

### 기능 요구사항 이해하기

#### ☝🏽 Point

1. News 에 Top, New 로 정렬을 변경하며 확인할 수 있도록 함.

2. 목록을 구성하는 옵션을 두가지로 함.( 구성이 다르게 )

3. 목록 옵션 중 목록을 스와이프 하면 정보를 보여주거나 링크 이동이 가능하게 함.

### UI 요구사항 정리하기

- UI/UX 팀과의 회의를 통해 완료!

### API 문서 이해하기

- API 문서 이해 완료!

### 활용할 기술 선택하기

- `react-redux`
- `@reduxjs/toolkit`
- `React-Router`
- `styled-component`

### 프로젝트 초기 설정하기

- 깃헙 레포지터리 생성
- 구성 완료.

### 컴포넌트 구조 설계하기

![](https://images.velog.io/images/leedocs/post/4e39fa5f-6ae1-4212-92e1-c8299895383e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-01-27%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.40.33.png)

### 상태 설계하기

### URL 구조 설계하기

### 유저 모달 
![ezgif com-gif-maker](https://user-images.githubusercontent.com/79135142/153715857-eff82ae7-e6cb-4ec2-8dc6-bb074edcbf08.gif)

