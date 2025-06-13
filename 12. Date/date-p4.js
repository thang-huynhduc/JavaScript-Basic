/**
 * Part 4: Tính toán ngày tháng với Date.
 */

// Ví dụ 1: Tính khoảng cách giữa 2 ngày.
const startDate = new Date("2025-6-13 00:00:00")
const endDate = new Date("2025-6-18 11:11:11")
console.log('E-S: ', endDate - startDate) // = 472271000 ( mili-giây), sau đó ta chia cho số mili-giây của 1 ngày sẽ ra số ngày 

const diffDays = Math.ceil((endDate - startDate)/(1000*60*60*24)) // 1000*60*60*24 = 8640000 mili-giây tương đương 1 ngày
console.log('DiffDays: ', diffDays)

// Ví dụ 2: Thêm hoặc bớt khoảng thời gian.
const date = new Date()
date.setDate(date.getDate() + 7) // Thêm 5 ngày
console.log('Date: ', date.toLocaleString())