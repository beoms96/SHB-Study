# React 관련 스터디

## 1. Create-React-App 관련

CRA 버전이 5.0.1 로 올라감에 따라 전역 설치 불가
디렉토리별로 설정해줘야함. 물론 운영환경에서는 이런 식으로 설치는 안함.

## 2. CRA 후 지울 거

public/index.html 속 apple-touch-icon -> PWA 용
public/manifest.json
public/logo
public/robots.txt
src/serviceWorker.js
src/setupTests.js
src/App.test.js
src/logo.svg
src/reportWebVitals.js

App.js -> App.jsx 로 변경
