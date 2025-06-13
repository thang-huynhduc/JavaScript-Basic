/**
 * Part 2: Cách lấy từng phần dữ liệu cụ thể từ một đối tượng Date.
 */
const currentDate = new Date()
console.log('Year: ', currentDate.getFullYear()) // Lấy năm
console.log('Month: ', currentDate.getMonth()) // Lấy tháng (0->11)
console.log('Days: ', currentDate.getDate()) // Lấy ngày (1->31)

console.log('Hours: ', currentDate.getHours()) // Lấy giờ (0->23)
console.log('Minutes: ', currentDate.getMinutes()) // Lấy phút (0->59)
console.log('Seconds: ', currentDate.getSeconds()) // Lấy giây (0->59)

console.log('Day: ', currentDate.getDay()) // Lấy ngày trong tuần
