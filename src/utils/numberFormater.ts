const numberFormatter = (input: number) => {
    let regex = /(\d+)(\d{3})/
    let inputString = String(input)
  
    while (regex.test(inputString)) {
      inputString = inputString.replace(regex, '$1' + '.' + '$2')
    }
  
    return inputString
}
  
export default numberFormatter