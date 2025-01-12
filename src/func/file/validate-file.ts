import { type AcceptedMimeTypes } from '@/types/mime-types'

/**
 * Utility function to validate a file based on type and size.
 * @param file - The file to be validated.
 * @param acceptedTypes - An array of MIME types that are accepted. For example, `['image/jpeg', 'image/png']`.
 * @param maxSize - The maximum allowed file size in bytes.
 * @returns A boolean indicating whether the file is valid.
 * @throws An error if the file is invalid.
 *
 * @example
 * ```typescript
 * import { validateFile } from 'utilstash'
 *
 * const file = 'some-file-object';
 * const acceptedTypes = ['image/jpeg', 'image/png'];
 * const maxSize = 3 * 1024 * 1024; // 3 MB
 *
 * try {
 *   const isValid = validateFile(file, acceptedTypes, maxSize);
 *   console.log('File is valid:', isValid);
 * } catch (error) {
 *   console.error('File validation error:', error.message);
 * }
 * ```
 */
export const validateFile = (
  file: File | null,
  acceptedTypes: AcceptedMimeTypes[],
  maxSize: number
): boolean => {
  if (!file) {
    throw new Error('No file provided.')
  }

  if (!acceptedTypes.includes(file.type as AcceptedMimeTypes)) {
    throw new Error(
      `Invalid file type. Accepted types: ${acceptedTypes.join(', ')}`
    )
  }

  if (file.size > maxSize) {
    throw new Error(
      `File size exceeds the maximum limit of ${(maxSize / (1024 * 1024)).toFixed(2)} MB.`
    )
  }

  return true
}
