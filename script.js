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
  let realTimePrice = responseJson.quote.iexRealtimePrice;
  // let openingPrice = responseJson.quote.open;
  let closingPrice = responseJson.quote.iexClose;
  let dailyPlusOrMinus = responseJson.quote.change;
  let week52High = responseJson.quote.week52High;
  let week52Low = responseJson.quote.week52Low;
  let ytdChange = responseJson.quote.ytdChange;
    $('.display-results').append(
      `<div class="iexResults">Stock Symbol: ${stockSymbol}<br>Company Name: 
      ${companyName}<br><hr>Real Time Price: ${realTimePrice}<br>
      Closing Price: $${closingPrice}<br>(+/-): ${dailyPlusOrMinus}<br><hr>52 Week High: ${week52High}<br>52 Week Low: ${week52Low}<br>YTD Change: ${ytdChange}</div`
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
});




/* 
event handler/setInterval
fetch
DOM manipulation
//methods for DOM manipulation
*/

//is there a tool that can do what I need, find that tool, use it
//DOM manipulation, fetches, iteration techniques
//array iteration methods
//filter, reduce, forEach, find
//objects and arrays
//[{a:1},{a:2}].map(x=>x.a)





