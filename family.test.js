const RoyalFamily = require('./family')

describe('relation class', () => {

    test('has name', () => {
        const testRoyalFamily = new RoyalFamily("Charlotte", [{ name: 'William'}, { name: 'Catherine'}])
        expect(testRoyalFamily.name).toStrictEqual("Charlotte")
    })  

    test('has parent', () => {
        const testRoyalFamily = new RoyalFamily("Charlotte", [{ name: 'William'}, { name: 'Catherine'}])
        expect(testRoyalFamily.parents).toStrictEqual([{ name: 'William'}, { name: 'Catherine'}])
    })

    test('has childOf', () => {
        const testRoyalFamily = new RoyalFamily("Charlotte", [{ name: 'William'}, { name: 'Catherine'}])
        expect(testRoyalFamily.childOf()).toBe('William & Catherine')
    })
})
