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

updateData와 movieData에 타입을 부여하기 위해서 DTO라는 것을 만들어야 함
DTO = 데이터 전송 객체
DTO는 프로그래머의 코드를 간결하게 도와줌. NestJS가 들어오는 쿼리에 대해 유효성 검사를 해줌.
main.ts에 파이프를 만듦. 유효성 검사 파이프를 만들면 이것을 일반적으로 미들웨어라고 생각할 수 있음.
그리고 몇가지 설치 
npm i class-validator class-transformer
우리가 할 것이 클래스의 유효성 검사이기 때문

create-movie.dto.ts 를 작성한 뒤 update-movie.dto.ts를 작성할 때는 부분 타입 방법을 쓸 것임.
npm i @nestjs/mapped-types
mapped-types는 타입을 변환시키고 사용할 수 있게 해주는 패키지
부분 타입에 베이스 타입을 넣어주면 베이스 타입과 전부 같지만 전부 필수사항이 아니게 됨.

NestJS를 쓸 때 Typescript의 보안도 이용하고, 유효성 검사도 따로하지 작성하지 않아도 됨

모듈 좋은 구조로 만들어야 함. 사실 app.module는 appcontroller과 appprovider만 가지고 있어야 함. 그래서 지금까지 했던 movie 컨트롤러와 서비스를 movie 모듈로 만들 것임
nest g mo

NestJS의 앱 구조는 여러가지 모듈을 import하면 NestJS가 앱 구동하며 모든 것을 하나의 모듈로 생성해줌

dependency injection = providers가 import하고 controller에 inject해줌

NestJS는 express 위에서 돌아가기 때문에 컨트롤러에서 Request, Response 객체가 필요하면 쓸 수 있음. @Req, @Res 데코래이션을 사용하면 가능. 하지만 NestJS의 방식으로 쓰는게 더 좋음.