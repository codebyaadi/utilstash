/**
 * Sanitizes a given string by replacing all non-alphanumeric characters with hyphens and converting the result to lowercase.
 *
 * This function is useful for creating URL-friendly or filesystem-safe names by ensuring that only alphanumeric characters and hyphens are present.
 *
 * @param name - The input string that needs to be sanitized.
 * @returns A sanitized version of the input string, with non-alphanumeric characters replaced by hyphens and all characters in lowercase.
 *
 * @example
 * ```
 * sanitize("Hello World!"); // "hello-world"
 * sanitize("File_Name123"); // "file-name123"
 * sanitize("My File/Name"); // "my-file-name"
 * ```
 */
export const sanitize = (name: string) =>
  name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
