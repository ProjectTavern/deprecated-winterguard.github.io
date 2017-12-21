---
excerpt: <!DOCTYPE>은 HTML 문서 최상단에 위치하여 웹 브라우저에게 문서의 유형을 알리는 역할을 합니다.
---

참조:
[지구별 안내서: DOCTYPE 선언하는 이유와 버전별 선언 정리](http://aboooks.tistory.com/40)<br>
[웹표준을 위한 HTML 레퍼런스](http://html.elex.pe.kr/reference/doctype)<br>

# [HTML] <!DOCTYPE>

HTML 문서를 만들기 전에 문서의 유형(document type)을 지정하는 것을 "<!DOCTYPE>"이라고 합니다.
문서 유형은 웹 브라우저에게 어떤 문서의 유형인지 알려주고 그 버전에 맞는 방법으로 해석하라는 것을 알리는 역할을 합니다.
HTML5에서부터는 아래와 같은 방법으로 간단하게 DOCTYPE 선언을 해줄 수 있습니다.

~~~html
<!DOCTYPE html>
~~~

이런 DOCTYPE을 선언해주는 이유는 [HTML별로 지원하는 태그의 종류](https://www.w3schools.com/tags/ref_html_dtd.asp)가 조금씩 다르기 때문입니다.

다음은 HTML DOCTYPE 버전의 정류와 DOCTYPE 선언방법입니다.

### HTML5
~~~html
<!DOCTYPE html>
~~~

### HTML 4.01 Strict DTD
Traditional DTD에서 deprecated된 요소와 <frameset> 관련 요소 및 속성을 제외한 가장 엄격한 DTD입니다.
~~~html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
~~~

### HTML 4.01 Transitional DTD
Strict DTD에서 deprecated 요소와 속성을 포함합니다. 권장되지 않는 요소나 속성을 문서에 포함할 필요가 있을 때, 하위 호환성을 위해 이 선언문을 사용하면 됩니다. Frameset관련 요소는 포함되지 않습니다.
~~~html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
~~~

### HTML 4.01 Frameset DTD
Traditionl DTD에 frameset을 포함합니다. Frameset을 적용한 문서에서는 이 선언문을 사용해야 합니다. 가장 느슨한 문서 형식입니다.
~~~html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
~~~

### XHTML 1.0 Strict DTD
~~~xhtml
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
~~~

### XHTML 1.0 Transitional DTD
~~~xhtml
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
~~~

### XHTML 1.0 Frameset DTD
~~~xhtml
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
~~~

### XHTML 1.1
XHTML 1.1에서는 하나의 DTD만 정의할 수 있습니다. 이것은 기존의 XHTML 1.0 Strict DTD를 기본으로 합니다.
~~~xhtml
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
~~~