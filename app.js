var request = require('unirest')

var userData = {
  id: '516fba70-20d0-11e5-b5f7-727283247c7f',
  name: 'Frederick Bombastion'
}

var allResults = []

getUserData(userData)

function getUserData(userData) {
  return new Promise(_getUserData)
}

function _getUserData(resolve, reject) {
  request.get('http://mockbin.com/request?username=' + userData.name)
    .end(function (results) {
      if (results.error) {
        return reject(error)
      }
      console.log(results.body)
      resolve(results.body)
    })
}
