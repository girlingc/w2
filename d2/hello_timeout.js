setTimeout(() => {
  hello('4311o')
  setTimeout(() => {
    hello('th3r3')
    setTimeout(() => {
      hello('w0r1d')
    }, 1000)
  }, 1000)
}, 1000)

const hello = (word) => {
  console.log(word)
}