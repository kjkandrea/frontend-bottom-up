(function () {
  var $countInput = document.getElementById('count-input');
  var $incrementButton = document.getElementById('increment');
  var $decrementButton = document.getElementById('decrement');

  (function main () {
    var countModel = new CountModel()

    $countInput.value = countModel.getCount();

    countModel.subscribe(function (count) {
      $countInput.value = count
    });
    $incrementButton.addEventListener('click', countModel.increment);
    $decrementButton.addEventListener('click', countModel.decrement);
  }());

  function CountModel () {
    var count = 0;

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