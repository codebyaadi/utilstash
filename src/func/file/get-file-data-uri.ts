/**
 * Converts a `File` object to a Data URI (Base64 encoded).
 *
 * @param file - The file to be converted. Must be of type `File`.
 *
 * @returns A promise that resolves to a Data URI string representing the file in Base64 encoding.
 *
 * @throws {Error} Throws an error if no file is provided or if an error occurs during conversion.
 *
 * @example
 * ```typescript
 * import { getFileDataURI } from 'utilstash';
 *
 * const file = 'some-file-object';
 *
 * try {
 *   const dataURI = await getFileDataURI(file);
 *   console.log('Data URI:', dataURI);
 * } catch (error) {
 *   console.error('Error converting file to Data URI:', error.message);
 * }
 * ```
 */
export const getFileDataURI = async (file: File): Promise<string> => {
  if (!file) {
    throw new Error('No file provided')
  }

  const mimeType = file.type
  const fileData = await file.arrayBuffer()
  const base64File = Buffer.from(fileData).toString('base64')

  return `data:${mimeType};base64,${base64File}`
}
