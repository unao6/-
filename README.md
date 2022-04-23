# md(MarkDown)

````
# ~ ###### : 제목
`(backtick) : 박스 표시 (```위아래 3개씩```)
````

# Github

- 버전관리 소프트웨어 : Git
- Git 웹 서비스 : GitHub

- Git 버전관리 프로세스
  - 준비단계
    - remote repository 생성
    - clone : 로컬위치에 repository를 가져옴
  - 작업단계
    - commit : 수정 확인 단계
    - push : remote repository에 업로드
  - 협업단계
    - branch
    - pull

# 클라이언트 서버 시스템

클라이언트 서버 모델(client–server model)은 서비스 요청자인 클라이언트와 서비스 자원의 제공자인 서버 간에 작업을 분리해주는 네트워크 아키텍처를 나타낸다. 웹 시스템도 확장된 '클라이언트 서버 시스템'으로 분류되나, 사용자 PC에는 클라이언트가 설치되어 화면을 처리하고 서버에서는 자료를 처리하는 시스템을 일컫는다.

# Front End / Back End

- Front End

  - 사용자를 기준으로 사용자가 제어하는 화면, 인터페이스가 위치하는 영역
  - UI 디자인, 개발
  - 클라이언트 시스템
    - H/W : PC, Mobile Device
    - S/W : 웹 - 브라우저 / 앱 - 소프트웨어(프로그램 자체가 클라이언트)
  - Front End 개발이란?
    - UI 개발
    - 브라우저(클라이언트)에서 해석되는 언어를 사용해서 개발하는 것
    - 웹 프론트엔드 언어 : HTML, CSS, Javascript
    - 앱 개발 언어(Native App) (프론트엔드와 백엔드 언어가 구분되어 있지 않음)
      - Android : Java -> Kotlin
      - IOS : Objective C -> Swift
        (하이브리드 앱 전용 언어가 있고, 웹 기술로도 하이브리드앱을 만들수도 있음)

- Back End

  - 사용자가 제어하지 못하는 영역
  - 보안, 데이터 처리
  - 서버시스템
    - H/W : 서버 컴퓨터 (서버소프트웨어를 설치하면 서버컴퓨터로 동작)
    - S/W : 서버 소프트웨어 - 아파치(리눅스기반), IIS(윈도우기반), nodeJS
  - Back End 개발이란?
    - 서버(아파치, IIS)에서 해석되는 언어를 사용해서 개발하는 것
    - 웹 백엔드 언어 : Java, Python, PHP, asp, Javascript
    - 앱 개발 언어(Native App)
      - Android : Java -> Kotlin
      - IOS : Objective C -> Swift

# 비트 계산

- ip 주소, 문자 표시, Color 표시

- 단위
  - bit: 컴퓨터가 표시할 수 있는 최소 단위
  - 1bit에 0또는 1 숫자를 저장할 수 있음(2진수)
  - 1bit로 의미를 부여할 수 있는 갯수: 
  - 의미있는 데이터를 표현하는 단위: 1byte (=8bit)
  - 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 2^8(2**2) = 256개(0 ~ 255)

- 문자표현
  - 영문: 1byte로 표현 가능
  - 영문 + 다른 언어 표현: 2byte 표현(가짓수가 부족하기 떄문에) => 유니코드
```
<meta charset="UTF-8">: 유니코드로 문자표시 하라는..(인코딩)
```

- ip 주소
  - 1byte 범위 숫자 4개로 구성
  ```
  0~255 숫자 4개를 . 으로 구분해서 사용

  255.255.255.0
  ```

- 색 표현
  - 24bit 트루 컬러(=3byte)
  - 16,777,216개 색 표현
  - 색 혼합방식
    - RGB(가산혼합: 스크린) : Red, Blue, Green 색의 혼합
      - R(1byte), G(1byte), B(1byte) // Red를 256개의 단계로 표현 ,...
    - CMYK(감산혼합: 프린터) : Cyan(청록), Magenta(자주), Yellow, Key(Black) 색의 혼합
  - 색표현 값
    - 16진수
    - 10진수