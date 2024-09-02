/**
 * Converts file size in bytes to a human-readable format.
 *
 * @param sizeInBytes - The size of the file in bytes.
 * @param decimals - Number of decimal places to include in the result.
 * @param unit - Optional unit to return the file size in ('Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB').
 *
 * @returns A human-readable file size string (e.g., '1.23 MB').
 *
 * @example
 * ```typescript
 * const size = 1234567;
 * const readableSize = formatFileSize(size);
 * console.log('File size:', readableSize);
 *
 * const readableSizeInMB = formatFileSize(size, 2, 'MB');
 * console.log('File size in MB:', readableSizeInMB);
 * ```
 */
export const formatFileSize = (
  sizeInBytes: number,
  decimals: number = 2,
  unit?: 'Bytes' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' | 'EB' | 'ZB' | 'YB'
): string => {
  if (sizeInBytes === 0) return '0 Bytes'

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  if (unit) {
    const index = sizes.indexOf(unit)
    if (index === -1) throw new Error('Invalid unit provided')
    return (
      parseFloat((sizeInBytes / Math.pow(k, index)).toFixed(decimals)) +
      ' ' +
      sizes[index]
    )
  }

  const i = Math.floor(Math.log(sizeInBytes) / Math.log(k))
  return (
    parseFloat((sizeInBytes / Math.pow(k, i)).toFixed(decimals)) +
    ' ' +
    sizes[i]
  )
}
