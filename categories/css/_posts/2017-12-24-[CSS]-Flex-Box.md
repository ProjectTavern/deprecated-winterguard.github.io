---
excerpt: Flexbox의 장점과 기본적인 옵션들을 올려놓은 PPT를 간단히 정리해보았습니다.
---
# What is Flexbox?

Reference: Traversy Media Youtube channel(with http://scratchpad.io/)

### A CSS3 layout mode that provides an easy and clean way to arrange items within a container.

- [x] No FLOATS!
- [x] Responsive and mobile friendly
- [x] Positioning child elements is MUCH easier
- [x] Flex container's margins do not collapse with the margins of its contents
- [x] Order of elements can easily be changed without editing the source HTML

### Flexible box model concept

- [x] The ablity to alter item width and height to best fit in its containers available free space
- [x] Flexbox is direction-agnostic
- [x] Built for small-scale layouts while the upcoming "Grid" specification is for more large scale

### Flex properties

PROPERTIES | OPTIONS
:---------:|:----------------------------:
display    | flex \| inline-flex
flex-direction | row \| column
flex-wrap | wrap \| nowrap \| wrapreverse
flex-basis | \<length\>
justify-content | flex-start \| flex-end \| center
align-self | flex-start \| flex-end \| center
align-items | flex-start \| flex-end \| center
align-content | flex-start \| flex-end \| center
flex-grow | \<number\>
flex-shrink | \<number\>
flex | \<integer\>
order | \<integer\>

### What different flex-basis vs width / height ?

* [x] [Good Reference in StackOverflow](https://stackoverflow.com/a/34355447)
* [x] [Korean Language for flexbox & good links](http://webclub.tistory.com/259)