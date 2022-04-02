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
