(function () {
    var andrea = {
      name: 'jk',
      age: 31,
      job: 'developer'
    }

    console.log('andrea : ', andrea)

    var resume = _.omit(andrea, 'age')

    console.log('resume : ', resume)
}());