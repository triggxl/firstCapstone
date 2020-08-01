const fetchIex = (individualStockName) => {
   return fetch(`https://cloud.iexapis.com/v1/stock/${individualStockName}/batch?` + 
  `types=quote,news,chart&range=1m&last=15&token=pk_1702acf0d62c47559fb43d153de2c635`)
  .then(response => response.json())
}
 
//Grab data from promise + DOM manipulation
const displayResultsIex = (responseJson) => {
  $('.display-results').removeClass('hidden').empty();
  let stockSymbol = responseJson.quote.symbol;
  let companyName = responseJson.quote.companyName;
  let realTimePrice = responseJson.quote.iexRealtimePrice;
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
}

const buildNewsStory = (newsArticle) => {
  return `<div class="newsArticleResults"><h2>${newsArticle.headline}</h2> <div>${newsArticle.summary}</div>
  <p class="newsArticleImageContainer"></p><a href="${newsArticle.url}"><img class="newsArticleImage" alt="This is a news story result based on the Stock symbol the user searched for"src="${newsArticle.image}">${newsArticle.url}:</a></div>
  `
}

const watchSearchingForIndividualStocks = () => {
  $('.submit-form').on('submit', (e) => {
    e.preventDefault();
    let individualStockName = $('#company').val();
    if (!individualStockName) {
      alert("Please Enter a Stock Symbol ie: AMZN, IBM, AAPL");
      return false;
    }
    //calling fetch passing value to turn into responseJson and display in DOM
    fetchIex(individualStockName).then(responseJson => displayResultsIex(responseJson));
  })
}

$(function() {
  watchSearchingForIndividualStocks();
});


