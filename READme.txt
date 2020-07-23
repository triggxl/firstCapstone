App to display multiple stocks in real time, login to access favorited stocks
-----------------------------------------------------------------------------------------
To-Do's:

1. Display real time stock tickers (setInterval)
2. alert message upon log in ('user logged in!');
3. use DOM manipulation to display search results from 'Search the Market' on page
4. display latest/most relevant news stories in 'News Stories' section on load

promise.all()
fetch data for:
stock tickers
search the market
news stories

make an AJAX request to retrieve market data using setInterval(function, miliseconds) from required API
.then use DOM manipulation to change stock ticker on page

I'm wanting to display the responseJson in the console 
to reference key value pairs I can use to display in the DOM

Encrypting text:
https://css-tricks.com/snippets/css/password-input-bullet-alternatives/

-----------------------------------------------------------------------------------------
User Flows: (Simple and Complex)

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
