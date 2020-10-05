function displayDate(date) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  let unFormatted = new Date(date)
  return (
    months[unFormatted.getMonth()] +
    ' ' +
    unFormatted.getDate() +
    ', ' +
    unFormatted.getFullYear()
  )
}

export { displayDate }
