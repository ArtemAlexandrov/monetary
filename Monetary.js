const Currency = require('./Currency');
const Num = require('./Num');

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


}

module.exports = Monetary; 