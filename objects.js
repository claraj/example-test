/* Can you convert $100 into Bitcoin? 
Can you print (console.log) the currency descriptions and the rates, one per line? 
*/

let bitcoinObject = {
    "bpi":{
       "EUR":{
          "code":"EUR",
          "description":"Euro",
          "rate":"815.8994",
          "rate_float":815.8994,
          "symbol":"&euro;"
       },
       "GBP":{
          "code":"GBP",
          "description":"British Pound Sterling",
          "rate":"677.4879",
          "rate_float":677.4879,
          "symbol":"&pound;"
       },
       "USD":{
          "code":"USD",
          "description":"United States Dollar",
          "rate":"728.4816",
          "rate_float":728.4816,
          "symbol":"&#36;"
       }
    },
    "chartName":"Bitcoin",
    "disclaimer":"This data was generated by creating random numbers and mimics the Coinbase API JSON response structure. It is NOT real data. DO NOT USE THIS TO TRADE CRYPTOCURRENCY!",
    "time":{
       "updatedISO":"2023-02-14T20:16:14.370072"
    }
 }

 // use . notation if we know the property name
 let usdExchangeRate = bitcoinObject.bpi.USD.rate_float
 let dollarAmount = 100
 let bitcoinAmount = dollarAmount * usdExchangeRate
 console.log('Bitcoin value is ' + bitcoinAmount)
 console.log(usdExchangeRate)


let rates = bitcoinObject.bpi  // rates is an object 


for (currencyCode in rates) { 
    //console.log(currencyCode)
    let rateData = rates[currencyCode]
    //console.log(rateData)
    let rate = rateData.rate
    let description = rateData.description
    console.log(`${description} ${rate}`)

}
 
// alternative - can be used if you know the property name 
//  let usdExchangeRate = bitcoinObject['bpi']['USD']

// or, if the property name is in a variable 
//  let currency = 'USD'
//  let usdExchangeRate = bitcoinObject['bpi'][currency]



 



