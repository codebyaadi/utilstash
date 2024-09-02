type TimeUnit = 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'

/**
 * Calculates the difference between a given timestamp and the current time in the specified unit.
 *
 * The function computes the time elapsed from the provided timestamp to the current time,
 * and returns the difference in the unit specified (seconds, minutes, hours, days, months, or years).
 *
 * @param timestamp - The past date and time to compare against the current time.
 * @param unit - The unit of time in which to express the difference ('second', 'minute', 'hour', 'day', 'month', 'year').
 * @returns The time difference in the specified unit as a number. Returns 0 if the unit is not recognized.
 *
 * @example
 * ```typescript
 * const timestamp = new Date('2023-01-01T00:00:00Z');
 * const diffInDays = calcTimeDiff(timestamp, 'day');
 * console.log(diffInDays); // Output: Difference in days
 * ```
 */
export const calcTimeDiff = (timestamp: Date, unit: TimeUnit): number => {
  const now = new Date().getTime()
  const time = new Date(timestamp).getTime()
  const diffInMs = now - time

  switch (unit) {
    case 'second':
      return Math.floor(diffInMs / 1000)
    case 'minute':
      return Math.floor(diffInMs / 1000 / 60)
    case 'hour':
      return Math.floor(diffInMs / 1000 / 60 / 60)
    case 'day':
      return Math.floor(diffInMs / 1000 / 60 / 60 / 24)
    case 'month':
      return Math.floor(diffInMs / 1000 / 60 / 60 / 24 / 30)
    case 'year':
      return Math.floor(diffInMs / 1000 / 60 / 60 / 24 / 365)
    default:
      return 0
  }
}
