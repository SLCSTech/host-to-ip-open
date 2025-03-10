function resolveHostname() {
    const hostname = document.getElementById('hostname').value;
    fetch(`/resolve/${hostname}`)
    .then(response => response.json())
    .then(data => {
    if (data.error) {
    document.getElementById('result').innerText = data.error;
    } else {
    document.getElementById('result').innerText = `IP Address: ${data.address}`;
    }
    })
    .catch(error => {
    document.getElementById('result').innerText = 'Error occurred: ' + error;
    });
   }
   