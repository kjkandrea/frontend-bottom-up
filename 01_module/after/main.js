import CountModel from './model/count'

const $countInput = document.getElementById('count-input')
const $incrementButton = document.getElementById('increment')
const $decrementButton = document.getElementById('decrement');

(function main () {
  const countModel = new CountModel()

  $countInput.value = countModel.getCount()

  countModel.subscribe(function (count) {
    $countInput.value = count
  })
  $incrementButton.addEventListener('click', countModel.increment)
  $decrementButton.addEventListener('click', countModel.decrement)
}())