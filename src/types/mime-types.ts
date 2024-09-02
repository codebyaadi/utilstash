/**
 * A type representing various accepted MIME types for files.
 * This type includes common MIME types for documents, images, audio, video, and other file formats.
 *
 * Examples of included MIME types:
 * - 'application/pdf': PDF document
 * - 'image/jpeg': JPEG image
 * - 'video/mp4': MP4 video
 *
 * This type is used to validate file types for uploads or processing within the application.
 */
export type AcceptedMimeTypes =
  | 'application/zip'
  | 'application/x-rar-compressed'
  | 'application/x-tar'
  | 'application/x-7z-compressed'
  | 'application/x-bzip'
  | 'application/x-bzip2'
  | 'application/x-cbr'
  | 'application/pdf'
  | 'application/msword'
  | 'application/vnd.ms-excel'
  | 'application/vnd.ms-powerpoint'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  | 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  | 'application/json'
  | 'application/xml'
  | 'application/gzip'
  | 'audio/mpeg'
  | 'audio/ogg'
  | 'audio/wav'
  | 'audio/webm'
  | 'image/jpeg'
  | 'image/png'
  | 'image/gif'
  | 'image/svg+xml'
  | 'image/webp'
  | 'text/plain'
  | 'text/html'
  | 'text/css'
  | 'text/csv'
  | 'text/xml'
  | 'video/mp4'
  | 'video/webm'
  | 'video/ogg'
