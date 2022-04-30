const $ipAddress = document.getElementById('ip-address')

const fetchMyIp = () =>
  fetch('https://api64.ipify.org?format=json')
    .then(json => json.json())
    .catch(console.error)

const renderIpAddress = ipAddressText => {
  $ipAddress.innerText = ipAddressText
}

const main = async () => {
  const { ip } = await fetchMyIp()
  renderIpAddress(ip)
}

main()