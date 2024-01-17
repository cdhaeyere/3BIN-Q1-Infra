const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const ipAddress = getLocalIpAddress();
  res.send("Container IP address : " + getLocalIpAddress());
});

function getLocalIpAddress() {
  const networkInterfaces = os.networkInterfaces();
  for (const interfaceName of Object.keys(networkInterfaces)) {
    const interfaces = networkInterfaces[interfaceName];
    for (const address of interfaces) {
      if (address.family === 'IPv4' && !address.internal) {
        return address.address;
      }
    }
  }
  return 'Unknown';
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

