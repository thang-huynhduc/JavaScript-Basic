// Part 2: parseFloat(), parseInt(), Number.prototype.valueOf(), Number.MAX_VALUE, Number.MIN_VALUE, Number.POSITIVE_INFINITY,  Number.NEGATIVE_INFINITY.

// 1. parseFloat(): Phân tích một chuỗi và trả về một số thực (float). Nó sẽ đọc từ trái sang phải cho đến khi gặp một ký tự không thể phân tích thành số thì dừng lại.
console.log('parseFloat("3.14"): ', parseFloat("3.14")); //3.15
console.log('parseFloat("10.5abcd"): ', parseFloat("10.5abcd")); //10.5
console.log('parseFloat("ABC123"): ', parseFloat("ABC123"));  //NaN (Không thể phân tích số từ chuỗi không bắt đầu bằng số)

// 2. parseInt(): Phân tích một chuỗi và trả về số nguyên (Integer). Đọc từ trái sang phải cho đến khi gặp một ký tự không thể phân tích thành số thì dừng lại.
// Ngoài ra, có thể chỉ định cơ số (radix) để chuyển đổi từ một hệ số khác.
console.log('parseInt("42")', parseInt("42") ); //42
console.log('parseInt("10abc")', parseInt("10abc")); //10
console.log('parseInt("1010")', parseInt("1010", 2)); // 10 (1010 trong hệ nhị phân là số 10 trong hệ thập phân)
console.log('parseInt("abc")', parseInt("abc")); // NaN (chuỗi "abc" không thể chuyển thành số)

// 3. Number.prototype.valueOf(): Trả về giá trị gốc của đối tượng Number. Thường được sử dụng để trích xuất giá trị số từ một đối tượng Number.
// Hoặc phổ biến một trường hợp nữa là lấy giá trị của timestamp của một đối tượng Date().
const numObj = new Number(123);
console.log(numObj); // [Number: 123]
console.log('Type of numObj: ', typeof numObj); // Object

const value = numObj.valueOf();
console.log(value); //123
console.log('Type of value: ', typeof value); // Number

console.log('new Date().valueOf(): ', new Date().valueOf()); // Sẽ trả về timestamp tại thời điểm chạy chương trình. // 1743340302117
console.log('new Date("2025-30-3").valueOf(): ', new Date("2025-3-30").valueOf()); //1743267600000

// 4.Number.MAX_VALUE: Là giá trị số lớn nhất mà JS có thể đại diện.
// Giá trị này gần bằng 1.7976931348623157e+308, nếu vượt qua số này thì được coi là Infinity - Vô cực.
const max = Number.MAX_VALUE;
console.log('Number.MAX_VALUE: ', max); // 1.7976931348623157e+308
console.log('2 x Number.MAX_VALUE: ', 2 * max);
console.log(max - 1 === max); // true, do sự chính xác của số quá lớn
console.log(max - max === max); // false vì max - max = 0 

// 5. Number.MIN_VALUE: Là giá trị số dương nhỏ nhất lớn hơn 0 mà JS có thể đại diện.
// Giá trị này khoảng 5e-324, nếu một số nhỏ hơn giá trị này, nó sẽ được làm tròn về 0.
const min = Number.MIN_VALUE; 
console.log('Number.MIN_VALUE: ', min); // 5e-324
console.log('Number.MIN_VALUE / 2: ', min / 2); // 0 vì giá trị này nhỏ hơn MIN_VALUE.

// 6. Number.POSITIVE_INFINITY: Đại diện cho giá trị vô hạn dương (Infinity) trong JS.
const positiveInfinity = Number.POSITIVE_INFINITY;
console.log('Number.POSITIVE_INFINITY: ', positiveInfinity); // Infinity
console.log('1 / 0: ', 1 / 0); // Infinity (Trong toán học không có số chia cho 0)
console.log('positiveInfinity + 1:', positiveInfinity + 1); // Infinity (Cộng thêm vào Infinity vẫn là Infinity)

// 7. Number.NEGATIVE_INFINITY: Đại diện cho giá trị vô hạn dương (Infinity) trong JS.
const negativeInfinity = Number.NEGATIVE_INFINITY;
console.log('Number.NEGATIVE_INFINITY: ', negativeInfinity); // -Infinity
console.log('-1 / 0: ', -1 / 0); // -Infinity (Trong toán học không có số chia cho 0)
console.log('NEGATIVEInfinity - 1:', negativeInfinity + 1); // -Infinity (Cộng thêm vào Infinity vẫn là Infinity)
