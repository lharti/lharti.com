import { cn } from './cn'

describe('cn', () => {
    it('should merge class names correctly', () => {
        expect.assertions(1)

        expect(cn('class1', 'class2')).toBe('class1 class2')
    })

    it('should merge Tailwind classes correctly', () => {
        expect.assertions(1)

        expect(cn('p-4', 'p-2')).toBe('p-2')
    })

    it('should handle empty inputs', () => {
        expect.assertions(1)

        expect(cn()).toBe('')
    })
})
