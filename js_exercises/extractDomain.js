// Write a function that when given a URL as a string,
// parses out just the domain name and returns it as a string.
// For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
  const re = /[\.\/]/;
  const foo = url.split(re);

  if (foo[0] === 'www') return foo[1];
  if (foo[1].length === 0 && foo[2] !== 'www') return foo[2];
  if (foo[2] === 'www') return foo[3];
  if (foo[0] !== 'www') return foo[0];

  // alternate 1
  //   url = url.replace("https://", '');
  //   url = url.replace("http://", '');
  //   url = url.replace("www.", '');
  //   return url.split('.')[0];

  // alternate 2
  // return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]

  // alternate 3
  // url = url.toString().replace('https://', '').replace('http://', '').replace('www.', '');

  // return url.split('.')[0];
}

console.log(domainName('http://github.com/carbonfive/raygun'));
console.log(domainName('http://www.zombie-bites.com'));
console.log(domainName('https://www.cnet.com'));
console.log(domainName('www.xakep.ru'));
console.log(domainName('https://www.l064it2s7rmw3my5sej0.name/default.html'));
console.log(domainName('cq1f2u2b3fkat900xliw1bwjgmqss.net/users'));
console.log(domainName('https://dqap2t9kh7eyjv0ythz53gh.de/default.html'));
