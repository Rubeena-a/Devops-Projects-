
const http = require('http');
const createApp = require('../src/app');

const app = createApp();
const server = http.createServer(app);

server.listen(0, function () {
  const port = server.address().port;
  http.get({ hostname: '127.0.0.1', port, path: '/', agent: false }, (res) => {
    let data = '';
    res.on('data', d => data += d);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        if (json.message === 'Hello from CI/CD demo app!') {
          console.log('TEST PASS');
          process.exit(0);
        } else {
          console.error('TEST FAIL - message wrong');
          process.exit(2);
        }
      } catch (e) {
        console.error('TEST FAIL - invalid json', e);
        process.exit(2);
      }
    });
  }).on('error', e => {
    console.error('TEST FAIL - request error', e);
    process.exit(2);
  });
});
