import omit from 'lodash.omit'

const andrea = {
  name: 'jk',
  age: 31,
  job: 'developer',
}

console.log('andrea : ', andrea)

const resume = omit(andrea, 'age')

console.log('resume : ', resume)