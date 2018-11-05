import add from './index'

test('add(1,2)', () => {
	expect(add(1,2)).toBe(3)
})

test('add(1,2,3)', () => {
	expect(add(1,2,3)).toBe(6)
})

// Fail on purpose
test('add(1,2,3,4)', () => {
	expect(add(1,2,3,4)).toBe(6)
})
