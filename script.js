
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

const fetchIex = (individualStockName) => {
   return fetch(`https://cloud.iexapis.com/v1/stock/${individualStockName}/batch?` + 
  `types=quote,news,chart&range=1m&last=15&token=pk_c34e191e78b54138b8559eb6bd3465bd`)
  .then(response => response.json())
}

// const displayResultsAlpha = (responseJson) => {
//   console.log(responseJson);
//   $('.display-results').removeClass('hidden');
//   //grabbing data from promise
//   let stockSymbol = responseJson["Meta Data"]["2. Symbol"];
//   let mostRecentResult = Object.values(responseJson["Time Series (15min)"])[Object.values(responseJson).length];
//   console.log(stockSymbol, mostRecentResult);
//   let price = mostRecentResult["4. close"];
//   //DOM manipulation
//     $('.display-results').append(
//       `<div>${stockSymbol}:${price}</div`
//     )
// }

const displayResultsIex = (responseJson) => {
  console.log(responseJson);
  $('.display-results').removeClass('hidden');
  //grabbing data from promise
  let stockSymbol = responseJson.quote.symbol;
  // console.log(responseJson.quote.symbol);
  let companyName = responseJson.quote.companyName;
  let closingPrice = responseJson.quote.close;
  let dailyPlusOrMinus = responseJson.quote.change;
  //DOM manipulation
    $('.display-results').append(
      `<div class="iexResults">Stock Symbol: ${stockSymbol}<br>Company Name: ${companyName}<br>Closing Price: $${closingPrice}<br>+/-: ${dailyPlusOrMinus}</div`
    )
}

const beginStockTickerInterval = () => {
  window.setInterval(()=> fetchStockTicker().then(displayStockTickerResults), 5000);
}

const displayStockTickerResults = () => {
  
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

const watchNewsStories = () => {
  $('')
}

// const watchNewsStories = () => {
//   //setInterval...AJAX request
//   $('.news-stories').on('load', (e) => {
//     e.preventDefault();
//     let latestNews = 'url';
//   })
// }

const updateStockTicker = (responseJson) => {
  console.log(responseJson);
}

const manageAccountSettings = () => {
  $('#password-reset-screen').on('click', () => {
    alert('Normally, I form will appear where the user will reset his/her password');
  })
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchSearchingForIndividualStocks();
  beginStockTickerInterval();
  // manageAccountSettings();
});

//1. Event listener/Interval triggers 2. AJAX 3.DOM manipulation ("fetch data and then do DOM manipulation")

// $('#input-tags3').selectize({
//   plugins: ['remove_button']['restore_on_backspace'],
//   delimiter: ',',
//   persist: false,
//   create: function(input) {
//       return {
//           value: input,
//           text: input
//       }
//   }
// });
// https://selectize.github.io/selectize.js/

