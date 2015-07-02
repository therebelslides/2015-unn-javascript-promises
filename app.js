var request = require('unirest')
var userData = {
  id: '516fba70-20d0-11e5-b5f7-727283247c7f',
  name: 'Frederick Bombastion'
}

var allResults = []
var self = {userData:userData}

getUserData(userData)
  .then(afterGetData.bind(self))

function getUserData(userData) {
  var self = {userData:userData}
  return new Promise(_getUserData.bind(self))
}

function _getUserData(resolve, reject) {
  var userData = this.userData
  request.get('http://mockbin.com/request?username=' + userData.name)
    .end(function (results) {
      if (results.error) {
        return reject(error)
      }
      resolve(results.body)
    })
}
function afterGetData(results) {
  var self = this
  allResults.push(results)
  console.log('Results:', allResults)
}

