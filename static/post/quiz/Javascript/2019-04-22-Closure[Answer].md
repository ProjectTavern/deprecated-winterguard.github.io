# (디버그)

## 커피 메뉴 출력 지연시키기

### 답안

> Closure의 속성을 잘 알고 있는지 확인할 수 있는 문제이다.  
 
1. 5초라면 5000 으로 기입해야 한다. (밀리세컨드 단위이기 때문에)

2. 클로져와 관련해서는 `var index` 대신에 `let index`를 활용한다.
3. 혹은 변수를 인자로 받아 setTimeout에 즉시 생성된 매개변수 값을 넘기는 것으로도 가능하다.

```js
var coffeeMenu = [
  'Espresso',
  'Americano', 
  'Iced Americano', 
  'Cafe Latte'
];
var menuLength = coffeeMenu.length;
for (var index = 0; index < menuLength; index++) {
  setTimeout(function(index) {
   return function() {
     console.log(coffeeMenu[index]);
   } 
  }(index), 5);
}
``` 

4. 함수의 속성 bind를 활용하는 것도 가능하다.
```js
var coffeeMenu = [
  'Espresso',
  'Americano', 
  'Iced Americano', 
  'Cafe Latte'
];
var menuLength = coffeeMenu.length;
for (var index = 0; index < menuLength; index++) {
  setTimeout(function(index) {
     console.log(coffeeMenu[index]);
  }.bind(null, index), 5);
}
``` 
