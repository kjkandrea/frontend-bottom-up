(function () {
  var $ipAddress = document.getElementById('ip-address')

  function fetchMyIp (callback) {
    $.ajax({
      type: 'GET',
      url: 'https://api64.ipify.org?format=json',
      contentType : "application/json; charset=utf-8",
      success: function (response) {
        callback(response.ip)
      },
      error: function (error) {
        console.error(error)
      }
    })
  }

  function renderIpAddress (ipAddressText) {
    $ipAddress.innerText = ipAddressText
  }

  fetchMyIp(renderIpAddress)
}())