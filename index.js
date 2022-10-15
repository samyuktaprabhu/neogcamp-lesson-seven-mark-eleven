const inputBirthday = document.querySelector('#input-birthday')
const inputNumber = document.querySelector('#input-number')
const btnCheck = document.querySelector('#btn-check')
const outputText = document.querySelector('#output-text')

function isLucky(num, luckyNum) {
  return num % luckyNum == 0
    ? ' Your birthday is lucky 🥳'
    : 'Your birthday is not lucky 😕'
}

function sumOfDigits(dob) {
  var sumdob = 0
  for (var i = 0; i < dob.length; i++) {
    sumdob = sumdob + parseInt(dob[i])
  }
  return sumdob
}

btnCheck.addEventListener('click', callbackHandler)

function callbackHandler() {
  const dob = inputBirthday.value
  const luckyNum = inputNumber.value
  console.log(dob)
  if (dob && luckyNum > 0) {
    const filteredDob = dob.replaceAll('-', '')
    const sumDob = sumOfDigits(filteredDob)
    const res = isLucky(sumDob, luckyNum)
    outputText.innerText = res
  } else {
    outputText.innerText =
      'Please enter valid details i.e. valid DOB [OR] positive number'
  }
}
