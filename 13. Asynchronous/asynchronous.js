/**
 * Asynchronous: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing
 * Những bài học liên tiếp về 'bất đồng bộ; trong JavaScript:
 * 1. Asynchronous.
 * 2. Callback (Callback hell).
 * 3. Promise (Promise hell).
 * 4. Async/await.
 * 5. Event Loop.
 */
// Part 1. Async - Bất đồng bộ trong JavaScript

// Bài toán đồng bộ là gì: Synchronous
console.log('Dòng 1 chạy trước')
console.log('Dòng 2 chạy sau dòng 1')
console.log('Dòng 3 chạy sau dòng 1 và 2')

// Bài toán bất đồng bộ: đọc file dữ liệu và hiển thị dữ liệu ra ngoài. Trong thực tế sẽ cần phải tốn thời gian để hoàn thành tùy theo dung lượng file.

// Bước 1: Khởi tạo biến để lưu trữ dữ liệu của file sau khi đọc xong
let fileData = null
console.log('B1: Bắt đầu đọc file data...')

// Bước 2: Khởi tạo hàm và bắt đầu đọc file dữ liệu
console.log('B2: Đang đọc file data, thực thi hàm readFileData()...')

// Khởi tạo 1 hàm readFileData có nhiệm vụ đọc file. Giả lập sẽ tốn 3 giây (Thực tế còn tùy vào dung lượng file)
const readFileData = () => {
  // Đọc file
  setTimeout(() => {
    // Bước 3: Đọc dữ liệu xong
    console.log('B3: Đọc file data xong, gán data vào biến fileData!')
    fileData = 'Data is already come!'
  }, 3000)
}
// Thực thi hàm readFileData() (Vẫn ở bước 2)
readFileData()

// Bước 4: In ra kết quả
console.log('B4: Đọc file data thành công với dữ liệu nhận được là ', fileData)

setTimeout(() => {
  console.log('FileData: ', fileData)
}, 3300)
