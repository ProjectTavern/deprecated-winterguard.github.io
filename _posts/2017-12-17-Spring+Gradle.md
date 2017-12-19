---
excerpt: 스프링 + 그래들
---

## 스프링 + 그래들

스프링과 메이븐으로 하는 것과 스프링과 그래들로 하는 것에 대한 비교가 많이 있어, 그래들로 스프링 작업을 해보기로 결정했다.

열심히 삽을 푸는 중. 영차영차.

### 스프링부트

#### @SpringBootApplication
~~~
@SpringBootApplication
~~~
위의 애노테이션은
~~~
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan
~~~
위 3개의 애노테이션을 모두 포함하고 있는 애노테이션이다.
참조: [Yong's Blog](http://yonguri.tistory.com/12?category=359079)