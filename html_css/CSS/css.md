# CSS

## 학습 내용

- Contents Styling
  - Text Styling
  - Media Contents Styling => 크기, 여백 조정

- Structure Styling => Layout

## CSS Introduction

- Cascading Style Sheet: HTML Contents를 스타일링하는 언어
- 위>아래 실행 흐름에 맞춰서 하단에 적용한 스타일이 최종 적용되어 화면에 표시

## CSS Syntax

```
selector{property:value;}
```

## CSS 작성 방법

- External : 외부 파일
- Internal : 내부 추가 태그 방식
- Inline : 내부 줄단위 방식, js에서 사용하는 방식

## id, class

- id, class attribute를 사용해서 HTML 요소에 이름을 지정

```
<p id="para1">단락내용1</p>

<p class="para2">단락내용2</p>
```

- #id
   - 동일한 HTML 파일에서 단 한번만 사용되어야 함 => 고유하게 사용됨
    => 고유하게 사용됨, BackEnd 개발과 연결해서 활용가능
   - 동일한 HTML Element에 여러개의 id 이름을 사용할 수 없음 (오류는 안나지만, 그렇다고 써도 되겠지 하면 안됨!)

- .class
  - 동일한 HTML 파일에서 같은 이름을 여러번 사용할 수 있음
    => 여러 요소에 스타일을 공통 적용 시킬 때 활용 
  - 동일한 HTML Element에 여러개의 class 이름을 사용할 수 있음
    => 스타일을 분리해서 조립하는 형태로 활용

- FE에서는 주로 class를 활용

- Simple Selector
  - Element Selector
  - id Selector
  - class Selector

## CSS Selector

CSS에서 id, class를 표현하는 방법
- id => #
- class => .

```
#para1{}

.para2{}
```