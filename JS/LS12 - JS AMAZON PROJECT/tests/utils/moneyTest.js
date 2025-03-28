import formatCurrency from "../../js/utils/money.js";

describe('TEST SUIT - formatCurrency', () => {
    it('Converts cents to dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    it('Works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });
    it('Rounds up', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
    //16A
    it('Rounds down', () => {
        expect(formatCurrency(2000.4)).toEqual('20.00');
    });
    //16B
    it('Negative number', () => {
        expect(formatCurrency(-100)).toEqual('-1.00');
    });
});