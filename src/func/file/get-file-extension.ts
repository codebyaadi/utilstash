/**
 * Retrieves the file extension from a `File` object.
 *
 * @param file - The file to retrieve the extension from.
 *
 * @returns The file extension (e.g., 'jpg', 'png').
 *
 * @throws {Error} Throws an error if no file is provided or if the file name does not contain an extension.
 *
 * @example
 * ```typescript
 * const file = 'some-file-object';
 * const extension = getFileExtension(file);
 * console.log('File extension:', extension);
 * ```
 */
export const getFileExtension = (file: File): string => {
  if (!file) {
    throw new Error('No file provided')
  }

  const filename = file.name
  const parts = filename.split('.')

  if (parts.length < 2) {
    throw new Error('File name does not contain an extension')
  }

  return parts.pop()!
}
