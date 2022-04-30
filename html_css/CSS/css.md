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

## CSS Color

- RGB 모드 색 표현 값
- 10진수
  - rgb(): rgb 함수
  - rgb(255,255,255): rgb() 함수에 r, g, b 숫자 값을 대입한 것
- 16진수
  - 0~9, A, B, C, D, E, F
  - R, G, B 각각 2자리로 표현
  - #A5F645: 16진수 숫잣값으로 표현

- 투명도
- Opacity(불투명도)
  - CSS property => HTML Element 자체에 적용
  - 0 ~ 1 사이의 소숫점 값 사용
- Transparent(투명도)
  - 단일 속성값 (유/무)
- Alpha(알파채널)
  - 0 ~ 1 사이의 소숫점 값 사용
  - rgba() 함수 사용

```
div{
  opacity: 0;
}

div{
  background-color: transparent;
}

div{
  color: rgba(255,255,255,0.5);
}

```

## CSS Text

### Text Color

- Color 속성

### Text Alignment

- 텍스트 정렬: text-align
- 왼쪽(left), 가운데(center), 오른쪽(right), 양쪽(justify) 정렬

### Text Decoration

- 텍스트에 줄 긋기: text-decoration
- overline(윗줄), line-through(중앙선), underline(밑줄), none(없앰)

### Text Transformation

- 영문 대소문자 변경 표시

### Text Spacing

- 첫 줄 들여쓰기: text-indent
- 값: px값

- 자간: letter- spacing
- 값: px값

- 단어 간격: word-spacing
- 값: px값

- 줄 높이: line-height
- 텍스트를 포함한 해당 줄의 높이 (위아래)
- 텍스트의 content-area는 텍스트의 기본 여백이 포함된다
- 값: px값, 배수값(소숫점 숫자, 단위없음)

- 줄 바꿈: white-space
- 값: wrap(줄바꿈, 기본값), nowrap(줄바꿈 안하는 속성값)

## CSS Font

- 글꼴 종류: font-famiily
  - 앞에서부터 차례대로 설치되어 있는 폰트를 찾아서 화면에 렌더링 함
  - Fallback 기능

```
p {
  font-family: Arial, Helvetica, sans-serif;
}
```

- Fallback 기능 원리
  - 브라우저가 폰트를 찾는 기본 위치: 사용자(클라이언트) pc
  - 폰트 종류를 선택할 때 사용자들이 범용으로 사용할 만한 폰트를 선택 => web safe font
  - 웹 안전 폰트: 돋움, 굴림

- 브라우저가 폰트를 서버에서 찾도록 하는 기능 추가 => Web Font
  - 로컬 서버에 직접 웹폰트 파일을 업로드
  - 웹폰트 서비스 사용 - 구글 폰트

- 글꼴 기울임: font-style
- 값: italic

- 글꼴 굵기: font-weight
- 값: bold/normal, 숫자값

- 글꼴 크기: font-size
- 값: px값

### Web Font

- 로컬 서버에 웹 폰트 파일을 업로드해서 사용하는 방법

- local() 함수 : 사용자 pc에 설치된 폰트 검색
- url() 함수 : 웹 폰트 파일 불러오기
- format() 함수 : 브라우저에서 지원하는 파일만 다운로드
- 한글: 본고딕(Noto Sans), 나눔바른고딕, 등등
- 영문: roboto, lato, open sans, nontserrat, ..
- 고딕체: sans-serif
- 명조체: serif

```
@font-face{
  font-family: "NB-regular";
  src: local(NanumBarun), 
      url(/resources/nbg_r.woff) format("woff");
  font-style: normal;
  font-weight: normal;
}
```

## CSS link

- 4가지 상태 구분
- link, visited, hover, active

## CSS 상속, cascading, 우선순위

- 상속
  - 포함 관계의 HTML 구조에서 부모요소에 적용한 CSS 속성이 자식요소에도 적용되는 현상
  - 모든 CSS 속성이 상속되는 것은 아님

- cascading, 우선순위
  - cascading: 나중에 적용한 CSS가 최종 적용되어 표시되는 것 (순서대로 적용)
  - 우선순위: 선택자의 우선순위에 따라서 적용되는 순서를 변경할 수 있음
    - id: 100점
    - class: 10점
    - tag: 1점

## 네이밍 표기법: 여러 단어를 

- naming-intro: kebab case // id, class, url 경로
- naming_intro: snake case // file, folder
- namingIntro: camel case // js의 변수, 함수이름
- NamingIntro: pascal case // js의 class 이름

## Box Model

### Height/Width

- 박스 크기 지정

- px: 지정된 값으로 고정
- %
  - width: 부모요소를 기준으로 값 비율만큼 지정
  - height: 자식요소를 기준으로 맞춰짐 => % 지정이 적용되지 않음 

### padding

- padding-top
- padding-right
- padding-bottom
- padding-left

- padding: 축약표현
  - 값 4개
  - 값 3개
  - 값 2개
  - 값 1개

** top에만 padding을 적용하는 경우
``
div{
  padding-top:100px;
}

div{
  padding:100px 0 0 0;
}
``

### margin

- padding과 사용방법이 같음

- auto: 왼쪽, 오른쪽 여백을 동일하게 적용=> 박스 가운데 배치

- margin 상쇄(겹침)
  - 박스가 상하배치되어 있을 때 박스 사이의 margin이 큰 amrgin만 적용되는 것

### border

- border 축약 표현
```
border: 1px solid black;
```

- border 방향 추가
  - border-top
  - border-right
  - border-bottom
  - border-left

## background

### background-color

- 배경 적용 범위: content, padding 영역에만 적용

### background-image

- url(): 이미지 파일 경로, 파일명
- 배경이미지가 적용된 영역보다 크기가 작을 때 반복되어 영역을 채워줌

### background-repeat

- repeat: 반복(default)
- repeat-x: 가로방향 반복
- repeat-y: 세로방향 반복
- no-repeat: 반복안함

### background-position

- left/center/right
- top/center/bottom

```
background-position: 가로 세로;
```

### background-attachment

- 배경이미지 고정

- fixed: 배경이미지 고정

## 박스 전체 크기 계산

- width, padding, border, margin 구성 요소의 값을 합산한 값
- width, padding, border의 값을 합산한 값이 박스의 전체 크기
- margin은 layout 구성 시 별도로 합산이 필요함

```
박스 전체 크기 계산
div{
  width:300px;
  padding:20px;
  border:1px solid red;
  margin:30px;
}

width + padding + border = 300 + 20*2 + 1*2 = 342px

Ex) padding: 20px, border: 1px, 박스전체크기: 300px로 하고싶다? width?
    300-40-2=258px
```

- box-sizing: box 크기 설정 방식 제어
  - content-box: content까지가 box => width 적용범위가 content까지
  - border-box: border까지가 box => width 적용범위가 border까지 (따로 빼기 계산을 할 필요가 없음)

## 이미지, 비디오 크기 조정

- 이미지, 비디오에 width, height 둘 중 하나만 적용하는 경우, 다른 길이 속성은 비율을 유지하면서 자동으로 크기가 조정됨

- width, height 값을 모두 지정하면 이미지는 비율 유지가 깨지면서 각각 적용되고, 비디오는 비율 유지가 되면서 영역의 크기만 커짐.

## 인라인 요소의 box model

- 박스 모델의 구성요소가 모두 적용되지 않음
- 레이아웃 구성요소로 사용하지 않음

## display 속성

- 박스 표시 속성 변경
  - block -> inline
  - inline -> block
  - inline-block : inline의 한줄 표시, block의 box model 속성이 모두 적용

## 배치, 위치 지정

- 배치
  - 여러개의 박스가 서로 인접해서 레이아웃을 구성
  - 박스모델 적용에 인접해 있는 박스들의 영향을 받을 수 있음

- 위치
  - 박스 단독으로 특정 위치에 지정되는 것
  - 박스 모델 적용과 위치 지정에 다른 박스의 영향을 받지 않음

## flexbox

- 가로배치 박스들을 포함하는 부모요소가 반드시 있어야 함
- 해당 부모요소에 display:flex; 를 적용하면 자식요소들에 가로배치가 적용 됨.