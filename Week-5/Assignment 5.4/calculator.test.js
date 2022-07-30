const mathOperations = require('./calculator')

test('sum test case', () => {
    const su = mathOperations.sum(2, 3)
    expect(su).toBe(5)
})

test('sum test case', () => {
    const su = mathOperations.diff(2, 3)
    expect(su).toBe(-1)
})

test('sum test case', () => {
    const su = mathOperations.product(2, 3)
    expect(su).toBe(6)
})
