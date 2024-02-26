# 프론트엔드 프리온보딩 과정을 위한 사전과제

---

## 과제 요구사항

### 프로젝트 공통

- [x] create-react-app 혹은 vite으로 프로젝트를 생성
- [x] 폴더 구조
- [x] 프로젝트는 node version 20에서 실행할 수 있어야함
- [x] 함수형 컴포넌트를 사용

---

### todo list 만들기

- [x] input 창에 list1을 입력 후 Add 버튼을 누르면 input 창 하단에 list1 컴포넌트가 등장
- [x] 각 list의 delete 버튼을 누르면 해당 list 컴포넌트가 삭제
- [x] 가능하면 컴포넌트를 생성
- [x] 전역상태를 관리(가능한 Redux나 `Redux-toolkit`을 이용)

---

### 추가 설정

- [x] storybook(UI 컴포넌트 테스트)
- [x] jest(단위 테스트)
- [x] scss
- [ ] cypress(E2E 테스트)

### 과제 제출

- 제출 마감일: 3월 1일
- [x] 과제물은 main 브랜치
- [x] Settings -> Codespaces -> Configuration Select branch를 main 으로 하고 제출
- [x] 과제를 제출하는 방법은 본인이 작업한 github repository 주소를 issues에 올리기

## 프로젝트 설명

### Figma
- Figma 디자인을 기반으로 개발을 진행하였습니다. [Figma 바로가기](https://www.figma.com/file/9Diak1X1tEroAcVgh0P1GG/wanted-pre-onboarding-frontend-challenge-19?type=design&node-id=1%3A2&mode=design&t=hXf4SIV2RlKcDRtG-1)
- Figma Token을 정의하여 프로젝트 내 JSON 파일을 내려받아 SCSS 파일로 변환할 수 있도록 하였습니다.
```
npm run generate:token
```

### storybook
UI 테스트를 위해 각 컴포넌트를 storybook으로 개발하였습니다.
```
npm run storybook
```

### test
각 컴포넌트에 대해 단위 테스트를 진행하였습니다.
```
npm run test
```

### 프로젝트 구조

```
wanted-pre-onborading-frontend-challenge-19
├─ .storybook
│  ├─ main.ts
│  └─ preview.ts
├─ README.md
├─ index.html
├─ jest.config.ts
├─ jest.setup.ts
├─ package-lock.json
├─ package.json
├─ public
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  └─ icons
│  │     └─ check-circle-2.svg
│  ├─ components
│  │  ├─ List
│  │  │  ├─ List.module.scss
│  │  │  ├─ List.tsx
│  │  │  └─ index.ts
│  │  ├─ atoms
│  │  │  ├─ Button
│  │  │  │  ├─ Button.module.scss
│  │  │  │  ├─ Button.stories.tsx
│  │  │  │  ├─ Button.test.tsx
│  │  │  │  ├─ Button.tsx
│  │  │  │  ├─ Button.types.ts
│  │  │  │  └─ index.ts
│  │  │  └─ Input
│  │  │     ├─ Input.test.tsx
│  │  │     ├─ Input.tsx
│  │  │     ├─ index.ts
│  │  │     ├─ input.module.scss
│  │  │     ├─ input.stories.tsx
│  │  │     └─ input.types.ts
│  │  └─ molecules
│  │     └─ ListItem
│  │        ├─ ListItem.module.scss
│  │        ├─ ListItem.stories.tsx
│  │        ├─ ListItem.test.tsx
│  │        ├─ ListItem.tsx
│  │        ├─ ListItem.types.ts
│  │        └─ index.ts
│  ├─ index.tsx
│  ├─ store
│  │  ├─ slices
│  │  │  └─ todo
│  │  │     ├─ todo.types.ts
│  │  │     └─ todoSlice.tsx
│  │  └─ store.ts
│  ├─ styles
│  │  ├─ designTokens
│  │  │  ├─ convertToken.mjs
│  │  │  ├─ tokens.json
│  │  │  └─ tokens.scss
│  │  ├─ index.scss
│  │  └─ reset.scss
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```