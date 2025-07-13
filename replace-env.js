const fs = require('fs');

const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error('API_KEY environment variable not found!');
  process.exit(1);
}

const filePath = './src/environments/environment.example.ts';

let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/REPLACE_ME/g, apiKey);

fs.writeFileSync(filePath, content);

console.log('API key replaced successfully!');
