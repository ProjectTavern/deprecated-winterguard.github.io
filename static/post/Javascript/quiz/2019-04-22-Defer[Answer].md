# (디버그)

## 실행할 수 없는 스크립트

## 답안

> index.html 에서 스크립트 로드 시점이 잘못 되었다.

다음과 같은 방법 등으로 해결이 가능하다.

1. 스크립트의 위치를 변경

```html
<!DOCTYPE html>
<head>
  <meta charset="utf-8">
</head>
<body>
<div id="app"></div>
<script src="./app.js"></script>
</body>
```

2. 스크립트에 defer 속성을 사용

```html
<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <script src="./app.js" defer></script>
</head>
<body>
<div id="app"></div>
</body>
```

- - -

tag: #javascript #debug
