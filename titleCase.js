const titleCase = (sentence) => {
  if (sentence === ''){
    return sentence
  }
  const lower = sentence.toLowerCase()
  const split = lower.split(' ');
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i][0].toUpperCase() + split[i].substr(1);
  }
  const result = split.join(' ')
  return result
}

console.log(titleCase('i am writing in lowercase'))
console.log(titleCase('ASD sD SFsfsfSFSFSD sfsffs SfSF'))
console.log(titleCase(''))