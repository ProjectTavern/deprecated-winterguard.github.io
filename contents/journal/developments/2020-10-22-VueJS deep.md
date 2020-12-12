---
title: "[VueJS] deep selector"
---

# [VueJS] deep

Vue-Loader 에서는 deep selector 라는 강력한 기능을 제공하고 있다.

https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors

상위 컴포넌트에서 하위 컴포넌트의 css에 접근해서 사용할 수 있는 기능으로, 라이브러리를 사용했을 때 라이브러리 컴포넌트 CSS를 따로 사용하기 번거롭거나 해당 라이브러리 컴포넌트 CSS가 Scoped 상태이기를 원할 때 쓸 수 있는 기능이다.

이 기능은 기본적으로 `scoped` 상태에서만 활용할 수 있다.

먼저 간단하게 기본형을 확인해보자.

```vue
<template>
  <div class="parent">
    parent
    <div class="child">
      child
    </div>
  </div>
</template>
<style scoped>
.parent {
  color: orangered;
}

.parent .child {
  color: blueviolet;
}
</style>
```

`Vue`는 `scoped` 상태일 때에는 해당 엘리먼트에 `[data-v-난수]`(ex: `[data-v-2a183b29]`)의 형태로 범위를 지정하기 위한 어트리뷰트를 붙이게 된다.

그리고 CSS를 컴파일 할 때에는 확실한 Scoped의 처리를 위해서 항상 마지막 클래스에 붙인다. 위의 코드가 CSS로 컴파일 되면 다음과 같은 형태가 된다.

```vue
/* 편의상 html 이라고 가정한다. */
<template>
  <div data-v-2a183b29 class="parent">
    parent
    <div data-v-2a183b29 class="child">
      child
    </div>
  </div>
</template>

<style>
.parent[data-v-2a183b29] {
  color: orangered;
}

.parent .child[data-v-2a183b29] {
  color: blueviolet;
}
</style>
```

이렇게 함으로써 `Vue`에서는 컴포넌트 단위로 서로 영향을 주지 않는 `scoped` 처리를 할 수 있게 된다.

하지만 이렇게 하나의 컴포넌트 단위 안에 있을 때가 아니라 다른 컴포넌트에 있는 클래스에 영향을 주려면 어떻게 해야할까?

이 이야기에 앞서 상황에 대한 설정이 조금 필요하다. 우선 컴포넌트 단위의 개발론에 입각하여 봤을 때 상위 컴포넌트가 하위 컴포넌트의 CSS에 영향을 주는 일이 '좀처럼' 있어서는 안될 것이다.

컴포넌트의 개발은 당연히 독립적으로 이루어질 수록 좋으며, 느슨한 연결을 가질 수록 훌륭한 것은 사실이다.

따라서 이런 상황은 자기 자신의 독립적인 컴포넌트를 제작할 때 발생하는 것이 아니라 다른 라이브러리와 연결하여 사용할 때 발생하는 경우라고 봐야한다.

특히 그 라이브러리에서 충분한 `Style-Props`를 충분히 지원하지 않는 경우에 활용할 수 있다.

라이브러리를 직접 수정하는 것이 아니라 한번 더 감싸서 커스텀한 컴포넌트를 만들고, 자체적으로 CSS를 추가하고자 할 때 이런 `deep` 기능의 활용이 유용할 것으로 생각된다.

이런 점을 우선 감안하고 본론으로 넘어가도록 한다.

```vue
<template>
  <div class="parent">
    <LibraryComponent withClass="child" />
  </div>
</template>

<style scoped>
.parent {
  color: orangered;
}

.parent .child {
  color: blueviolet;
}
</style>
```

`<LibraryComponent />`에 `child` 클래스(혹은 특정 엘리먼트)가 있다고 가정했을 때 위의 css 로는 child 클래스를 가진 엘리먼트의 폰트 색상을 원하는 색상으로 변경할 수가 없다.

왜냐하면 `[data-v-난수]`는 현재 `parent` 클래스가 있는 컴포넌트에만 붙고, `<LibraryComponent />`에는 붙지 않기 때문이다.

아. 물론 함정이 하나 있다. `<LibraryComponent />`의 루트 엘리먼트에는 `[data-v-난수]`가 동일하게 붙는다. 만약 `<LibraryComponent />`의 루트 엘리먼트에 `child` 클래스가 붙어있다면 위의 코드도 적용이 되겠지만 설명을 위해 `child` 클래스가 루트 엘리먼트에 있는 것이 아니라고 가정한다. (이런 부분 때문에 처음에 Vue Scoped CSS의 범위를 설정하는 데에는 조금 이해와 인내심이 필요한 것 같다.)

이 때 `<LibarayComponent />`의 `child` 클래스에 접근하기 위해서 사용할 수 있는 것이 Deep Selector 이다.

Vue-Loader 에서 기존에는 /deep/ 의 형태로 사용해야 했지만, 이 문법 자체는 deprecated 될 예정이고 >>> 를 쓰는 것을 추천하고 있다.

https://github.com/vuejs/vue-loader/issues/913

```vue
<template>
  <div class="parent">
    <LibraryComponent withClass="child" />
  </div>
</template>

<style scoped>
.parent {
  color: orangered;
}

.parent >>> .child {
  color: blueviolet;
}
</style>
```

위와 같이 사용했을 경우 다들 예상했다시피 CSS가 다음과 같이 컴파일 된다.


```vue
/* 편의상 html 이라고 가정한다. */
<template>
  <div data-v-2a183b29 class="parent">
    parent
    <LibraryComponent withClass="child" data-v-2a183b29 />
    <div data-v-2a183b29 class="child">child</div>
  </div>
</template>

<style>
.parent[data-v-2a183b29] {
  color: orangered;
}

.parent[data-v-2a183b29] .child {
  color: blueviolet;
}
</style>
```

그러면 이제 안전하게(?) `<LibraryComponent />` 하위에 있는 `child` 클래스를 지목하여 폰트 색상을 변경할 수 있다.

다만, 위의 예시에 보면 엘리먼트를 하나 더 추가했는데 이런 경우에는 자체 컴포넌트에 있는 `child` 클래스를 가진 엘리먼트의 폰트 색상도 당연히 함께 바뀌게 된다.

이제까지 본 사실을 토대로 알 수 있겠지만 이 `Deep Selector`를 사용하는 것은 `scoped` 라는 기반을 무너뜨릴 수 있는 위험한 존재가 될 수 있다. 당연히 남용하라고 만든 것은 아니며 *반드시 필요한 경우에만 사용*하는 것이 좋을 것이다.

하위 컴포넌트에 접근하기 위한 `Deep Selector`는 되도록이면 최하위 요소 컴포넌트에서 라이브러리 컴포넌트를 사용할 때 정도에 쓰는 것은 안전할 것이다.

`SCSS` 등과 같은 전처리 도구를 사용할 때에는 아주 조금 확장된 기능을 사용할 순 있다. 미리 이야기해두자면 편리할 순 있지만, 좋은 시선으로 보기 어려운 방법이기 때문에 함께 일하고 있는 경우에는 서로간의 합의와 이해가 필요한 방법이다.


```vue
<template>
  <div class="parent">
    <LibraryComponent withClass="child" />
  </div>
</template>

<style scoped>
.parent {
  color: orangered;
}

.parent {
  ::v-deep .child {
    color: blueviolet;
  }
}
</style>
```

현재 기준 `"sass": "^1.27.0", "sass-loader": "^10.0.4"` 에서는 >>> Deep Selector를 지원하지 않으며, `::v-deep`의 형태로 지원하고 있다.

여기까지는 이제까지 봤던 Deep Selector와 별반 다르지 않다.

다음 사례를 보자. 이상한 상황과 수많은 가정을 만들 수 밖에 없는 것을 양해해주기 바란다. 왜냐하면 애초에 이 기능은 극한 상황, 어쩔 수 없는 상황에서나 쓰는 것이지 자주 쓰라는 기능이 아니기 때문이다.

```vue
<template>
  <div class="grand-parent">
    <div class="a-parent">
      <LibraryComponent withClass="child" />
    </div>
    <div class="b-parent">
      <LibraryComponent withClass="child" />
    </div>
    <div class="c-parent">
      <LibraryComponent withClass="child" />
    </div>
    <div class="d-parent">
      <LibraryComponent withClass="child" />
    </div>
  </div>
</template>

<style scoped>
.parent {
  color: orangered;
}

.a-parent {
  ::v-deep .child {
    color: chocolate;
  }
}
.b-parent {
  ::v-deep .child {
    color: darkcyan;
  }
}
.c-parent {
  ::v-deep .child {
    color: darkslategrey;
  }
}
.d-parent {
  ::v-deep .child {
    color: blueviolet;
  }
}
</style>
```

이렇게 부모에 따라서 하위 라이브러리 CSS를 변경해야할 때는 이렇게 늘어뜨려 써야 할 경우가 있다. 전처리 도구를 활용할 경우에는 부모와 자식 클래스를 역전(!)시켜 사용할 수 있다.

```vue
<template>
  <div class="grand-parent">
    <div class="a-parent">
      <LibraryComponent withClass="child" />
    </div>
    <div class="b-parent">
      <LibraryComponent withClass="child" />
    </div>
    <div class="c-parent">
      <LibraryComponent withClass="child" />
    </div>
    <div class="d-parent">
      <LibraryComponent withClass="child" />
    </div>
  </div>
</template>

<style scoped>
.parent {
  color: orangered;
}

.child {
  .a-parent & ::v-deep {
    color: chocolate;
  }
  .b-parent & ::v-deep {
    color: darkcyan;
  } 
  .c-parent & ::v-deep {
    color: darkslategrey;
  } 
  .d-parent & ::v-deep {
    color: blueviolet;
  }
}
</style>
```

코드를 좀더 간결하게 볼 수 있다. 서로간에 문법만 제대로 알고 있다면 크게 복잡도가 높지 않을 때에는 사용해 볼 수 있는 방식이다. 다만 일반적으로는 당연히 부모가 자식을 감싸는 것이 맞다고 생각하기 때문에 이 문법을 마냥 좋은 눈으로 보기는 어려워 보인다. 그렇기 때문에 혼자 코드를 작성할 때 어떻게 하든 상관없겠지만, 협업을 할 때에는 협업자들과의 동의 후에 진행하는 것이 좋을 것 같다.

결론적으로 `Deep Selector` 언젠가는 필요할 수도 있지만, 남용은 하지말자. 특히 이런 사용할 일이 드물거나 하는 기능은 마이너 버전 업데이트까지는 그래도 괜찮지만, 메이저 버전 업데이트에서는 빠지거나 변경될 가능성이 매우 크다. 안전한 컴포넌트 개발을 통해 미래의 수고를 줄이는 것이 더 좋을테니, 이런 기능이 있다는 정도만 알고 정말 도저히 방법이 없다라는 결론에 도달했을 때만 사용하도록 하자.
