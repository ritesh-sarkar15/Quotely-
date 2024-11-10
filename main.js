window.onload = function() {
  main();

}

function main() {
  const api_key = "pxbhjizyeBAP2TqYb8xH8A==yWdeNE3mystmwKq8";
  const API = `https://api.api-ninjas.com/v1/quotes?X-Api-Key=${api_key}`;
  const quote = document.querySelector('.quote');
  const author = document.querySelector('.author');
  const newQuote = document.querySelector('#new');
  const copyBtn = document.querySelector('#copy');
  const content = document.querySelector('.sec');
  const select = document.querySelector('select');


  async function genQuote(url) {
    let response = await fetch(url);
    let info = await response.json();
    quote.innerHTML = info[0].quote;
    author.innerHTML = info[0].author;
  };

  const genQuote_2 = async () => {
    const API_2 = `https://api.api-ninjas.com/v1/quotes?X-Api-Key=${api_key}&category=${select.value}`;
    let response = await fetch(API_2);
    let info = await response.json();
    quote.innerHTML = info[0].quote;
    author.innerHTML = info[0].author;
  };

  newQuote.onclick = function() {
    if (select.value === 'random') {
      genQuote(API);
    } else {
      genQuote_2();
    }
  };

  copyBtn.onclick = function() {
    navigator.clipboard.writeText(content.textContent)
  };
  genQuote(API);
};