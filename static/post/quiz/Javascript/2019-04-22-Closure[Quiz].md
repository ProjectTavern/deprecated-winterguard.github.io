# (디버그) 

## 커피 메뉴 출력 지연시키기

### 문제

> 다음 함수는 커피 메뉴들에 대한 정보를 5초를 지연시킨 후에 출력하고자 하는 함수이다.  
> 다음 함수의 출력결과에 대한 결과와 그에 대한 문제점 및 해결 방법을 설명해 보세요.  

```js
var coffeeMenu = [
  'Espresso',
  'Americano', 
  'Iced Americano', 
  'Cafe Latte'
];
var menuLength = coffeeMenu.length;
for (var index = 0; index < menuLength; index++) {
  setTimeout(function() {
    console.log(coffeeMenu[index]); 
  }, 5);
}
```
