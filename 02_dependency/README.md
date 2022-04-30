# 의존성 관리

프로젝트에서는 수많은 외부 라이브러리나 프레임워크가 쓰이기 마련입니다.

이러한 의존성들은 설치 및 삭제가 쉬워야 하며, 해당 프로젝트가 어떤 패키지의 의존성을 지니고 있는지 일목요연하게 파악이 가능하여야 합니다.

과거 자바스크립트 파일들은 CDN 을 통해 이러한 패키지를 가져오거나, 
로컬 환경에서 별도로 파일을 관리하였습니다. 

## lodash 사용하기

lodash 는 여러 순수 함수를 제공하는 대표적인 함수형 라이브러리 입니다.

파일을 별도 관리하는 방식으로 해당 모듈을 사용하고자 한다면 다음과 같은 방식으로 dependencies 디렉토리를 생성한 뒤 해당 모듈 파일을 삽입하여 사용할 수 있습니다.

```html
<script src="./dependencies/lodash.min.js"></script>
<script src="./main.jsx"></script>
```

이후 글로벌 스코프 `_` namespace 를 통해 `main.jsx` 에서 lodash 에 접근하여 순수 함수를 사용할 수 있습니다.

```js
(function () {
    var andrea = {
      name: 'jk',
      age: 31,
      job: 'developer'
    }

    var resume = _.omit(andrea, 'age')

    console.log('resume : ', resume)
}());
```

## NPM

npm (Node Package Manager) 이란 패키지 관리자는 이러한 의존성 관리 및 외부 패키지 사용에 합리적인 방안을 제공합니다.

다음과 같이 의존성 관리 package.json 을 생성하여 lodash.omit 을 사용하여 봅시다.

```
npm init -f
npm install lodash.omit
```  

이후 ESModule 구문을 이용하여 다음과 같이 `lodash.omit` 을 사용할 수 있습니다.

```js
import omit from 'lodash.omit'

const andrea = {
  name: 'jk',
  age: 31,
  job: 'developer',
}

const resume = omit(andrea, 'age')

console.log('resume : ', resume)
```  