// prgm to convert currency

// Custom exchange rates (relative to USD)
const exchangeRates = {
    USD: { USD: 1, EUR: 0.92, GBP: 0.78, INR: 83, KES: 130, KWD: 0.31, TZS: 2550 },
    EUR: { USD: 1.09, EUR: 1, GBP: 0.85, INR: 90, KES: 140, KWD: 0.34, TZS: 2700 },
    GBP: { USD: 1.28, EUR: 1.18, GBP: 1, INR: 105, KES: 165, KWD: 0.41, TZS: 3200 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0095, INR: 1, KES: 1.57, KWD: 0.0037, TZS: 30 },
    KES: { USD: 0.0077, EUR: 0.0071, GBP: 0.0061, INR: 0.64, KES: 1, KWD: 0.0023, TZS: 19 },
    KWD: { USD: 3.24, EUR: 2.97, GBP: 2.43, INR: 271, KES: 440, KWD: 1, TZS: 8400 },
    TZS: { USD: 0.00039, EUR: 0.00037, GBP: 0.00031, INR: 0.033, KES: 0.053, KWD: 0.00012, TZS: 1 }
};

function Conversition()
{ 
const fromCurrency = document.getElementById("fromCurrency").value;
const toCurrency = document.getElementById("toCurrency").value;
const mynumber = document.getElementById("mynumber");
const result = document.getElementById("result");

let amount = Number(mynumber.value);

    if(!amount){
        result.textContent = "Please Enter Amount";
        return;
    }

    // Fetch exchange rate from the custom rates object
    
    let rate = exchangeRates[fromCurrency]?.[toCurrency];
    if(!rate){//If a currency is missing from exchangeRates, rate will be undefined.
        result.textContent = "Invalid conversion rate";
        return;
    }
    let convertedAmount = (amount * rate).toFixed(2);
    result.textContent = `Converted Amount:${convertedAmount} ${toCurrency}`;
     
}
function Resetform(){
    // Resets all form elements
    document.getElementById("currencyForm").reset(); 

    //Clear the Output
    result.textContent = "";
}