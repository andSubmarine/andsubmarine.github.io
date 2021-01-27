export interface Coords {
    x1: number,
    y1: number
}

export function coords (id: string): Coords {
  const element = document.getElementById(id)
  if (element) {
    const bb = element.getBoundingClientRect()
    return { x1: bb.left, y1: bb.top }
  } else {
    return { x1: 0, y1: 0 }
  }
}

export function scrollToElement (coords: Coords) {
  window.scrollTo({
    top: coords.y1,
    left: coords.x1,
    behavior: 'smooth'
  })
}
