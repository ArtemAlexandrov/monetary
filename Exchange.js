const Currency = require('./Currency');
const CurrencyRate = require('./CurrencyRate');
const Num = require('./Num');

class Exchange {

    constructor() {
        this.rates = [];
    }

    setRate(fromCurrencyCode, toCurrencyCode, price) {
        let fromCurrency = Currency.currencyByCode(fromCurrencyCode),
            toCurrency = Currency.currencyByCode(toCurrencyCode),
            rate = new CurrencyRate(fromCurrency, toCurrency, price);
        this.rates.push(rate);
        return rate;
    }

    getRate(fromCurrencyCode, toCurrencyCode) {
        let fromCurrency = Currency.currencyByCode(fromCurrencyCode),
            toCurrency = Currency.currencyByCode(toCurrencyCode);
        return this.rates.filter(rate => rate.fromCurrency().equals(fromCurrency) && rate.toCurrency().equals(toCurrency))[0];
    }

    convert(monetary, toCurrency) {
        let currencyRate = this.getRate(monetary.currency().code(), toCurrency),
            invertRate = this.getRate(toCurrency, monetary.currency().code());
        if (currencyRate) return currencyRate.rate().times(monetary.amount());
        if (invertRate) return invertRate.rate().div(monetary.amount());
    }

}

module.exports = Exchange; 