// Có khá nhiều Method - Phương thức khi xử lí dữ liệu Number trong JS
// Một số phương thức quan trọng và sử dụng nhiều trong thực tế:
// Part 1:  toFixed(), toPrecision(), toString(radix), isFinite(), Number.isInteger(), Number.isSafeInteger(), Number.NaN, isNaN()

// 1. toFixed(): Làm tròn 1 số theo số lượng số thập phân được chỉ định trước. Kết quả trả về là String và sẽ làm tròn lên như trong toán học.
const num1 = 3.12341242141;
const fixedNum = num1.toFixed(3);
console.log('Number Fixed: ', fixedNum); // 3.123 (Số lượng số thập phân)
console.log('Number Fixed Type: ', typeof fixedNum);

// 2. toPrecision(): Làm tròn số dựa trên số lượng chữ số chỉ định trước (Bao gốm cả số nguyên và số thập phân).
const num2 = 123.455;
const numPrecision = num2.toPrecision(4); 
console.log('Precision Number: ', numPrecision); // Làm tròn 123.455 thành 123.4 ( 4 số chỉ định trước)
console.log('Precision Number Type: ', typeof numPrecision); // String

// 3. toString(radix): Chuyển đổi một số thành chuỗi với cơ số (radix) được chỉ định trước.
// Danh sách hệ đếm thập phân trong toán học: https://vi.wikipedia.org/wiki/Danh_s%C3%A1ch_h%E1%BB%87_%C4%91%E1%BA%BFm
const num3 = 255; // Hệ thập phân
const binaryStr = num3.toString(2); // Chuyển đổi sang hệ nhị phân
const hexStr = num3.toString(16); // Chuyển đổi sang hệ thập lục phân
console.log('Binary Number:', binaryStr);
console.log('Hexa Number: ', hexStr);

// 4. isFinite(): Kiểm tra xem giá trị có phải một số hữu hạn hay không. Trả về Boolen
console.log('isFinite(123)', isFinite(123)); // true
console.log('isFinite(Infinity)', isFinite(Infinity)); // false
console.log('isFinite(-Infinity)', isFinite(-Infinity)); // false
console.log('isFinite("123")', isFinite(123)) // true vì chuỗi "123" chuyển thành số 123 khi dùng isFIniti()

// 5. Number.isInteger(): Kiểm tra xem giá trị có phải một số nguyên hay không. Trả về kiểu Boolen.
console.log('Number.isInteger(123)', Number.isInteger(123)); // true
console.log('Number.isInteger(123.454)', Number.isInteger(123.454)); // false
console.log('Number.isInteger(Infinity)', Number.isInteger(Infinity)); // false
console.log('Number.isInteger(-Infinity)', Number.isInteger(-Infinity)); // false
console.log('Number.isInteger("123")', Number.isInteger("123")); // false, bởi vì đây là String, không tự chuyển về số như isFinite()

// 6. Number.isSafeInteger(): Kiểm tra xem giá trị có phải là một số nguyên an toàn hay không
// Số nguyên an toàn là một số nguyên nằm trong khoản từ -(2^53 -1) để (2^53 -1)
// Từ -9007199254740991 đến 9007199254740992
console.log('Number.isSafeInteger(123)', Number.isSafeInteger(123)); // true
console.log('Number.isSafeInteger(Math.pow(2, 53))', Number.isSafeInteger(Math.pow(2, 53))); // false - Vượt quá giới hạn
console.log('Number.isSafeInteger(9007199254740991)', Number.isSafeInteger(9007199254740991)); // true - Số nguyên lớn nhất an toàn
console.log('Number.isSafeInteger(9007199254740992)', Number.isSafeInteger(-9007199254740992)); // false - Vượt quá số nguyên an toàn

// 7. Number.NaN(): Đại diện cho giá trị "Not-a-Number" trong JS, thường xuất hiện khi một phép toán số học không thể thực hiện được.
console.log('Number.NaN: ', Number.NaN);
console.log('0 / 0: ', 0 / 0) // NaN: Số chia cho 0 sẽ không xác đinhj
console.log('parseInt("abc"): ', parseInt("abc")); // NaN, chuỗi "abc" không thể chuyển thành số
console.log('parseFloat("abc123"): ', parseFloat("abc123")); // NaN, Không thể phân tích số từ chuỗi bắt đầu bằng ký tự không phải số
console.log('Number.NaN === NaN: ', Number.NaN === NaN) // false, NaN không bằng chính nó, không thể so sánh được
console.log('NaN.toString() === NaN.toString(): ', NaN.toString() === NaN.toString()) // true, vì NaN có thể chuyển thành chuỗi NaN
console.log('NaN.toSting(): ', NaN.toString()); // true

// 8. isNaN(): Kiểm tra xem giá trị có phải NaN (Not-a-Number) hay không? Trả về Boolen.
console.log('isNaN(isNaN): ', isNaN(isNaN)); // true
console.log('isNaN(123): ', isNaN(123)); // false
console.log('isNaN("abc"): ', isNaN("abc")); //true, Vì "abc" không thể chuyển đổi thành số
console.log('isNaN("123"): ', isNaN("123")); // false, Vì "123" có thể chuyển đổi thành số 123 khi dùng isNaN().
