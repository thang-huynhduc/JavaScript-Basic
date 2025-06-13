// Number
let age = 18;
const productPrice = 9.99;
console.log(age, productPrice);
console.log('-------------------');

// String
let nameMy = "ThangHuynhDuc";
console.log(nameMy);
console.log('type of', typeof nameMy);
console.log('-------------------');

//Boolen: Đúng (True) or Sai (False).
let isStudent = true;
console.log(isStudent);
console.log('type of', typeof isStudent);
let isFree = false;
console.log(isFree);
console.log('type of:', typeof isFree);
console.log('-------------------');

//Null: Giá trị rỗng hoặc "Không Có Gì".
let emptyValue = null;
console.log(emptyValue);
console.log('type of:', typeof emptyValue);
console.log('typeof:', emptyValue === null); 
console.log('-------------------');

//Undefined: Một biến chưa được gán giá trị.
let notDeffined;
console.log('Undeffined:', notDeffined);
console.log('type of:', typeof notDeffined);   
console.log('-------------------');

//Symbol: Xuất hiện từ phiên bản ES6, 
//Đại diện cho giá chi UNIQUE -ĐỘC NHẤT-BẤT BIẾN, 
//thường được sử dụng làm khóa hoặc id cho các đối tượng - Object.
let uniqueID = Symbol('id');
console.log(uniqueID);
console.log('type of:', typeof uniqueID);
console.log('-------------------');

//BigInt: Xuất hiện từ phiên bản ES2020: Đại diện cho số nguyên có giá trị rất lớn. 
// Lớn hơn kiểu Number thông thường phía trên
let bigNumber1 = BigInt(1234567890123456789012345678901234567890);
console.log(bigNumber1);
let bigNumber2 = 1234567890123456789012345678901234567890n;
console.log(bigNumber2);
console.log('type of 2:', typeof bigNumber2, 'type of 1:', typeof bigNumber1);
console.log('-------------------');