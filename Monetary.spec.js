const Monetary = require('./Monetary');

describe('Monetary', () => {

    describe('#equals', () => {

        it('1 usd equal 1 usd', () => {
            let first = new Monetary(1, 'USD'),
                second = new Monetary(1, 'USD');
            expect(first.equals(second)).toBeTruthy()
        });

        it('1 usd not equal 1 euro', () => {
            let first = new Monetary(1, 'USD'),
                second = new Monetary(1, 'EURO');
            expect(first.equals(second)).toBeFalsy()
        });

        it('1 usd not equal 2 usd', () => {
            let first = new Monetary(1, 'USD'),
                second = new Monetary(2, 'USD');
            expect(first.equals(second)).toBeFalsy()
        });


    });

    describe('calculations', () => {

        it('1 usd + 2 usd equals 3 usd', () => {
            let oneDollar = new Monetary(1, 'USD'),
                twoDollars = new Monetary(2, 'USD'),
                threeDollars = new Monetary(3, 'USD');
            expect(oneDollar.plus(twoDollars).equals(threeDollars)).toBeTruthy()
        });

        it('3 usd - 1 usd equals 2 usd', () => {
            let oneDollar = new Monetary(1, 'USD'),
                twoDollars = new Monetary(2, 'USD'),
                threeDollars = new Monetary(3, 'USD');
            expect(threeDollars.minus(oneDollar).equals(twoDollars)).toBeTruthy()
        });

        it('1 dollar two times are 2 dollars', () => {
            let oneDollar = new Monetary(1, 'USD'),
                twoDollars = new Monetary(2, 'USD');
            expect(oneDollar.times(2).equals(twoDollars)).toBeTruthy()
        });

        it('4 dollars div to 2 are 2 dollars', () => {
            let fourDollars = new Monetary(4, 'USD'),
                twoDollars = new Monetary(2, 'USD');
            expect(fourDollars.div(2).equals(twoDollars)).toBeTruthy()
        });

    });

    describe('convert money', () => {

        it('convert 1 BTC to 6500 USD with rate 6500', () => {
            Monetary.setRate('BTC', 'USD', 6500);
            let oneBitcoin = new Monetary(1, 'BTC'),
            manyDollars = new Monetary(6500, 'USD');
            expect(oneBitcoin.toCurrency('USD').equals(manyDollars)).toBeTruthy();
        });

        it('convert 6500 USD to 1 BTC with rate 6500', () => {
            // TODO: Разобраться
            Monetary.setRate('BTC', 'USD', 6500);
            let oneBitcoin = new Monetary(1, 'BTC'),
            manyDollars = new Monetary(6500, 'USD');
            expect(manyDollars.toCurrency('BTC').equals(oneBitcoin)).toBeTruthy();
        });

    });



});
