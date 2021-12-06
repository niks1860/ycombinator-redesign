export function timeDifferenceToString(time: number) {
  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerMonth = msPerDay * 30
  const msPerYear = msPerDay * 365

  const delta = new Date().getTime() - time

  if (delta < msPerMinute) {
    return Math.floor(delta / 1000) + " seconds ago"
  } else if (delta < msPerHour) {
    return Math.floor(delta / msPerMinute) + " minutes ago"
  } else if (delta < msPerDay) {
    return Math.floor(delta / msPerHour) + " hours ago"
  } else if (delta < msPerMonth) {
    return Math.floor(delta / msPerDay) + " days ago"
  } else if (delta < msPerYear) {
    return Math.floor(delta / msPerMonth) + " months ago"
  } else {
    return Math.floor(delta / msPerYear) + " years ago"
  }
}
