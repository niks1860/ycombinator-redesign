export const getHost = (url: string) => {
  try {
    return `(${new URL(url).host})`
  } catch {
    return ""
  }
}
