function easter(Y) {
  // https://en.wikipedia.org/wiki/Computus#Anonymous_Gregorian_algorithm
  var a = Y % 19,
    b = Math.floor(Y / 100),
    c = Y % 100,
    d = Math.floor(b / 4),
    e = b % 4,
    f = Math.floor((b + 8) / 25),
    g = Math.floor((b - f + 1) / 3),
    h = (19 * a + b - d - g + 15) % 30,
    i = Math.floor(c / 4),
    k = c % 4,
    l = (32 + 2 * e + 2 * i - h - k) % 7,
    m = Math.floor((a + 11 * h + 22 * l) / 451),
    M = Math.floor((h + l - 7 * m + 114) / 31),
    D = ((h + l - 7 * m + 114) % 31) + 1
  return new Date(Y, M - 1, D)
}

if (typeof exports === 'object') {
  module.exports = easter
}
