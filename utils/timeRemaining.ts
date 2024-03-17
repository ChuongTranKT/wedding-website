export const calculateTimeRemaining = (endDateTime: string) => {
  const endTime: any = new Date(endDateTime)
  const currentTime: any = new Date()
  const timeDifferent = endTime - currentTime

  const days = Math.floor(timeDifferent / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeDifferent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeDifferent % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDifferent % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}
