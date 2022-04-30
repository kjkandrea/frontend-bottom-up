(function () {
  const $countInput = document.getElementById('count-input');
  const $incrementButton = document.getElementById('increment');
  const $decrementButton = document.getElementById('decrement');

  (function main () {
    const countModel = new CountModel()

    $countInput.value = countModel.getCount();

    countModel.subscribe(function (count) {
      $countInput.value = count
    });
    $incrementButton.addEventListener('click', countModel.increment);
    $decrementButton.addEventListener('click', countModel.decrement);
  }());

  function CountModel () {
    let count = 0

    function getCount() {
      return count;
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
}())