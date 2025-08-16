const { createClient } = require('redis');

async function main() {
  const client = createClient();

  client.on('error', (err) => {
    console.error('Redis Client Error', err);
  });

  await client.connect();

  await client.set('message', 'Hello from Node.js');
  const value = await client.get('message');
  console.log('Value:', value);

  await client.disconnect();
}

main();
