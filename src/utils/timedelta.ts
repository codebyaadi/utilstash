/**
 * Returns a new Date object that is offset from the current date and time by the specified amount.
 *
 * @param {number} years - The number of years to add. Defaults to 0.
 * @param {number} months - The number of months to add. Defaults to 0.
 * @param {number} days - The number of days to add. Defaults to 0.
 * @param {number} hours - The number of hours to add. Defaults to 0.
 * @param {number} minutes - The number of minutes to add. Defaults to 0.
 * @param {number} seconds - The number of seconds to add. Defaults to 0.
 *
 * @returns {Date} A new Date object with the adjusted time.
 */
export const timeDelta = (
  years: number = 0,
  months: number = 0,
  days: number = 0,
  hours: number = 0,
  minutes: number = 0,
  seconds: number = 0
): Date => {
  const now = new Date()

  // Optimize by setting all changes at once
  now.setFullYear(now.getFullYear() + years)
  now.setMonth(now.getMonth() + months)
  now.setDate(now.getDate() + days)
  now.setHours(
    now.getHours() + hours,
    now.getMinutes() + minutes,
    now.getSeconds() + seconds
  )

  return now
}
