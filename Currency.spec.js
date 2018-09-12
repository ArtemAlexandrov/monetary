const Currency = require('./Currency');

describe('Currency', () => {

    describe('#buildByCode', () => {

        it('build new Currency by code', () => {
            let currency = Currency.currencyByCode('USD');
            expect(currency instanceof Currency).toBeTruthy();
        });

    });

    describe('#equals', () => {

        it('returns true when currencies are equals', () => {
            let usd = Currency.currencyByCode('USD'),
                usd2 = Currency.currencyByCode('USD');
            expect(usd.equals(usd2)).toBeTruthy();
        });

        it('returns false when currencies are different', () => {
            let usd = Currency.currencyByCode('USD'),
                euro = Currency.currencyByCode('EURO');
            expect(usd.equals(euro)).toBeFalsy();
        });


    });

});