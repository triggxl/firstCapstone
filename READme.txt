Summary:

This app displays multiple stocks in real time, allowing the user to search by individual stock also; login to access favorited stocks (backend, future project)

Live App Link:
https://triggxl.github.io/firstCapstone/

Technologies Used:
HTML, CSS, JavaScript, jQuery
-----------------------------------------------------------------------------------------

To-Do's:

Stock Symbol
Company name
iexRealtimePrice
Change
Opening
Closing


1. center news story results
2. make link blue and active
3. only want to display 4 relevant news articles

1. Display real time stock tickers (setInterval)
2. alert message upon log in ('user logged in!');
3. use DOM manipulation to display search results from 'Search the Market' on page
4. display latest/most relevant news stories in 'News Stories' section on load
5. Update remote URL
6. Utilize Promise.all()
promise.all()
fetch data for:
search the market
news stories

make an AJAX request to retrieve market data using setInterval(function, miliseconds) from required API
.then use DOM manipulation to change stock ticker on page

Other features to add:
Encrypting text:
https://css-tricks.com/snippets/css/password-input-bullet-alternatives/

$('#input-tags3').selectize({
  plugins: ['remove_button']['restore_on_backspace'],
  delimiter: ',',
  persist: false,
  create: function(input) {
      return {
          value: input,
          text: input
      }
  }
});
https://selectize.github.io/selectize.js/

-----------------------------------------------------------------------------------------
User Flows: (Simple and Complex)

1. Event listener/Interval triggers 2. AJAX 3.DOM manipulation ("fetch data and then do DOM manipulation")

https://signalvnoise.com/posts/1926-a-shorthand-for-designing-ui-flows
Allow the developer to make decisions and changes at a low fidelity before you invest a lot of time in design
-----------------------------------------------------------------------------------------
User Stories:

Users will be able to register and create a new account, or use a demo account
Users will be able to search stocks by name
Users will be able to search stocks by performance
Users will be able to search stocks based on overall trends in the market
Users will be able to see relevant news stories for the stock acquired
Users will be able to view top performing stocks at top of page
Users will be able to see related news to overall stock performance
Users will be able to visit links to pertinent news sites ex: Market Watch, Motely Fool, Yahoo! Finance etc
Users will be able to visit a tab related to budget advise
Users will be able to visit a tab related to personal finance options ex: credit card recommendations
  ex: link to Credit Karma

-----------------------------------------------------------------------------------------
Backend:
As a returning user I want to be able to log in
As a returning user I want to be able to resume saved progress from my device as a guest/demo account user
As a returning user I want to be able to access a boomark or favorites section from my previous log in
As a returning user I want to reset my password

As an administrator	I want to be able to view performance logs + real time data is being posted
As an administrator	I want to view user activity --> analytics to improve UX design
As an administrator	I want to be able to unlock a user's account
-----------------------------------------------------------------------------------------
Notes:

Flow of logic:
event handler/setInterval
fetch
DOM manipulation

.map .forEach etc are referred to as methods for DOM manipulation


is there a tool that can do what I need, find that tool, use it
DOM manipulation, fetches, iteration techniques
array iteration methods
filter, reduce, forEach, find
objects and arrays
[{a:1},{a:2}].map(x=>x.a)

-----------------------------------------------------------------------------------------
Other code/functionaltiy for later use:

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

const displayStockTickerResults = () => {
  console.log(displayStockTickerResults);
}

const updateStockTicker = (responseJson) => {
  console.log(responseJson);
}


