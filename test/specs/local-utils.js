import * as Utils from '../../src/script/local-utils'

describe('Determine Utils', () => {
    it('function isTrue', () => {
        expect(Utils.isTrue(false)).toBeFalsy()
        expect(Utils.isTrue(null)).toBeFalsy()
        expect(Utils.isTrue(undefined)).toBeFalsy()
        expect(Utils.isTrue(Infinity)).toBeFalsy()
        expect(Utils.isTrue(NaN)).toBeFalsy()
        expect(Utils.isTrue('')).toBeFalsy()
        expect(Utils.isTrue([])).toBeFalsy()
        expect(Utils.isTrue({})).toBeFalsy()
        expect(Utils.isTrue(0)).toBeTruthy()
    })
    it('function isNumeric', () => {
        expect(Utils.isNumeric(0)).toBeTruthy()
        expect(Utils.isNumeric('0')).toBeTruthy()
        expect(Utils.isNumeric(Infinity)).toBeFalsy()
        expect(Utils.isNumeric('0', false)).toBeFalsy()
        expect(Utils.isNumeric('')).toBeFalsy()
        expect(Utils.isNumeric(NaN)).toBeFalsy()
    })
})
