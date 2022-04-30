# 모듈패턴

클로저를 활용하여 원하는 프로퍼티나 메서드를 캡슐화 할 수 있습니다.

## 클로저를 활용한 모듈 패턴 예시

```js
function CountModel () {
  var count = 0

  function getCount () {
    return count
  }

  function increment () {
    count += 1
  }

  function decrement () {
    count -= 1
  }

  return {
    getCount,
    increment,
    decrement,
  }
}
```

ES2015 스팩 이전에는 예시와 같이 함수 스코프를 가지는 var 를 격리하기위해 이러한 클로저를 활용한 모듈패턴을 이용하여 캡슐화를 구현하고는 하였습니다.

현재 `const`, `let` 를 블록 스코프를 가지고, 함수로 감싸지않으면 전역 스코프에 노출되는 `var` 와는 달리 글로벌 변수로 선언되지 않습니다.

## ESModule

ES2015 스팩 에는 ESModule 명세가 등장하여 파일단위로 모듈을 구성할 수 있습니다.

다음과 같이 `CountModel` 과 같은 특정 주제를 다루는 모듈을 파일 단위로 관리할 수 있습니다.
    
```js
// model/count.js
export default function CountModel { ... }

// main.js
import CountModel from './model/count'

const countModel = new CountModel();
```

이러한 파일 단위의 분리 지원은 front end 개발에 파일 단위로 여러 모듈을 구성한 후 조합하는 계층 분리를 가능하게 합니다.

이와 같은 변화는 ES2015 이전과 이후 프론트엔드 개발에 가장 큰 변화 중 하나입니다.