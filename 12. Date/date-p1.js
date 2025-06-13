/**
 * Date: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * JavaScript cung cấp cho ta một đối tượng Build-in (Tích hợp sẵn) là Date để chúng ta làm việc với ngày tháng và thời gian.
 * Đối tượng 'Date' này có thể thao tác nhiều với thời gian. Ví dụ: tạo, định dạng ngày tháng, thực hiện các phép toán với thời gian,...
 */
// -----------------------------
// Part 1: Có khá nhiều cách để khởi tạo 1 đối tượng Date trong JavaScript với những sự khác nhau như sau:

// Cách 1: Không có tham số. Tạo đối tượng Date với ngày và thời gian tại thời điểm hiện tại.
const now = new Date()
console.log('type: ', typeof now)
console.log('now Object: ', now)
console.log('Now: ', now.toLocaleString())

// Cách 2: Với chuỗi ngày tháng (ISO hoặc các định dạng khác).
const specificDate = new Date("2025-6-12 18:21:00")
console.log('specificDate: ', specificDate.toLocaleString())

// Cách 3: Với năm, tháng, ngày, giờ, phút, giây.
const customDate = new Date(2025, 5, 12, 18, 21, 0) // Note: 12 tháng sẽ chạy từ số 0 đến 12
console.log('customDate: ', customDate.toLocaleString())

// Cách 4: Dùng dấu thời gian (timestamp): số mili giây kể từ ngày 1-1-1970 00:00:00 UTC.
const timestampDate = new Date(1749817252150)
console.log('timeStamp Date: ', timestampDate.toLocaleString())
