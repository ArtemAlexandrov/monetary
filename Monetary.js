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

    equals(monet) {
        return ((this.amount().eq(monet.amount())) && (this.currency().equals(monet.currency())));
    }

}

module.exports = Monetary; 