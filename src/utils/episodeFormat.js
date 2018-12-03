export default (num) => {
  if (typeof num !== 'number') return ''

  const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

  return roman[num - 1]
}
