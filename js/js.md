# JavasScript

- 프로그래밍 언어
  - 문법

- HTML, CSS를 제어하는 기능
  - 활용

## JavaScript 기초개념

  - version
    - ES5
    - ES6
  
  - 작성방식
    - External
    - Internal
    - Inline

# 문법(Syntax)

  - 데이터/변수/연산
  - 명령문(구문)
  - 함수
  - 배열/객체/Class
  - 추가문법

### 데이터/변수/연산

- 데이터 타입(종류)
  - 문자
    - 따옴표로 묶어줌
      ex) 'Volvo', '10'

  - 숫자
    - 정수, 실수

- 데이터 타입 구분 여부
  - 자바스크립트는 데이터타입을 구분하지 않음
  - 데이터 무결성 측면에서는 단점
  - 편리한 사용성 측면에서는 장점

- Type Script: JavaScript + Data Type

```
1 + '1' = 11 or 2 (상황에따라..)
```

- 변수
  - 데이터를 젖아하는 공간(컨테이너)
  - 사용
    - 변수 선언
    - 변수 초기화
    - 데이터 할당
```
var a; (선언)
a = 0; (초기화)
a = 10; (할당)

var b = 20; (한꺼번에)
```

- var, let, const
  - var : ~ES5
  - let, const : Es6~

- var, let
  - 데이터 초기화 할당 이후에 변수값을 변경할 수 있음
- const
  - 데이터 초기화 할당 이후에 변수값을 변경할 수 없음

#### 연산(자)

- 산술 연산자
  - +, -, *, /
  - % : 나머지 연산

- 할당 연산자
  - = : 
  - +=, -=, *=, /=
```
let a = 0; // 0을 a 변수에 할당(대입)

```

- switch
  - 수식결과값과 같은 값이 있는 레이블 위치의 코드를 실행

```
switch(일반데이터결과값){
  case 레이블1(숫자or문자):
    실행코드1;
    break;
  case 레이블2:
    실행코드2;
    break;
  default:
    실행코드3;
}
=> switch의 일반데이터결과값이 레이블1 값과 같으면 실행코드1을 실행.
   레이블2와 같으면 실행코드2를 실행, 같은 레이블이 없으면 실행코드3을 실행.
```

#### 반복문

- For
  - 반복 횟수를 지정하거나 필요한 형태의 반복 횟수로 반복 실행

```
for(let i=0; i<3; i++){
  실행코드
}

statement1 : let i=0
for 코드블럭 실행전 최초 한번 실행 => i=0
statement2 : i<3
i<3 비교식의 결과값이 true이면 실행코드를 실행
statement3 : i++
실행코드가 실행된 이후 i++가 실행
```

- while
  - 논리값이 true일 때 반복 실행

```
while(true){
      // 반복횟수를 모를 때 
      // 로그인의 경우
      // 아이디, 비번 비교
  if(아이디/비번 === DB저장된정보들){
    로그인 성공
    break;
  }else{
    로그인 실패
  }
}
```

### 함수

- 여러 코드를 하나의 패키지로 그룹화 한 것 
- 코드의 재사용

```
// 함수 선언 (매개변수와 return 사용 가능)
function myFunction(){
  let a = 10;
  let sum = 0;
  sum = sum+a;
}

// 함수 호출
myFunction();
myFunction();
myFunction();
```

- 함수 선언(정의)의 형식

```
1. 
function myFunction(){
  실행코드;
}

2. 익명함수를 만들어서 변수에 할당하는 형태
let myFunction = function(){
  실행코드;
}

3. 익명함수 : 선언과 동시에 실행
function(){
  실행코드;
}
```

### 배열/객체/Class

- 참조형 데이터
  - 기본형 데이터는 변수 저장공간에 데이터가 직접 저장
    참조형 데이터는 제3의 공간에 데이터가 저장되고 변수 저장공간에는 데이터가 저장된 위치값이 저장

- 배열
  - 참조형 데이터
  - 데이터 집합
  - 같은 타입, 같은 의미 데이터
  - 배열 객체에 포함된 property, method를 사용해서 배열 데이터를 좀더 수월하게 제어할 수 있음

```
const a = [1, 2, 3];

원소 변경 가능
a[0] = 5; (o)

배열 변경 불가능
a = [4, 5, 6]; (x)

```

- 객체
  - 참조형 데이터
  - 소속(대상)이 같은 데이터
  - 각각의 데이터에 name(key)을 붙여서 사용
  - property(객체 특성/속성)
    - 일반 데이터의 변수와 같은 역할
    - 객체 변수
  - method(객체 기능)
    - 일반 현태의 함수와 같은 역할
    - 객체 함수
  - 객체 데이터는 property, method로 모두 그룹화하는 것이 좋은 방식

```
const a = {
  name: 'BBB',
  color: 'white'
}

원소 변경
a.color = 'red';

객체 변경  -  불가능
a = {
  name: 'DDD',
  color: ' blue
}
```

- 객체 Method 선언

```
const a = {
  name: 'BBB',
  color: 'white',
  showColor: function(){
    console.log('color : ' + color);
  }
}
```

## 활용

### HTML DOM

- DOM (Document Object Model): HTML Element를 객체 데이터로 만든 모델
- Javascript에서 DOM에 엑세스하고 제어함으로써 웹페이지 콘텐츠를 제어
- HTML Contents 제어(CRUD), CSS 스타일 속성 제어

#### DOM 객체

- Javascript
  - ES5, ES6: 기본 javascript
  - HTML DOM : HTML API

  - Property

```
HTML
```

  - Method
    - Access(접근)
    - HTML4 API

```
<h1 id="heading" class="title">heading</h1>

document.getElementByID('heading')
document.getElementsByTagName('h1')
document.getElementsByClassName('title')

```

  - HTML5 API
```
<h1 id="heading" class="title">heading</h1>
<h1 class="title">heading</h1>

document.querySelector('#heading')
document.querySelector('h1') // 첫번째 요소에만 접근하고 끝남! 두번째/세번째는 접근하지 않음
document.querySelector('.title') // 위와 같음

document.querySelectorAll('h1') // 첫번째 것부터 병렬로 접근
document.querySelectorAll('.title') // 위와 같음
```
  - JS 동적 작업
    - Create
    - Read
    - Update
    - Delete/Remove

```
document.createElement() //생성
document.appendChild()  // DOM에 객체를 추가 => 웹페이지에 표시/ 둘을 같이 사용해야 생성이 완료!

document.removeCHild()
```

** 직접 입력한 내용이 페이지에 표시되는 경우: 정적(static) 내용
** JS 기능을 통해서 내용이 추가/수정/삭제 되는 경우 : 동적(dynamic) 내용

- 속성 변경
  - HTML Attribute
  ```

  ```

### Form 요소

- input
  - type="text" : text 한줄 입력
  - type="password" : password 입력, 내용표시x
  - type="checkbox" : 중복선택이 가능
  - type="radio" : 단일선택 가능
  - type="file" : 파일 업로드
  - type="submit" : 내용을 서버로 전송 버튼
  - type="reset" : 입력된 내용을 초기화 버튼
  - type="button" : 일반 버튼

- select
  - option 요소를 사용해서 목록의 아이템

- button
  - submit, reset, button 3가지 type

### 이벤트(Event)

- 상태변화
  - 현재 상태에서 다른 상태로의 변화
  ex) 내용입력, 마우스클릭, 마우스이동 ...
  - 이벤트 발생
    - 상태 변화에 따른 신호 표시

- 상태 변화에 따라 특정 기능 실행
  - 이벤트 리스닝
    - 발생된 이벤트 감지
  - 이벤트 핸들링
    - 발생된 이벤트에 따라 특정 기능 실행

- 이벤트 종류
  - 브라우저 이벤트
    - HTML 로딩완료 이벤트(load)
  - 사용자 이벤트
    - 마우스 이벤트
      - 이동(move), 클릭(click)
    - 키보드 이벤트
      - 내용 입력(key----)