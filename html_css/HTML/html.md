# HTML

## 학습내용

- Contents

  - Text Contents
  - Image, Video, Audio Contents

- Structure

## HTML Introduction

- Hyper Text Markup Language
- HTML을 사용해서 웹페이지에 콘텐츠와 구조를 표시

## HTML Basic

```
<!DOCTYPE html> : 문서(웹페이지) 타입(종류) - 버전(HTML5)
<html> : 웹페이지 전체 영역

  <head> : 웹 페이지의 추가정보, 타이틀, 파일import
    <title></title>
  </head>

  <body> : 웹 페이지의 본문 영역 - 웹 페이지 모든 콘텐츠 표시
  </body>

</html>
```

## HTML Syntax

- Tag를 사용해서 Element를 표시/표현

```
<tag> contents </tag> : 시작태그, 종료태그로 구성
<tag> : 시작태그만 존재하는 경우 - 빈요소(Empty Elements)
```

- 포함관계(Nested Elements) ***
  - Tag 영역 안에 다른 Tag가 포함되는 것
  - 포함하는 요소 : 조상요소(ancestor), 부모요소(parent)
  - 포함되는 요소 : 자손요소(descendant), 자식요소(child)

```
<html>
  <body>
    <h1>큰제목</h1>
    <p>단락</p>
  </body>
</html>

html기준 (바로 밑이 자식, 한두다리 건너가면 자손)
- 자식요소: body
- 자손요소: h1, p
body기준
- 조상요소: X
- 부모요소: html
- 자식요소: h1, p
- 자손요소: x
```

- Attribute(속성)
  - tag에 추가 정보
  - name="value", 속성이름="값"

```
<tag attr="값">  </tag>
```

## Text Contents Markup

### Heading(제목)

- <h>(eading) 태그
- h1 ~ h6

### Paragraph(단락)

- <p>(aragraph) 태그

```
WYSIWYG(What You See Is What You Get)
- html은 위지위그가 안됨
```

- 강제 줄바꿈 : br(eak)태그
  - 시작태그만 존재하는 빈 요소(Empty Elements)

- 강제 공백 : &nbsp;(Non-Break Space)(엔터티 코드)

```
&(ampersand)

엔터티 코드: 대체코드
- 특수문자를 직접 사용하지 못할 때 대체해서 사용하는 코드
- 이미 예약되어있는 코드들을 사용하면 다른기능이 우선인식되므로 대체 사용! ex) <, >, ' ...
```

- <hr> 수평선 태그 (Horizontal Rule)
  - 단락을 구분하는 구분선
  - 빈 요소

### HTML Link

- <a>(nchor) : 하이퍼링크 연결 태그
- <href=""> : 목적지 정보 제공 속성, hypertext references (attribute)

```
<a href="url"> 텍스트 </a>
```