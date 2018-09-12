const Currency = require('./Currency');
const CurrencyRate = require('./CurrencyRate');

class Exchange {

    constructor() {
        this.rates = [];
    }

    setRate(fromCurrencyCode, toCurrencyCode, price) {
        let fromCurrency = Currency.currencyByCode(fromCurrencyCode),
            toCurrency = Currency.currencyByCode(toCurrencyCode),
            rate = new CurrencyRate(fromCurrency, toCurrency, price),
            invertedRate = new CurrencyRate(toCurrency, fromCurrency, 1 / price);
        this.rates.push(rate);
        this.rates.push(invertedRate);
        return rate;
    }

    getRate(fromCurrencyCode, toCurrencyCode) {
        let fromCurrency = Currency.currencyByCode(fromCurrencyCode),
            toCurrency = Currency.currencyByCode(toCurrencyCode);
        return this.rates.filter(rate => rate.fromCurrency().equals(fromCurrency) && rate.toCurrency().equals(toCurrency))[0];
    }

    convert(monetary, toCurrency) {
        let currencyRate = this.getRate(monetary.currency().code(), toCurrency);
        return currencyRate.rate().times(monetary.amount());
    }

}

module.exports = Exchange; 