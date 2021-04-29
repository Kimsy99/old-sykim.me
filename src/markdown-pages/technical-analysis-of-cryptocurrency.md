---
title: "Technical Analysis in Cryptocurrency"
date: "2021-4-18"
categories: "Cryptocurrency"
---

<!-- # Technical Analysis in Cryptocurrency -->

Recently, I have been obsessed with cryptocurrency and also my University final year project is a Data Science & Machine Learning Project that are related to cryptocurrency. In this project it require me to have some knowledge in technical analysis to complete this project.
Therefore here are some notes from my study of technical analysis in cryptocurrency.

## What is Technical Analysis

Technical analysis is basically using existing, past data from the cryptocurrency/stock market to predict the where it will go next. It may allow you to forecast whether the project will bearish (trending down) or bullish (trending up). By knowing that, it allows us to know when the market is low (so that we can buy in low price) and high (sell when high price) to gain profit.

> TA uses past data to forecast the future.

However it is not confirmed that TA forecast is 100% accurate as it is impossible to know what will happen in the future especially with the cryptocurrency market (as it is extreamly volatile, affected by media, influencer, giant whales, governemnt, banks).

## Technical Analysis in Cryptocurrency

### Candlestick

When you are looking at at realtime cryptocurrencies charts like [Coingecko](https://www.coingecko.com/en), you will see vertical bars with green/red/pink colors. But do you know what does it meant?

**Gap between rectangle**

- shows the gap between opening and closing balance for that coin during the period of time.
- so for and example the top edge is RM30000 and the bottom edge is RM25000, then the gap between them is RM5000.

**Color of rectangle**

- Red means value decrease, green means value increase
- If the rectangle is green, then the top edge of rectangle is closing price while bottom edge is open price, vice versa for red rectangle
- Green is good as the value of the coin increase (open with lower price but close with high price in market)
- Eg. within 1 hour (11pm to 12pm), at 11pm the price of the coin at that time is RM100 (this is the open price), while at 12pm the price of the coin is RM200 (this is close price). Then it will be a green rectangle with upper edge - RM200 and lower edge - RM100. Gap/rise of RM100.
- This is useful to show how volatile the market is within the period of time (can be 1 hour, 24 hour, 1 week or more).
- if the market is more volatile, it means that the marking is able to goes up or goes down alot within a period of time.

**Wick**
There are wick on the bottom of the chart. Shorter it is then is it suggest that people are selling the coin and vice versa.

### Volume

- Usually on the bottom of price chart
- It basically represent the volumn of sales, which is number of coins traded in a period of time.
- Usually, higher volume -> result in higher volatality.
- Usually we analyze it together with candlestock.
  - If volume of trades is low -> then usually less volatile, so there less likely to have large changes in price
  - If volume of trades is high -> then highly volatile, so there more likely to have large changes in price

### Moving Average (MA)

- Price movement across a section of time (days, weeks, months, years)
- We should consider the moving average so that we do not get tricked by the market into selling of buying crypto at the wrong

**2 main type of MA**

1. Simple Moving Average (SMA)

   SMA is the Average closing price over period of time. For example, we have in 7 day period, the SMA value of that day is sum of closing price today and previous 6 days divided by 7.

   SMA shows the trend of market over time. So that we can take bird eye view on the market for longer time period.

   Eg. SMA(7) -> SMA for 7 days

2. Exponential Moving Average (EMA)

   Different approach than SMA that treat closing balance of each day equally, EMA weight each day differently based on its proximity to the current day.
   Therefore it is more reactionary and can adapt quicker to volatility in the market

**How MA help us to read the market?**

> MA shows the support and resistance to buying or selling crypto at a certain price point

```js
/*"Formula" of reading market with MA*/
if (closing_price < MA) {
  // hard to sell -> resistance at that point where people are selling
}
if (closing_price > MA) {
  // good to sell (as it might be overpriced now) -> support in the form of people buying at that price
}
```

**Rule of thumb for MA**
Longer period provide more robust indication of whether the correct figure is reached.

**How traders automate trading with MA**

> For example, imagine that the price of a coin is at $10, and the moving average is $15. A trader may create a smart contract with an exchange that stipulates a purchase of 100 coins when the price hits $15. That’s because a movement like this would suggest a bullish market and a likely price increase beyond that. Conversely, if the price of the coin then rose to $20, the moving average would rise with it, perhaps getting to $17. At this point, the trader may set a sell limit of $17, whereby those 100 coins will be sold if the market shows a bearish trend and dips back below the moving average. In this scenario, the trader has used the moving average as a guide to hopefully make a minimum profit of \$2 per coin.(Retrieved from https://www.finder.com/my/cryptocurrency-technical-analysis)

### How to trade with trend

![trend image](https://www.finder.com/finder-au/wp-uploads/2018/04/How-to-read-a-trend-line-.jpg?fit=1200)

1. Select a period of time
2. Make a plot on the lowest candlestick - Point A
3. Plot another day higher than A (later than A) - Point B
4. View the trend - Upward trend.

Example of ploting trends
![](https://www.finder.com/finder-au/wp-uploads/2018/04/How-to-relative-strength-index.jpg?fit=1200)

### Relative Strength Index (RSI)

The RSI looks at the momentum in a coin’s trading history to try and predict whether it is overbought or oversold. It’s represented by a scale of 0 to 100 (with 100 being the overbought end) and looks back over 14 periods in establishing its number.

> RSI = (average gains over a 14-day period)/(average losses)

- Overbought (RSI > 70) - extended period of gain
- Oversold (RSI < 30) - extended period of losses

..TBC..

## Resource

[How to do technical analysis and read the cryptocurrency market
](https://www.finder.com/my/cryptocurrency-technical-analysis)
