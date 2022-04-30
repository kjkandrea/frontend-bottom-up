# 비동기 이벤트

네트워크 요청을 하는 주제에는 비동기 요청이 필연적으로 발생합니다.

http 요청이 이행될때까지 대기하고 응답되면 응답값을 토대로 다음 이벤트를 실행합니다.

ES2015 에 추가된 Promise 명세, ES2017 에 추가된 async/await 명세를 이용하여 callback hell 을 만들지않고 일관된 방식으로 비동기 이벤트를 처리할 수 있습니다.

```js
const fetchMyIp = () =>
  fetch('https://api64.ipify.org?format=json')
    .then(json => json.json())
    .catch(console.error)

const main = async () => {
  const { ip } = await fetchMyIp()
  renderIpAddress(ip)
}

main()
```