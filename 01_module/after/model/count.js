export default function CountModel () {
  let count = 0

  function getCount () {
    return count
  }

  let subscriber = function () {}

  function subscribe (func) {
    subscriber = func
  }

  function emit () {
    subscriber(count)
  }

  function increment () {
    count += 1
    emit()
  }

  function decrement () {
    count -= 1
    emit()
  }

  return {
    getCount,
    subscribe,
    increment,
    decrement,
  }
}