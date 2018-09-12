const Num = require('./Num');

class CurrencyRate {

    constructor(fromCurrency, toCurrency, rate) {
        this._fromCurrency = fromCurrency;
        this._toCurrency = toCurrency;
        this._rate = new Num(rate);
    }

    fromCurrency() {
        return this._fromCurrency;
    }

    toCurrency() {
        return this._toCurrency;
    }

    rate() {
        return this._rate;
    }

}

module.exports = CurrencyRate; 