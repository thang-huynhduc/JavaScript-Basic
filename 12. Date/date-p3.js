/**
 * Part 3: Cập nhập lại các thành phần của đối tượng Date().
 */
const currentDate = new Date()
console.log('Before up-date: ', currentDate.toLocaleString())

currentDate.setFullYear(2004)
currentDate.setMonth(4)
currentDate.setDate(2)

currentDate.setHours(0)
currentDate.setMinutes(1)
currentDate.setSeconds(12)
console.log('After up-date: ', currentDate.toLocaleString())
