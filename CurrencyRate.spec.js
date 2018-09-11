const CurrencyRate = require('./CurrencyRate');
const Currency = require('./Currency');
describe('CurrencyRate', () => {

    describe('getters', () => {
        let usd = new Currency('USD'),
            euro = new Currency('EURO'),
            currencyRate = new CurrencyRate(usd, euro, 0.5);

        it('#fromCurrency()', () => {
            expect(currencyRate.fromCurrency().equals(new Currency('USD'))).toBeTruthy()
        });

        it('#toCurrency()', () => {
            expect(currencyRate.toCurrency().equals(new Currency('EURO'))).toBeTruthy();
        });

        it('#rate()', () => {
            expect(currencyRate.rate().toFixed(8)).toEqual('0.50000000');
        });

    });

});