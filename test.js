const easter = require('./easter.min')
const fs = require('fs')

function loadTestData(fn) {
  const contents = fs.readFileSync(fn, { encoding: 'utf8' })
  const data = []
  for (let line of contents.split('\n')) {
    line = line.trim()
    if (line) {
      const fields = line.split(',')
      const year = parseInt(fields[0].trim())
      const monthIndex = parseInt(fields[1].trim())
      const day = parseInt(fields[2].trim())
      const date = new Date(year, monthIndex, day)
      data.push(date)
    }
  }
  return data
}

function runTests(testData) {
  let total = 0,
    pass = 0,
    fail = 0
  for (const testDate of testData) {
    const year = testDate.getFullYear()
    const computedDate = easter(year)
    const testDateString = testDate.toUTCString()
    const computedDateString = computedDate.toUTCString()
    total += 1
    if (testDateString !== computedDateString) {
      console.error(
        `The test date '${testDateString}' did not equal to computed date '${computedDateString}'`,
      )
      fail += 1
    } else {
      pass += 1
    }
  }
  console.log(
    `Completed ${total} tests with ${pass} passing tests and ${fail} failing tests.`,
  )
  process.exit(fail == 0 ? 0 : 1)
}

runTests(loadTestData('test.data'))
