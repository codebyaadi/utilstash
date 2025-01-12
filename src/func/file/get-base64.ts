const isBrowser =
  typeof window !== 'undefined' && typeof window.document !== 'undefined'

export const getBase64 = (
  file: File | Buffer,
  mimeType?: string
): Promise<string> => {
  if (isBrowser) {
    return new Promise((resolve, reject) => {
      if (!(file instanceof File)) {
        reject(
          new Error(
            'Invalid file type for browser environment. Expected a File object.'
          )
        )
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        const base64File = reader.result as string
        resolve(`data:${file.type};base64,${base64File.split(',')[1]}`)
      }
      reader.onerror = () => reject(new Error('Error reading file'))

      reader.readAsDataURL(file)
    })
  } else {
    return new Promise((resolve, reject) => {
      if (!(file instanceof Buffer)) {
        reject(
          new Error(
            'Invalid file type for Node.js environment. Expected a Buffer object.'
          )
        )
        return
      }

      const base64File = file.toString('base64')
      const mime = mimeType || 'application/octet-stream' // Provide a default MIME type if not provided
      resolve(`data:${mime};base64,${base64File}`)
    })
  }
}
