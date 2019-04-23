# (디버그)

## 실행할 수 없는 스크립트

### 문제

> 다음 코드에서 발견할 수 있는 치명적인 문제와 그에 대한 해결 방법을 제시해주세요.  
> 단 각 파일의 경로는 정상적으로 들어가 있다고 가정합니다.

index.html
```html
<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <script src="./app.js"></script>
</head>
<body>
<div id="app"></div>
</body>
```

app.js
```js
var app = document.querySelector('#app');
app.innerHTML = '앱을 로드합니다.';
```

