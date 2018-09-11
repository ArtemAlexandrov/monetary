class Exchange {

    constructor() {
        this.rates = [];
    }

    addRate(fromCurrencyCode, toCurrencyCode, price) {
        let fromCurrency = Currency.byCode(fromCurrencyCode),
            toCurrency = Currency.byCode(toCurrencyCode),
            rate = new CurrencyRate(fromCurrency, toCurrency, price),
            invertedRate = new CurrencyRate(fromCurrency, toCurrency, price);
        this.rates.push(rate);
        this.rates.push(invertedRate);
        return rate;
    }

    rate(fromCurrency, toCurrency) {
        this.rates.filter(rate => rate.fromCurrency())
    }

}

module.exports = Exchange; 