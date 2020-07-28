const fetchIex = (individualStockName) => {
   return fetch(`https://cloud.iexapis.com/v1/stock/${individualStockName}/batch?` + 
  `types=quote,news,chart&range=1m&last=15&token=pk_c34e191e78b54138b8559eb6bd3465bd`)
  .then(response => response.json())
}
 
//Grab data from promise + DOM manipulation
const displayResultsIex = (responseJson) => {
  console.log(responseJson);
  $('.display-results').removeClass('hidden').empty();
  let stockSymbol = responseJson.quote.symbol;
  let companyName = responseJson.quote.companyName;
  let openingPrice = responseJson.quote.open;
  let closingPrice = responseJson.quote.close;
  let dailyPlusOrMinus = responseJson.quote.change;
    $('.display-results').append(
      `<div class="iexResults">Stock Symbol: ${stockSymbol}<br>Company Name: 
      ${companyName}<br>Opening Price: $${openingPrice}<br>
      Closing Price: $${closingPrice}<br>(+/-): ${dailyPlusOrMinus}</div`
    )
    $('.display-news-stories').empty();
    for(i = 0; i < responseJson.news.length && i < 8; i++) {
      $('.display-news-stories').append(buildNewsStory(responseJson.news[i]));
    }     
    console.log(responseJson.news);
}

const buildNewsStory = (newsArticle) => {
  return `<div class="newsArticleResults"><h2>${newsArticle.headline}</h2> <div>${newsArticle.summary}</div>
  <p class="newsArticleImageContainer"></p><a href="${newsArticle.url}"><img class="newsArticleImage"src="${newsArticle.image}">${newsArticle.url}:</a></div>
  `
}

const watchSearchingForIndividualStocks = () => {
  $('.submit-form').on('submit', (e) => {
    console.log('Submit working');
    e.preventDefault();
    let individualStockName = $('#company').val();
    //calling fetch passing value to turn into responseJson and display in DOM
    fetchIex(individualStockName).then(responseJson => displayResultsIex(responseJson));
    // fetchIex(result);
  })
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchSearchingForIndividualStocks();
  beginStockTickerInterval();
});

const handleAllFetchCallsAndPromises = () => {
  const fetchStockTickerDataPromise = fetchStockTicker()
  const allFetches = Promise.all([fetchStockTickerDataPromise, promise2]);
  allFetches.then((result1, result2));
}

const fetchStockTicker = () => {
  return fetch(``)
  .then(response => responseJson);
}
const beginStockTickerInterval = () => {
  window.setInterval(()=> fetchStockTicker().then(displayStockTickerResults), 5000);
}

/* 
event handler/setInterval
fetch
DOM manipulation
//methods for DOM manipulation
*/

const displayStockTickerResults = () => {
  console.log(displayStockTickerResults);
}

const updateStockTicker = (responseJson) => {
  console.log(responseJson);
}

//is there a tool that can do what I need, find that tool, use it
//DOM manipulation, fetches, iteration techniques
//array iteration methods
//filter, reduce, forEach, find
//objects and arrays
//[{a:1},{a:2}].map(x=>x.a)





