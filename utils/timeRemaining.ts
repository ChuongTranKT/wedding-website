export const calculateTimeRemaining = () => {
  const endTime: any = new Date('2024-09-23T00:00:00')
  const currentTime: any = new Date()
  const timeDifferent = endTime - currentTime

  const days = Math.floor(timeDifferent / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeDifferent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeDifferent % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDifferent % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}
