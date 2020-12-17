# 소수 구하기

## 소수

1과 자기 자신으로만 나눠지는 2 이상의 정수

## 소수를 구하는 기본 방법

소수가 아닌 수를 걸러낸다.

```javascript
function getMinority(number) {
  const numbers = new Array(number);

  numbers[0] = 1;
  numbers[1] = 1;

  for (let i = 2; i < number; i++) {
    if (!numbers[i]) {
      for (let j = 2 * i; j <= number; j += i) {
        numbers[j] = 1;
      }
    }
  }
  console.log(numbers);
  const minorities = [];
  const numbersLength = numbers.length;
  
  for (let i = 2; i < number; i++) {
    if (!numbers[i]) {
      minorities.push(i);
    }
  }

  console.log(minorities);
}
```

단순하게 할 경우 숫자의 중복이 많이 발생하여 계산을 끝없이 해야하는 경우가 생길 수 있지만, 이렇게 배수들을 미리 제거하면서 할 경우 이중 반복문이라고 하더라도 훨씬 빠르게 계산할 수 있다. 소수에서 이렇게 배수들을 미리 제거하면서 하는 방법을 `에라토스체네스의 체`로 걸러낸다고 한다.
