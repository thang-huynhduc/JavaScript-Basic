/**
 * Part 5: Định dạng dữ liệu Object Date thành chuỗi String.
 */
const formatDate = new Date()
// toISOString(): chuỗi định dạng ISO (Định dạng này phổ biến khi làm việc với API Back-end).
console.log('formatDate: ', formatDate)
console.log('toISOString: ', formatDate.toISOString())

// toLocaleDateString() và toLocaleTimeString(): định dạng riêng ngày tháng hoặc thời gian theo ngôn ngữ người dùng.
console.log('toLocaleDateString(): ', formatDate.toLocaleDateString())
console.log('toLocaleTimeString(): ', formatDate.toLocaleTimeString())

// toDateString() và toTimeString(): trả về ngày hoặc thời gian theo định dạng người dùng ngắn gọn.
console.log('toDateString(): ', formatDate.toDateString())
console.log('toTimeString(): ', formatDate.toTimeString())

