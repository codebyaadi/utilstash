import { expect, test, describe } from 'bun:test'
import { generateOTP } from '../../src/func/security'

describe('generateOTP', () => {
  // Test default behavior
  describe('Default Parameters', () => {
    test('should generate 4-digit OTP by default', () => {
      const otp = generateOTP()
      expect(otp).toHaveLength(4)
      expect(otp).toMatch(/^\d{4}$/)
    })
  })

  // Test all valid lengths
  describe('Valid Lengths', () => {
    test('should generate 4-digit OTP when length is 4', () => {
      const otp = generateOTP(4)
      expect(otp).toHaveLength(4)
      expect(otp).toMatch(/^\d{4}$/)
    })

    test('should generate 6-digit OTP when length is 6', () => {
      const otp = generateOTP(6)
      expect(otp).toHaveLength(6)
      expect(otp).toMatch(/^\d{6}$/)
    })

    test('should generate 8-digit OTP when length is 8', () => {
      const otp = generateOTP(8)
      expect(otp).toHaveLength(8)
      expect(otp).toMatch(/^\d{8}$/)
    })
  })

  // Test randomness
  describe('Randomness', () => {
    test('should generate different OTPs on subsequent calls', () => {
      const otps = new Set()
      for (let i = 0; i < 100; i++) {
        otps.add(generateOTP(4))
      }
      // With true randomness, it's highly unlikely to get the same OTP in 100 tries
      expect(otps.size).toBeGreaterThan(90)
    })

    test('should include all possible digits (0-9)', () => {
      const otps: string[] = []
      for (let i = 0; i < 100; i++) {
        otps.push(generateOTP(8))
      }
      const allDigits = otps.join('').split('')
      const uniqueDigits = new Set(allDigits)
      expect(uniqueDigits.size).toBe(10) // Should have all digits 0-9
    })
  })

  // Test distribution
  describe('Distribution', () => {
    test('should generate roughly uniform distribution of digits', () => {
      const digitCounts: { [key: string]: number } = {}
      const iterations = 1000

      // Generate many OTPs and count digit occurrences
      for (let i = 0; i < iterations; i++) {
        const otp = generateOTP(8)
        for (const digit of otp) {
          digitCounts[digit] = (digitCounts[digit] || 0) + 1
        }
      }

      // Each digit should appear roughly the same number of times
      // Allow for some variation (±20% from expected)
      const expectedCount = (iterations * 8) / 10 // Total digits / 10 (for each possible digit)
      const margin = expectedCount * 0.2

      for (let i = 0; i < 10; i++) {
        const count = digitCounts[i] || 0
        expect(count).toBeGreaterThan(expectedCount - margin)
        expect(count).toBeLessThan(expectedCount + margin)
      }
    })
  })

  // Test leading zeros
  describe('Leading Zeros', () => {
    test('should preserve leading zeros', () => {
      let foundLeadingZero = false
      for (let i = 0; i < 100; i++) {
        const otp = generateOTP(4)
        if (otp.startsWith('0')) {
          foundLeadingZero = true
          break
        }
      }
      expect(foundLeadingZero).toBe(true)
    })
  })

  // Test type safety
  describe('Type Safety', () => {
    test('should not accept invalid lengths', () => {
      // @ts-expect-error - Testing invalid input
      expect(() => generateOTP(5)).toThrow()
      // @ts-expect-error - Testing invalid input
      expect(() => generateOTP(7)).toThrow()
      // @ts-expect-error - Testing invalid input
      expect(() => generateOTP(0)).toThrow()
    })
  })

  // Performance test
  describe('Performance', () => {
    test('should generate OTP quickly', () => {
      const start = performance.now()
      for (let i = 0; i < 1000; i++) {
        generateOTP(8)
      }
      const end = performance.now()
      const duration = end - start

      // Should generate 1000 OTPs in less than 100ms
      expect(duration).toBeLessThan(100)
    })
  })
})
