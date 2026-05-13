const fs = require('fs');
const { parse } = require('node-html-parser');

const content = fs.readFileSync('amanda-source.html', 'utf8');
const root = parse(content);

// Find all feedItem-ONDKv3 elements
const feedItems = root.querySelectorAll('.feedItem-ONDKv3');
console.log('Total feedItems:', feedItems.length);

feedItems.forEach((item, i) => {
  const text = item.text.substring(0, 100).replace(/\s+/g, ' ');
  console.log(`#${i}: ${text}`);
});

// The 5th index should be Charli's reply
const charliReply = feedItems[5];
console.log('\nCharli reply HTML length:', charliReply.outerHTML.length);
fs.writeFileSync('charli-reply.html', charliReply.outerHTML);
console.log('Written to charli-reply.html');
