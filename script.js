
const fetchIex = (individualStockName) => {
   return fetch(`https://cloud.iexapis.com/v1/stock/${individualStockName}/batch?` + 
  `types=quote,news,chart&range=1m&last=15&token=pk_c34e191e78b54138b8559eb6bd3465bd`)
  .then(response => response.json())
}

//Grab data from promise + DOM manipulation
const displayResultsIex = (responseJson) => {
  console.log(responseJson);
  $('.display-results').removeClass('hidden');
  let stockSymbol = responseJson.quote.symbol;
  let companyName = responseJson.quote.companyName;
  let closingPrice = responseJson.quote.close;
  let dailyPlusOrMinus = responseJson.quote.change;
    $('.display-results').append(
      `<div class="iexResults">Stock Symbol: ${stockSymbol}<br>Company Name: ${companyName}<br>Closing Price: $${closingPrice}<br>(+/-): ${dailyPlusOrMinus}</div`
    )
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


/**************Other Features Below this Line are in Progress***************/

const fetchStockTicker = () => {
  // let stockTickerPromise = fetch(`url`);
  // let parseDataPromise = stockTickerPromise.then(response => response.json())
  // return parseDataPromise;
  return new Promise(function(){});
}


const handleAllFetchCallsAndPromises = () => {
  const fetchStockTickerDataPromise = fetchStockTicker()
  const allFetches = Promise.all([fetchStockTickerDataPromise, promise2]);
  allFetches.then((result1, result2));
}

const beginStockTickerInterval = () => {
  window.setInterval(()=> fetchStockTicker().then(displayStockTickerResults), 5000);
}

const displayStockTickerResults = () => {
  
}

const displayNewsStories = () => {
  $('.display-marketWatch-stories').window(onload());
  $('.display-yahooFinance-stories')
  $('.display-WSJ-stories')
  $('.display-forbesMoney-stories')
  $('.display-investopedia-stories')
  $('.display-bloombergMarkets-stories')
}

const updateStockTicker = (responseJson) => {
  console.log(responseJson);
}

const manageAccountSettings = () => {
  $('.login-account').on('click', () => {
    alert('User logged in!');
  })
}



