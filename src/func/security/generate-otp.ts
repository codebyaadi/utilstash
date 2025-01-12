/**
 * Generates a One-Time Password (OTP) with a specified length.
 *
 * @param {4 | 6 | 8} [length=4] - The length of the OTP. Can be 4, 6, or 8. Defaults to 4.
 * @returns {string} The generated OTP as a string of digits.
 */
export const generateOTP = (length: 4 | 6 | 8 = 4): string => {
  const digits = '0123456789'
  let otp = ''

  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * 10)]
  }

  return otp
}
