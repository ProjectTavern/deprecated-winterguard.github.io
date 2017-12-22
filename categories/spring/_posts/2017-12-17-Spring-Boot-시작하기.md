---
excerpt: 스프링 부트로 초간단 프로젝트 생성하기! 저도 한번 해봅니다.
---

# 스프링 부트(작업 중 10%)

스프링과 메이븐으로 하는 것과 스프링과 그래들로 하는 것에 대한 비교가 많이 있어, 그래들로 스프링 작업을 해보기로 했습니다.

열심히 삽을 푸는 중. 영차영차.

스프링 부트는 간단하게 웹 어플리케이션 작업을 할 수 있는 환경을 제공해줍니다.
세세하게 알아야 할 것들을 많이 쳐낸 느낌입니다.
쳐냈다기보다는 미리 다 포함시켰다고 보는게 맞겠습니다.
사용자가 할일들을 많이 쳐낸 것 같습니다.
일례로 따로 톰캣과 같은 서버 설정을 하지 않아도 실행해 볼 수 있습니다.

## 시작하기

## IDE 설치하기

잘 모르는 초보(저도 초보지만 더 초보가 있을 수도 있으니까!~~없다~~)의 경우 아래 글을 먼저 읽고, 설치링크를 따라가는 것을 추천합니다.

[이클립스 설치](http://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/oxygen1a)<br>
[STS 설치](https://spring.io/tools/sts/all)<br>

IDE는 이클립스로 할 것입니다.
혹은 STS를 사용해도 됩니다.
둘 중 하나를 선택해서 설치하시면 됩니다.
특히 이클립스를 설치할 경우 위는 Oxygen 버전인데 더 새로운 버전이 있다면 그것으로 설치하시면 될 것 같습니다.
혹시나 자바 설치가 안되어 있는 경우까지라면 자바 설치는 나중에 작성하기로 하고.. 검색을 통해 확인바랍니다.

STS는 기본 베이스는 이클립스이고, STS가 미리 설치되어 있는 버전입니다.
이클립스를 따로 받아 활용할 경우 Eclipse Market을 통해서 STS 플러그인을 설치해야 합니다.

~~조만간 작성 예정 영차영차~~

## 이클립스로 설치하기


## Spring Starter Project

이클립스 프로젝트 익스프롤러에서부터 마우스 우클릭으로

[New] => [Spring Starter Project]
(추후 이미지 첨부)

를 할 경우 기본적인 스프링 시작 프로젝트 구조가 형성됩니다.

## @SpringBootApplication 애노테이션

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



참조:

[Spring Boot Reference Guide](https://docs.spring.io/spring-boot/docs/current/reference/html/)<br>
[Yong's Blog](http://yonguri.tistory.com/12?category=359079)<br>
[동동이 블로그](http://blog.naver.com/PostView.nhn?blogId=shindonga89&logNo=220263793482)<br>
