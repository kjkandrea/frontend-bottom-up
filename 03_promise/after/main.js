const $ipAddress = document.getElementById('ip-address')

const fetchMyIp = () => fetch('https://api64.ipify.org?format=json').then(json => json.json())

const renderIpAddress = ipAddressText => {
  $ipAddress.innerText = ipAddressText
}

const main = () =>
  fetchMyIp()
    .then(({ ip }) => renderIpAddress(ip))
    .catch(console.error)

main()