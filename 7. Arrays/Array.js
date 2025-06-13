// Trong JS, mảng (array) là một kiểu dữ liệu dùng để lưu trữ danh sách các giá trị.
// Các giá trị trong mảng có thể là bất cứ kiểu dữ liệu nào: number, string, object, thậm chí là các mảng khác.
// Mảng trong JS có các chỉ số (index) bắt đầu từ 0, nghĩa là phần tử đầu tiền của mảng có index là 0, phần tử thứ 2 có index là 1, và cứ tiếp tục tăng dần.

// Ví dụ cơ bản về cách tạo mảng và sử dụng mảng trong JS:

// Tạo một array chứa các số từ 1 đến 5:
let numbers = [1, 2, 3, 4 ,5];
console.log('Độ dài của numbers: ', numbers.length);

// Truy cập phần từ đầu tiên của mảng (index = 0):
console.log('Firsst item of numbers: ', numbers[0]);

// Truy cập phần từ cuối cùng của mảng (index = array.length - 1):
console.log('Last item of numbers: ', numbers[numbers.length - 1]);

// Mảng có thể chứa bất kỳ kiểu dữ liệu nào:
let mixedArray = [true, undefined, [1, 2, 3], {name: 'Thang', age: 21}, 'Hello'];
console.log('Mixed Array: ',mixedArray);