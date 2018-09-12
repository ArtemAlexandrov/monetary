const Currency = require('./Currency');
const Num = require('./Num');
const Exchange = require('./Exchange');

class Monetary {

    constructor(amount, currencyCode) {
        this._amount = Num(amount);
        this._currency = new Currency({ code: currencyCode })
    }

    amount() {
        return this._amount;
    }

    currency() {
        return this._currency;
    }

    plus(monet) {
        return new Monetary(this.amount().plus(monet.amount()), this.currency().code());
    }

    minus(monet) {
        return new Monetary(this.amount().minus(monet.amount()), this.currency().code());
    }

    times(times) {
        return new Monetary(this.amount().times(times), this.currency().code());
    }

    div(times) {
        return new Monetary(this.amount().div(times), this.currency().code());
    }

    equals(monet) {
        return ((this.amount().eq(monet.amount())) && (this.currency().equals(monet.currency())));
    }

    static setRate(fromCurrencyCode, toCurrencyCode, rate) {
        this.exchange.setRate(fromCurrencyCode, toCurrencyCode, rate);
    }

    toCurrency(currencyCode) {
        return new Monetary(Monetary.exchange.convert(this, currencyCode), currencyCode);
    }

}

Monetary.exchange = new Exchange();

module.exports = Monetary; 