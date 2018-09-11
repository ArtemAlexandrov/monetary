const Monetary = require('./Monetary');

describe('Monetary calculations', () => {

    it('1 usd + 2 usd equals 3 usd', () => {
        let oneDollar = new Monetary(1, 'USD'),
            twoDollars = new Monetary(2, 'USD'),
            threeDollars = new Monetary(3, 'USD');
        expect(oneDollar.plus(twoDollars).equals(threeDollars)).toBeTruthy()
    });

});