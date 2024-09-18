import { TIMEZONES, type Timezone } from '@/types/tz-types'

/**
 * Converts a date from one timezone to another.
 *
 * @param {Date} date - The date object to be converted.
 * @param {Timezone} targetTimezone - The IANA timezone string to convert to.
 *
 * @returns {string} A formatted date string in the target timezone.
 */
export const convertTimezone = (
  date: Date,
  targetTimezone: Timezone
): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: targetTimezone
  }

  return new Intl.DateTimeFormat('en-US', options).format(date)
}

/**
 * Returns the current date and time in the specified timezone.
 *
 * @param {Timezone} timezone - The IANA timezone string.
 *
 * @returns {string} A formatted date string in the specified timezone.
 */
export const nowInTimezone = (timezone: Timezone): string => {
  const now = new Date()
  return convertTimezone(now, timezone)
}

/**
 * Checks if the given timezone is valid and exists in the TIMEZONES array.
 *
 * @param {string} timezone - The timezone string to check.
 *
 * @returns {boolean} Returns true if valid, false otherwise.
 */
export const isValidTimezone = (timezone: string): timezone is Timezone => {
  return TIMEZONES.includes(timezone as Timezone)
}
