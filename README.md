#hi-nest

NestJS는 main.ts 파일을 가지고 무조건 이 이름이여야 함.
AppModule = 루트 모듈
데코레이터 = 클래스에 함수 기능을 추가함
controllers = 기본적으로 url을 가져오고 함수를 실행함. (express 라우터 같은 것)
services = 비지니스 로직

nest 커맨드라인으로 NestJS의 거의 모든 걸 생성 가능.
nest g co -> 컨트롤러 생성

@Controller() 안의 문자열이 우리 url의 Entry Point를 컨트롤 함
url에 있는 id를 알고 싶다면 NestJS에선 아주 낯선 방법을 사용
무언가 필요하면 우리가 요청해야 한다는 방법!!

nest g s -> 서비스 생성