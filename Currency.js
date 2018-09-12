const Num = require('big.js')

class Currency {

    constructor({ code }) {
        this._code = code;
    }

    static currencyByCode(code) {
        let currency = new Currency({ code });
        this.currencies.push(currency);
        return currency;
    }

    static findByCode(code) {
        return this.currencies.filter(currency => currency.code() === code)[0];
    }

    static byCode(code) {
        let currency = this.findByCode(code);
        if (currency) {
            return currency;
        } else {
            return this.currencyByCode(code);
        }
    }

    static listAll() {
        return this.currencies;
    }

    code() {
        return this._code;
    }

    equals(another) {
        return this.code() === another.code();
    }

}

Currency.currencies = [];

module.exports = Currency;