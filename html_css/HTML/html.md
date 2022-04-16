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

- 포함관계(Nested Elements) \*\*\*
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
- bookmark
  - 연결된 페이지로 이동하지 않고, 같은 페이지 내에서 위아래 이동

```
- page link
<a href="url">텍스트</a>

- bookmark

  - link
  <a href="#target">목적지</a>

  -target
  <h2 id="target">단락 제목</h2>
```

- URL(Uniform Resource Locator) : 파일(자원)위치식별자 - 상세주소

- 인터넷 주소체계

  - IP address(internet protocol, 인터넷 통신규약): 인터넷에서 사용하는 주소
  - Domain name: IP 주소를 영어단어로 표현한 것
    - 서버종류: www(웹서버)
    - 회사이름: naver, daum ..
    - 기관성격: com, net (3자리) / co, go, ac (4자리)
    - 국가(4자리): kr. uk, ca, fr, ...

  ```
  - IP: 0~255까지의 숫자 4개로 구성 Ex) 192.168.0.1

  - 인터넷 접속 프로세스: 주소표시줄에 Domain Name 입력=> IP주소로 변환 => 접속

  - URL 체계

  IP 또는 Domain 주소/상세경로/파일정보
  ex)www.w3schools.com/html/default.asp
  ```

### HTML table

```
<table> : 테이블 작성
  <tr> : table row - 행
    <th></th> : table header - 열 제목
  </tr>
  <tr>
    <td></td> : table data - 데이터
  </tr>
  <tr>
    <td></td>
  </tr>
</table>
```

### HTML list

- ul(Unordered List): 순서 없는 목록
  - 기호로 표시
- ol(Ordered List): 순서 있는 목록
  - 숫자(알파벳, 한글)로 표시
- li(List Item): 목록 아이템

```
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JAVASCRIPT</li>
</ul>

<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JAVASCRIPT</li>
</ol>
```

- Description List: 설명목록

  - dl(Description List)
  - dt(Description Title)
  - dd(Description Data)

```
<dl>
  <dt>목록 주제</dt>
  <dd>목록의 설명</dd>
</dl>
```

### HTML Image

- img
- src(source) : 이미지 파일 경로/파일명 표시
- alt(ernative) : 대체 텍스트

```
<img src="www.naver.com/html/photo.jpg" alt="이미지 설명">
```

### HTML Video

- video
  - 이름만 사용하는 attribute는 on/off 기능 형태
  - controls : 재생 컨트롤을 화면에 표시
  - autoplay : 자동 재생
  - muted : 소리 제거

```
<video>
  <source src="www.daum.net/video/movie.mp4" type="video/mp4">
</video>
```

### Youtube Video

- option, parameter(매개변수)

https://developers.google.com/youtube/player_parameters?hl=ko#autoplay

```
<iframe src="youtube-url?parameter1=0&parameter2=1&parameter3=0"></iframe>
```
