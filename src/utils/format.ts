export const formatPoints = (points: string | number): string => {
  const minus = Number(points) < 0

  let n = Number(points).toString()
  let r = ''
  let x = 0

  for (let i = n.length; i > 0; i--) {
    r += n.substr(i - 1, 1) + (x == 2 && i != 1 ? '.' : '')
    x = x == 2 ? 0 : x + 1
  }
  return `${minus ? '-' : ''}${r.split('').reverse().join('')}`
}

export interface IFlightsStops {
  name: string
  iata: string
  duration: string
}
