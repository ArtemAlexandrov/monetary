const Currency = require('./Currency');

describe('Currency', () => {

    describe('#buildByCode', () => {

        it('build new Currency by code', () => {
            let currency = Currency.buildByCode('USD');
            expect(currency instanceof Currency).toBeTruthy();
        });

    });

    describe('#equals', () => {

        it('returns true when currencies are equals', () => {
            let usd = Currency.buildByCode('USD'),
                usd2 = Currency.buildByCode('USD');
            expect(usd.equals(usd2)).toBeTruthy();
        });

        it('returns false when currencies are different', () => {
            let usd = Currency.buildByCode('USD'),
                euro = Currency.buildByCode('EURO');
            expect(usd.equals(euro)).toBeFalsy();
        });


    });

});